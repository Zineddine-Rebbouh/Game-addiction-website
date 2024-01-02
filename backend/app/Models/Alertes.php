<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Alertes extends Model
{
    use HasFactory;

    protected $fillable = [
        'patient_id',
        'Date_de_Alerte',
        'Type_d_Alerte',
        // Add other alert-specific attributes here
    ];

    public function patient()
    {
        return $this->belongsTo(Patient::class, 'patient_id');
    }
}
