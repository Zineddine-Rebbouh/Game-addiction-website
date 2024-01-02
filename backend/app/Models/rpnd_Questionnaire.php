<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class rpnd_Questionnaire extends Model
{
    use HasFactory;

    protected $primaryKey = 'ID_Reponse';

    protected $fillable = [
        'questionaires_id',
        'question_id',
        'Reponse_a_la_question'
        ///'Score_attribue',
        //'Commentaires_sur_la_reponse',
        // Add other response-specific attributes here
    ];

    public function questionnaire()
    {
        return $this->belongsTo(Questionnaire::class, 'questionaires_id');
    }

    public function question()
    {
        return $this->belongsTo(Question::class, 'question_id');
    }
}
