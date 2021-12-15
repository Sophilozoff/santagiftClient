import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GiftsComponent} from "./components/gifts/gifts.component";
import {LoginComponent} from "./components/login/login.component";

const routes: Routes = [
  {path: 'allgifts', component: GiftsComponent},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
