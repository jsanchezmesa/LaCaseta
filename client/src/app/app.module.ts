import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './routes'

import { AppComponent } from './app.component';
import { CalendarService } from './services/calendar.service';
import { BookingService } from './services/booking.service';
import { ShowCalendarComponent } from './Componentes/showCalendar/showCalendar.component';
import { UserService } from './services/user.service';
import { DogService } from './services/dog.service';
import { HomeComponent } from './Componentes/home/home.component';
import { SignUpComponent } from './Componentes/sign-up/sign-up.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { SessionService } from './services/session.service';


@NgModule({
  declarations: [
    AppComponent,
    ShowCalendarComponent,
    HomeComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CalendarService, BookingService, UserService, DogService, SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }