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
    window.open(`https://docs.google.com/forms/d/14n1LfnWB_-h4_WkjDRxcGB005fRO9uYSUGHHs0oiBM0/prefill`,'_blank');
  }

}
