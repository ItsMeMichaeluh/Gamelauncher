<?php

namespace Database\Seeders;

use App\Models\Game;
use Illuminate\Database\Seeder;

class GamesTableSeeder extends Seeder
{
    public function run()
    {
        Game::create([
            'title' => 'Minecraft',
            'genre' => 'Sandbox',
            'description' => 'A game about placing blocks and going on adventures.',
            'price' => 29.99,
            'cover_image' => '/games/minecraft.jpg',
            'download_url' => '',
            'release_date' => '2011-11-18'
        ]);

        Game::create([
            'title' => 'Among Us',
            'genre' => 'Party',
            'description' => 'An online multiplayer social deduction game.',
            'price' => 4.99,
            'cover_image' => '/games/among-us.jpg',  // Je moet deze afbeelding nog toevoegen
            'download_url'=> "",
            'release_date' => '2018-06-15'
        ]);

        // Voeg meer games toe als je wilt
    }
}