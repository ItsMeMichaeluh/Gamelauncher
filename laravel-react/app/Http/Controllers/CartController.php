<?php

namespace App\Http\Controllers;
use App\Models\CartItem;
use Illuminate\Http\Request;

class CartController extends Controller
{
    public function index()
    {
        // Haal alle items op voor de ingelogde gebruiker, inclusief game details
        $cartItems = CartItem::with('game')
            ->where('user_id', auth()->id())
            ->get();
            
        return response()->json($cartItems);
    }

    public function add(Request $request)
    {
        $validated = $request->validate([
            'game_id' => 'required|exists:games,id',
            'quantity' => 'required|integer|min:1'
        ]);

        $cartItem = CartItem::updateOrCreate(
            [
                'user_id' => auth()->id(),
                'game_id' => $validated['game_id']
            ],
            [
                'quantity' => $validated['quantity']
            ]
        );

        return response()->json($cartItem->load('game'));
    }

    public function remove($id)
    {
        CartItem::where('user_id', auth()->id())
            ->where('id', $id)
            ->delete();

        return response()->json(['message' => 'Item removed']);
    }
}