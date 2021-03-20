<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;

    protected $fillable = ['description','deadline'];

    public function categories(){
        return $this->belongsToMany(Category::class);
    }

    public function sub_tasks(){
       return $this->hasMany(SubTask::class);
    }
}
