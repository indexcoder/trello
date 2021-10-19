<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Board extends Model {

    use HasFactory;

    protected $fillable = ['title', 'color', 'owner_id'];

    public function lists() {
        return $this->hasMany(CardList::class, 'board_id');
    }

    public function owner() {
        return $this->belongsTo(User::class, 'owner_id');
    }

}
