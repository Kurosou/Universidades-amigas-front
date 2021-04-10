import { Component, Input, OnInit } from '@angular/core';
import { Event } from '../models/event.model';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  @Input()
  Event: Event;
 
  constructor() { }

  ngOnInit(): void {
  }

  openUrl () {
    window.open(`${this.Event.download_url}`,'_blank');
  }

}
