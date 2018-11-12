import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TicketComponent } from './ticket/ticket.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ReportComponent } from './report/report.component';

import { LoginComponent } from './login/login.component';
import { FlightComponent } from './ticket/flight/flight.component';
import { PassengerComponent } from './ticket/passenger/passenger.component';


import {FormsModule} from '@angular/forms';
import {RouterModule,  Routes} from '@angular/router';

const appRoutes: Routes=[
  { path: '', component: LoginComponent  },
  { path: 'ticket', component: TicketComponent  },
  { path: 'invoice', component: InvoiceComponent  }
  { path: 'report', component: ReportComponent  }

];
@NgModule({
  declarations: [
    AppComponent,
    TicketComponent,
    InvoiceComponent,
    ReportComponent,
    LoginComponent,
    FlightComponent,
    PassengerComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
    //Routes

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
