<?php

namespace App\Http\Controllers;

use App\Models\Game;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GameController extends Controller
{
    public function index()
    {
        // Haal alle actieve spellen op
        $games = Game::where('is_active', true)
                     ->orderBy('title')
                     ->paginate(12); // 12 spellen per pagina

        // Render de game store pagina met de spellen
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