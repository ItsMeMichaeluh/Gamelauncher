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
            'description' => 'A game about placing blocks and going on adventures.',
            'price' => 29.99,
            'genre' => 'Sandbox',
            'release_date' => '2011-11-18',
            'developer' => 'Mojang',
            'publisher' => 'Mojang',
            'is_featured' => true,
            'is_active' => true,
            'cover_image' => '/games/minecraft.jpg',
            'download_url' => ''
            
        ]);

        Game::create([
            'title' => 'Among Us',
            'description' => 'An online multiplayer social deduction game.',
            'price' => 4.99,
            'genre' => 'Party',
            'release_date' => '2018-06-15',
            'developer' => 'InnerSloth',
            'publisher' => 'InnerSloth',
            'is_featured' => true,
            'is_active' => true,
            'cover_image' => '/games/amongus.png',  // Je moet deze afbeelding nog toevoegen
            'download_url' => ''
        ]);

        Game::create([
            'title' => 'Fornite',
            'description' => 'An online multiplayer shooter where u can build!.',
            'price' => 0.00,
            'genre' => 'Action',
            'release_date' => '2017-07-21',
            'developer' => 'People Can Fly',
            'publisher' => 'Epic games',
            'is_featured' => true,
            'is_active' => true,
            'cover_image' => '/games/fornite.png',  // Je moet deze afbeelding nog toevoegen
            'download_url' => ''
        ]);

        // Voeg meer games toe als je wilt
    }
}