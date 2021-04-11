import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { homeComponent } from './home/home.component';
import { EventComponent } from './event/event.component';

//Angular material imports
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';

import {MatToolbarModule} from '@angular/material/toolbar';

//Import http service
import { HttpClientModule } from '@angular/common/http';

//Import prime gn
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {NgxPaginationModule} from 'ngx-pagination';

import { NavAllComponent } from './home/nav-all/nav-all.component';


@NgModule({
  declarations: [
    AppComponent,
    homeComponent,
    EventComponent,
    NavAllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatPaginatorModule,
    FormsModule,
    HttpClientModule,
    CardModule,
    ButtonModule,
    NgxPaginationModule,
    MatToolbarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
