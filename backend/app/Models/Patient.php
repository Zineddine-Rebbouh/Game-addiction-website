<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Patient extends Model
{
    use HasFactory;

    protected $primaryKey = 'ID_Patient';

    protected $fillable = [
        'user_id',
        'Niveau_d_Addiction',
        'Moyenne_d_Heures_de_Jeu_par_Semaine',
        'Moyenne_de_Mois_de_Jeu',
        'Score_d_Insomnie',
        'Score_de_Somnolence_Excessive',
        'Score_d_Anxiété',
        'Score_de_Dépression',
    ];

    public function utilisateur()
    {
        return $this->belongsTo(Utilisateur::class, 'user_id');
        
    }
}
