import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GiftCardComponent } from './components/gift-card/gift-card.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {GiftsComponent} from "./components/gifts/gifts.component";
import {authInterceptorProviders} from './_helpers/auth.interceptor';
import { NavbarComponent } from './components/commons/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { GiftFormComponent } from './components/gift-form/gift-form.component';

@NgModule({
  declarations: [
    AppComponent,
    GiftCardComponent,
    GiftsComponent,
    NavbarComponent,
    LoginComponent,
    RegistrationComponent,
    GiftFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
