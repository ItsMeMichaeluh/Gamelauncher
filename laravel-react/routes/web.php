<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\GameController;
use App\Http\Controllers\CartController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// Verander deze route
Route::get('/dashboard', function () {
    // Haal de games op die de ingelogde gebruiker bezit
    $purchasedGames = Auth::user()->purchasedGames;
    
    return Inertia::render('Library', [
        'purchasedGames' => $purchasedGames
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // Voeg deze game routes toe
    Route::get('/games', [GameController::class, 'index'])->name('games.index');
    Route::get('/games/{game}', [GameController::class, 'show'])->name('games.show');

    
});

Route::get('/Cart', function () {
    return Inertia::render('Cart');
})->middleware(['auth'])->name('Cart');

require __DIR__.'/auth.php';