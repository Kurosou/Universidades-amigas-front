import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from 'src/environment/environment';
import { Event } from '../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventInfoService {

  private url='http:Localhost:8080/ap1/v1/Carteles'

  constructor(private http: HttpClient) { }


  getEvents (): Observable<Event []> {

    return this.http.get<Event[]>(`${this.url}`);

  }


}
