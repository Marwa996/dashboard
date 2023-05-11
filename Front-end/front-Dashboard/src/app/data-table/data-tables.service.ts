import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserData } from './data-table.component';


@Injectable({
  providedIn: 'root'
})
export class DataTablesService {
  private baseURL = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private _HttpClient: HttpClient) { }
  
  getData(): Observable<UserData[]>{
    return this._HttpClient.get<UserData[]>(this.baseURL)
    
  }

}
