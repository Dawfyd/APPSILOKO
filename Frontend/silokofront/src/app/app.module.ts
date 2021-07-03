import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormTemplateComponent } from './components/form-template/form-template.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { QuotaManagementComponent } from './pages/quota-management/quota-management.component';
import { CreditRequestComponent } from './pages/credit-request/credit-request.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { RecordsComponent } from './pages/records/records.component';
import { HeaderMainComponent } from './components/header-main/header-main.component';
import { CreditManagementComponent } from './pages/credit-management/credit-management.component';
import { CardSimpleComponent } from './components/card-simple/card-simple.component';
import { CardCreditComponent } from './components/card-credit/card-credit.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatNativeDateModule } from '@angular/material/core';
import { TableClientsComponent } from './components/table-clients/table-clients.component';
import { SelectDuesComponent } from './components/select-dues/select-dues.component';
import { MatRadioModule, MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { CardQuotaComponent } from './components/card-quota/card-quota.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ClientService } from './services/client.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FormTemplateComponent,
    LoginPageComponent,
    QuotaManagementComponent,
    CreditRequestComponent,
    ClientsComponent,
    RecordsComponent,
    HeaderMainComponent,
    CreditManagementComponent,
    CardCreditComponent,
    CardSimpleComponent,
    TableClientsComponent,
    SelectDuesComponent,
    CardQuotaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSlideToggleModule,
    HttpClientModule,

  ],
  entryComponents: [],
  providers: [
    ClientService,
    {
      provide: MAT_RADIO_DEFAULT_OPTIONS,
      useValue: { color: 'accent' },
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
