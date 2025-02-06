<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

Route::middleware('auth:sanctum')->get('/wallet-balance', function (Request $request) {
    return response()->json([
        'wallet_balance' => Auth::user()->wallet_balance
    ]);
});
