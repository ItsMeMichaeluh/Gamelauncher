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
        Schema::create('games', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('genre');
            $table->longText('description');
            $table->decimal('price');
            $table->string('cover_image');
            $table->string('download_url');
            $table->string('developer');
            $table->string('publisher');
            $table->boolean('is_featured')->default(false);
            $table->boolean('is_active')->default(true);
            $table->date('release_date');
            $table->date('updated_at');
            $table->date('created_at');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('games');
    }
};
