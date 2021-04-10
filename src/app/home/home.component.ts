import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, } from '../models/paginator.model';
import { Event } from '../models/event.model';
import { EventInfoService } from '../service/event-info.service';

@Component({
  selector: 'app-picture-list',
  templateUrl: './home.Component.html',
  styleUrls: ['./home.Component.css']
})
export class homeComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  public page: number;
  pageSize = 8;
  pageSizes = [8, 16, 32];
 

  Events: Array<Event>;

  constructor(private eventInfoService: EventInfoService) {
    this.Events = new Array<Event>();
  }
  ngOnInit(): void {
    this.fillEventos();
  }


  fillEventos() {
    this.eventInfoService.getEvents().subscribe(event => {
      this.Events = event;
      console.log(this.Events);
    })
  }
  handlePageSizeChange(Events): void {
  this.pageSize = Events.value;
  this.page = 1;
}
}
