<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Game extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'price',
        'cover_image',
        'download_url',
        'genre',
        'release_date',
        'developer',
        'publisher',
        'is_featured',
        'is_active'
    ];

    // Relatie met gebruikers die het spel hebben gekocht
    public function owners()
    {
        return $this->belongsToMany(User::class, 'purchases')
                    ->withTimestamp('purchased_at');
    }
}