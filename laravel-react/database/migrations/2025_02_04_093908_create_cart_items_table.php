<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('cart_items', function (Blueprint $table) {
            $table->id();
            // We gebruiken unsignedBigInteger voor ID's die naar andere tabellen verwijzen
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('game_id');
            // Quantity met een standaardwaarde van 1
            $table->integer('quantity')->default(1);
            // Timestamps voor created_at en updated_at
            $table->timestamps();

            // Foreign key constraints om data-integriteit te waarborgen
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('game_id')->references('id')->on('games')->onDelete('cascade');
            
            // Voorkom dubbele items in winkelwagen
            $table->unique(['user_id', 'game_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cart_items');
    }
};