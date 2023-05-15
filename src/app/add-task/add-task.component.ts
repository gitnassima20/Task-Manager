import { TaskService } from './../services/task.service';
import { Component} from '@angular/core';
import { FormControl, FormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { Task } from '../models/task';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

  constructor(private route:Router,private taskService:TaskService, private toaster:ToastrService){}
 
  tasks : Task[]=[]
  taskForm = new FormGroup({
    taskName : new UntypedFormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(16),Validators.pattern('[a-zA-Z ]*')]),
    situation : new FormControl(false,[Validators.required]),
    date: new UntypedFormControl('',[Validators.required,Validators.pattern('^[0-3][0-9]/[01][0-9]/[0-9]{4} [0-9]{2}:[0-5][0-9] (AM|PM)$')]),
    description : new UntypedFormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(25),Validators.pattern('[a-zA-Z ]*')]),
  })

  addTask() {
    if (this.taskForm.invalid) {
      this.toaster.error('error', 'Please fill all the fields',{closeButton:true, progressBar:true});
      return;
    }
    const { taskName, situation, date, description } = this.taskForm.value;
    this.taskService.persistTask({ taskName, situation, date,description }).subscribe((response: any) => {
      this.tasks = [response, ...this.tasks];
        this.toaster.success('success','Your task have been added successfully',{closeButton:true, progressBar:true,positionClass:'toast-top-center'});
        this.route.navigate(['task'])
      
    });
  }
  
  
  



}
