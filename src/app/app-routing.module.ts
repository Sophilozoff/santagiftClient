import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GiftsComponent} from "./gifts/gifts.component";

const routes: Routes = [
  {path: 'allgifts', component: GiftsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
