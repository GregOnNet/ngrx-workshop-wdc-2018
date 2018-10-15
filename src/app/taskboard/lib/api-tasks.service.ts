import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ApiTasks {
  constructor(private _http: HttpClient) {}

  loadAll(): Observable<Task[]> {
    return this._http.get<Task[]>('http://localhost:3000/tasks');
  }

  create(task: Task): Observable<Task> {
    return this._http.post<Task>('http://localhost:3000/tasks', task);
  }
}
