<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Medecin extends Model
{
    use HasFactory;

    protected $primaryKey = 'ID_Médecin';

    protected $fillable = [
        'user_id',
        'Spécialité',
        'Sessions_Thérapie_Planifiées',
        // Add other medic-specific attributes here
    ];

    public function utilisateur()
    {
        return $this->belongsTo(Utilisateur::class, 'user_id');
    }
}
