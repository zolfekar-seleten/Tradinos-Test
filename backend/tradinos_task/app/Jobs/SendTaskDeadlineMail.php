<?php

namespace App\Jobs;

use App\Mail\SendDeadlineExeddedAnnouncment;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class SendTaskDeadlineMail implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public $user;
    public $email_message;
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($user, $email_message)
    {

        $this->user = $user;
        $this->$email_message = $email_message;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        new SendDeadlineExeddedAnnouncment($this->user,$this->email_message);
    }
}
