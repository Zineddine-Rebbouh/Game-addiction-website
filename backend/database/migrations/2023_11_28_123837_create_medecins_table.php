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
        Schema::dropIfExists('medecins');
        Schema::create('medecins', function (Blueprint $table) {
            $table->increments('ID_Médecin'); 
            $table->integer('user_id') ->unsigned();
            $table->foreign('user_id')->references('ID_Utilisateur')->on('utilisateurs')->onDelete('cascade'); 
            $table->string('Spécialité');
            $table->string('Sessions_Thérapie_Planifiées');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('medecins');
    }
};
