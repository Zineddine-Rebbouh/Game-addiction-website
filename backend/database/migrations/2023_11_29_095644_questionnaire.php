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
        Schema::dropIfExists('questionnaires');
        Schema::create('questionnaires', function (Blueprint $table) {
                $table->increments('ID_Questionnaire');
                $table->integer('patient_id') ->unsigned();
                $table->foreign('patient_id')->references('ID_Patient')->on('patients')->onDelete('cascade');
                $table->date('Date_du_Questionnaire');
                $table->timestamps();
        });

        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('questionnaires');
    }
};
