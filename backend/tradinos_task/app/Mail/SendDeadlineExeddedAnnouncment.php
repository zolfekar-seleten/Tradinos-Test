<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class SendDeadlineExeddedAnnouncment extends Mailable
{
    use Queueable, SerializesModels;

    public $user;
    public $email_message;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($user, $email_message)
    {
        $this->user = $user;
        $this->email_message = $email_message;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $to_name = $this->user->name;

        $to_email = str_replace(' ', '', $this->user->email);
        $data = array('name'=>$this->email_message, "body" => "deadline exceeded ");
        Mail::send('emails.mail', $data, function($message) use ($to_name, $to_email) {
            $message->to($to_email, $to_name)
                ->subject('deadline exceeded ');
            $message->from('tradinostest@gmail.com','deadline exceeded ');
        });
    }
}
