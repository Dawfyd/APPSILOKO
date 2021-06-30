import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { QuotaManagementComponent } from './pages/quota-management/quota-management.component';
import { CreditRequestComponent } from './pages/credit-request/credit-request.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { RecordsComponent } from './pages/records/records.component';
import { HeaderMainComponent } from './components/header-main/header-main.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginPageComponent,
    QuotaManagementComponent,
    CreditRequestComponent,
    ClientsComponent,
    RecordsComponent,
    HeaderMainComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
