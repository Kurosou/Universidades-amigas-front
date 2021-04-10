import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from 'src/environment/environment';
import { Event } from '../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventInfoService {

  constructor(private http: HttpClient) { }


  getEvents (): Observable<Event []> {

    return this.http.get<Event[]>(`${enviroment.urlApi}`);

  }


}
