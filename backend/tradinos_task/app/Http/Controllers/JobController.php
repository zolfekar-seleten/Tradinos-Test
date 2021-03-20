<?php

namespace App\Http\Controllers;

use App\Mail\SendDeadlineExeddedAnnouncment;
use Carbon\Carbon;
use Illuminate\Http\Request;

class JobController extends Controller
{
    public function processQueue($user,$email_message){

        $emailJob = (new SendDeadlineExeddedAnnouncment($user,$email_message))->delay(Carbon::now()->addMilliseconds(30));

        dispatch($emailJob);
    }


}
