import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { CreditRequestComponent } from './pages/credit-request/credit-request.component';
import { QuotaManagementComponent } from './pages/quota-management/quota-management.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { RecordsComponent } from './pages/records/records.component';
import { CreditManagementComponent } from './pages/credit-management/credit-management.component';
import { AuthenticatedGuard } from './services/guards/authenticated.guard';

const routes: Routes = [
  { path: '', redirectTo: 'creditos', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'creditos', component: CreditRequestComponent, canActivate: [AuthenticatedGuard], },
  { path: 'cupo', component: QuotaManagementComponent, canActivate: [AuthenticatedGuard], },
  { path: 'clientes', component: ClientsComponent, canActivate: [AuthenticatedGuard], },
  { path: 'registros', component: RecordsComponent, canActivate: [AuthenticatedGuard], },
  { path: 'cajero', component: CreditManagementComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
