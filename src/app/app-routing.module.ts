import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GiftsComponent} from "./components/gifts/gifts.component";
import {LoginComponent} from "./components/login/login.component";
import {RegistrationComponent} from "./components/registration/registration.component";

const routes: Routes = [
  {path: 'allgifts', component: GiftsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegistrationComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
