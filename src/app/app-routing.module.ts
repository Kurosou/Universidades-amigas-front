import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { homeComponent } from './home/home.component';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch: 'full'},
  {path:'home', component: homeComponent},
  {path: "ingresar", component: homeComponent},
  {path: "registrarse", component: homeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
