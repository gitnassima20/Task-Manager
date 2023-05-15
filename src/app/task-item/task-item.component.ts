import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../models/task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {

  @Input() task: Task | undefined;
  @Output() viewInfo = new EventEmitter<Task>();

  onViewInfoClick() {
    this.viewInfo.emit(this.task);
  }

}
