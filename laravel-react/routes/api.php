<?php

use App\Http\Controllers\Api\OrderController;
use App\Http\Controllers\Api\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route; 

Route::middleware('auth:sanctum')->get('/wallet-balance', function (Request $request) {
    return response()->json([
        'wallet_balance' => Auth::user()->wallet_balance
    ]);
});

Route::middleware('auth:sanctum')->group(function () {
    Route::get('products', [ProductController::class, 'index']);
    Route::post('order/store', [OrderController::class, 'store']);
    Route::post('order/pay', [OrderController::class, 'payByStripe']);
});