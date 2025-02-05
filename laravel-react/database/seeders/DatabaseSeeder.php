<?php

namespace Database\Seeders;

use App\Models\User;
use Database\Seeders\GamesTableSeeder;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // Dit gebruikt de fake email
        User::factory()->create();

        // Run de games seeder
        $this->call([
            GamesTableSeeder::class
        ]);
    }
}