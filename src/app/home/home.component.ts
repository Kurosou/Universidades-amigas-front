import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, } from '../models/paginator.model';
import { Event } from '../models/event.model';
import { EventInfoService } from '../service/event-info.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.Component.html',
  styleUrls: ['./home.Component.css']
})
export class homeComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  public page: number;
  pageSize = 8;
  pageSizes = [8, 16, 32];
  public category: String;
  public ID: number;
  
  
  Events: Array<Event>;

  Destacados: Array<Event>;
 
 

  constructor(private eventInfoService: EventInfoService) {
    this.Events = new Array<Event>();
    
  }
  ngOnInit(): void {
    this.fillEventos();
    this.fillDestacado();
    
  }

  fillEventos() {
    this.eventInfoService.getEvents().subscribe(event => {
      this.Events = event;
      console.log(this.Events);
    })
  }
  fillDestacado(){  
    this.eventInfoService.getEvents().subscribe(event => {
    this.Destacados = event;
    console.log(this.Destacados);
  })
  }
  handlePageSizeChange(Events): void {
  this.pageSize = Events.target.value;
  this.page = 1;
  }
  filtrarPorCategoria(){
    if (this.category != "" ) {
      this.Events=this.Events.filter(res =>{
      return res.author.toLocaleLowerCase().match(this.category.toLocaleLowerCase());
    });
    }else if (this.category ==""){
      this.ngOnInit();
    }
  }
  filtrarPorID(){
    if (this.ID != null ) {
      this.Events=this.Events.filter(res =>{
      return res.id==this.ID;
    });
    }else if (this.category ==""){
      this.ngOnInit();
    }
  }
}
