<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Messages extends Model
{
    use HasFactory;

    protected $primaryKey = 'ID_Message';

    protected $fillable = [
        'expéditeur_id',
        'destinataire_id',
        'Contenu_du_Message',
        'Date_de_l_Envoi',
        // Add other message-specific attributes here
    ];

    public function expéditeur()
    {
        return $this->belongsTo(Utilisateur::class, 'expéditeur_id');
    }

    public function destinataire()
    {
        return $this->belongsTo(Utilisateur::class, 'destinataire_id');
    }
}
