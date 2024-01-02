<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::dropIfExists('utilisateurs');
        Schema::create('utilisateurs', function (Blueprint $table) {
            $table->increments('ID_Utilisateur');
            $table->string('Nom');
            $table->string('Prénom');
            $table->enum('Genre', ['Homme', 'Femme']);
            $table->date('Date_de_Naissance');
            $table->string('Adresse_Email')->unique(); 
            $table->string('Mot_de_passe');
            $table->enum('Role', ['patient', 'medcin']); // Add the 'role' column
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('utilisateurs');
    }
};
