import React, { useState, useEffect } from 'react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
// Import shadcn componenten als je die gebruikt
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Cart = ({ auth }) => {  // Inertia geeft automatisch auth prop door
    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        fetchCartItems();
    }, []);

    const fetchCartItems = async () => {
        try {
            const response = await fetch('/api/cart');
            const data = await response.json();
            setCartItems(data);
            calculateTotal(data);
        } catch (error) {
            console.error('Error fetching cart:', error);
        }
    };

    const calculateTotal = (items) => {
        const sum = items.reduce((acc, item) => {
            return acc + (item.game.price * item.quantity);
        }, 0);
        setTotal(sum);
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Shopping Cart" />
            
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <Card className="w-full max-w-2xl mx-auto">
                        <CardHeader>
                            <CardTitle>Shopping Cart</CardTitle>
                        </CardHeader>
                        <CardContent>
                            {cartItems.length === 0 ? (
                                <p className="text-gray-500">Your cart is empty</p>
                            ) : (
                                <div className="space-y-4">
                                    {cartItems.map((item) => (
                                        <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg">
                                            <div>
                                                <h3 className="font-medium">{item.game.title}</h3>
                                                <p className="text-sm text-gray-500">
                                                    Quantity: {item.quantity}
                                                </p>
                                                <p className="text-sm font-medium">
                                                    €{(item.game.price * item.quantity).toFixed(2)}
                                                </p>
                                            </div>
                                            <Button
                                                variant="ghost"
                                                onClick={() => removeFromCart(item.id)}
                                            >
                                                Remove
                                            </Button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </CardContent>
                        <CardFooter className="flex justify-between">
                            <div className="text-lg font-medium">
                                Total: €{total.toFixed(2)}
                            </div>
                            <Button
                                onClick={() => console.log('Checkout')}
                                disabled={cartItems.length === 0}
                            >
                                Checkout
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Cart;