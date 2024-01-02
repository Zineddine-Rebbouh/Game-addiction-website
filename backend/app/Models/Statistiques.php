<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Statistiques extends Model
{
    use HasFactory;

    protected $primaryKey = 'ID_Statistique';

    protected $fillable = [
        'user_id',
        'Date_de_la_Statistique',
        'Statistiques_spécifiques_à_l_utilisation_de_l_application',
        // Add other statistic-specific attributes here
    ];

    public function utilisateur()
    {
        return $this->belongsTo(Utilisateur::class, 'user_id');
    }

}
