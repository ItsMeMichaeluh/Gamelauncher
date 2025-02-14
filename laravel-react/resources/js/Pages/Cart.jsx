import React, { useState, useEffect } from 'react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

const Cart = ({ auth }) => {
    // State voor winkelwagen items en totaalbedrag
    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] = useState(0);

    // Laad winkelwagen items wanneer de component mount
    useEffect(() => {
        fetchCartItems();
    }, []);

    // Functie om winkelwagen items op te halen
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

    // Bereken het totaalbedrag van alle items
    const calculateTotal = (items) => {
        const sum = items.reduce((acc, item) => {
            return acc + (item.game.price * item.quantity);
        }, 0);
        setTotal(sum);
    };

    // Verwijder een item uit de winkelwagen
    const removeFromCart = async (itemId) => {
        try {
            await fetch(`/api/cart/${itemId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content')
                }
            });
            
            const updatedItems = cartItems.filter(item => item.id !== itemId);
            setCartItems(updatedItems);
            calculateTotal(updatedItems);
        } catch (error) {
            console.error('Error removing item:', error);
        }
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Shopping Cart" />
            
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {/* Winkelwagen container */}
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                        <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>
                        
                        {/* Toon bericht als winkelwagen leeg is */}
                        {cartItems.length === 0 ? (
                            <p className="text-gray-500">Your cart is empty</p>
                        ) : (
                            <div className="space-y-4">
                                {/* Lijst van items in winkelwagen */}
                                {cartItems.map((item) => (
                                    <div 
                                        key={item.id} 
                                        className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                                    >
                                        <div>
                                            <h3 className="font-medium">{item.game.title}</h3>
                                            <p className="text-sm text-gray-500">
                                                Quantity: {item.quantity}
                                            </p>
                                            <p className="text-sm font-medium">
                                                €{(item.game.price * item.quantity).toFixed(2)}
                                            </p>
                                        </div>
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                ))}

                                {/* Footer met totaal en checkout knop */}
                                <div className="flex justify-between items-center mt-6 pt-6 border-t">
                                    <div className="text-lg font-medium">
                                        Total: €{total.toFixed(2)}
                                    </div>
                                    <button
                                        onClick={() => window.location.href = '/checkout'}
                                        disabled={cartItems.length === 0}
                                        className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
                                    >
                                        Checkout
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Cart;