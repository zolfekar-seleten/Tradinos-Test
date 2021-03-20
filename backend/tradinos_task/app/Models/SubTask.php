<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubTask extends Model
{
    use HasFactory;

    protected  $fillable = ['description','task_id'];

    public function task(){
     return $this->belongsTo(Task::class);
    }
}
