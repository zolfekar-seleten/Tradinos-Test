<?php

namespace App\Console\Commands;

use App\Jobs\SendTaskDeadlineMail;
use App\Models\Task;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Console\Command;

class CheckTasksDeadline extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'check_deadlines:send';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Check tasks deadlines and send emails to users';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {

        foreach (Task::whereDate('deadline','>', Carbon::today())->cursor() as $task){
            $task->end_flag = 1;
            $task->save;

            foreach (User::all() as $user){
                $emailJob = (new SendTaskDeadlineMail($user,$task->name.' deadline exceeded'))
                    ->delay(Carbon::now()->addMilliseconds(30));

                dispatch($emailJob);
            }
        }



    }
}
