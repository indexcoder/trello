<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCardsTable extends Migration {

    public function up() {
        Schema::create('cards', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->unsignedSmallInteger('order');
            $table->foreignId('list_id')->constrained('card_lists');
            $table->foreignId('owner_id')->constrained('users');
            $table->timestamps();
        });
    }

    public function down() {
        Schema::dropIfExists('cards');
    }
}
