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
    window.open(`https://forms.gle/XzoNwezGV4wMKst36`,'_blank');
  }

}
