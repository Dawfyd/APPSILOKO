import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { CreditRequestComponent } from './pages/credit-request/credit-request.component';
import { QuotaManagementComponent } from './pages/quota-management/quota-management.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { RecordsComponent } from './pages/records/records.component';
import { CreditManagementComponent } from './pages/credit-management/credit-management.component';

const routes: Routes = [
  { path: '', component:  LoginPageComponent},
  { path: 'creditos', component:  CreditRequestComponent },
  { path: 'cupo', component:  QuotaManagementComponent },
  { path: 'clientes', component:  ClientsComponent },
  { path: 'registros', component:  RecordsComponent },
  { path: 'creditos-cajero', component:  CreditManagementComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
