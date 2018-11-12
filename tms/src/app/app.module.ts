import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { TicketComponent } from './ticket/ticket.component';
||||||| merged common ancestors
=======
import { LoginComponent } from './login/login.component';
>>>>>>> 560f070628c99b7fc2ac1c7c7ac6795b7557d5a7

@NgModule({
  declarations: [
<<<<<<< HEAD
    AppComponent,
    TicketComponent
||||||| merged common ancestors
    AppComponent
=======
    AppComponent,
    LoginComponent
>>>>>>> 560f070628c99b7fc2ac1c7c7ac6795b7557d5a7
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
