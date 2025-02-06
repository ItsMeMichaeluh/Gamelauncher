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
}