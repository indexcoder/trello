<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCardListsTable extends Migration {

    public function up() {
        Schema::create('card_lists', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->foreignId('board_id')->constrained('boards');
            $table->timestamps();
        });
    }

    public function down() {
        Schema::dropIfExists('card_lists');
    }

}
