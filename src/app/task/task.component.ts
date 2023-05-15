import { Component, OnInit} from '@angular/core';
import { Task } from '../models/task';
import { TaskService } from '../services/task.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor(private taskService: TaskService,private toaster:ToastrService){}
  
  tasks:Task[]=[]

  count:number=0

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((responce) => {
      this.tasks = responce;
      this.count = this.tasks.length
      console.log(responce);
    })
  }
  
  selectedTask: Task | undefined;

  setSelectedTask(task: Task) {
    this.selectedTask = task;
  }
   

  deleteTask(id: number | undefined) {
    this.taskService.deleteTask(id).subscribe((responce) => {
      this.tasks = this.tasks.filter(task => task.id != id)
      this.count = this.tasks.length
      this.toaster.success('success','Your task have been deleted successfully',{closeButton:true,positionClass:'toast-top-center',progressBar:true});
    })
  }

}
