import { Component, Input, OnInit } from '@angular/core';
import { Event } from '../models/event.model';

@Component({
  selector: 'app-destacado',
  templateUrl: './destacado.component.html',
  styleUrls: ['./destacado.component.css']
})
export class DestacadoComponent implements OnInit {

  @Input()
  Event: Event;

  constructor() { }

  ngOnInit(): void {
  }

  openUrl () {
    window.open(`${this.Event.download_url}`,'_blank');
  }

}
 