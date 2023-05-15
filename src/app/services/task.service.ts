import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http : HttpClient) { }

  baseUrl = 'http://localhost:3000/tasks';

  getTasks() {
    return this.http.get<Task[]>(this.baseUrl);
  }

  getTask(id: number) {
    return this.http.get<Task>(`${this.baseUrl}/${id}`);
  }

  persistTask(data:Task){
    return this.http.post<Task[]>(this.baseUrl,data);
  }

  putTask(id:number,data:Task){
    return this.http.put<Task>(`http://localhost:4200/add-task/${id}`,data);
  }

  deleteTask(id: number | undefined){
    return this.http.delete<Task>(`${this.baseUrl}/${id}`);
  }
}
