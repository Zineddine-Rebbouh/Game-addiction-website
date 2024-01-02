<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    use HasFactory;

    protected $primaryKey = 'ID_Question';

    protected $fillable = [
        'Texte_de_la_question',
        'Type_de_question',
        'Options_de_Reponse',
        'Points_attribues',
        'Ordre_affichage_dans_le_questionnaire',
        'Dependances_de_question',
        // Add other question-specific attributes here
    ];
}
