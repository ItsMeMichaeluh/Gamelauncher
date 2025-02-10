<?php

namespace App\Http\Controllers;

use App\Models\Game;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GameController extends Controller
{
    public function index()
    {
        $games = Game::where('is_active', true)
                     ->orderBy('created_at', 'desc')
                     ->get();

        return Inertia::render('Games/Index', [
            'games' => $games
        ]);
    }

    public function show(Game $game)
    {
        return Inertia::render('Games/Show', [
            'game' => $game
        ]);
    }

    public function store(Request $request)
{
    $request->validate([
        'cover_image' => 'required|image|mimes:jpg,png,jpeg|max:2048',
    ]);

    // Sla de afbeelding op in storage/app/public/images
    $path = $request->file('cover_image')->store('games', 'public');

    return response()->json(['path' => $path]);
}


}