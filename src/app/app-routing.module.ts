import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { Join1Component } from './components/join1/join1.component';
import { Join2Component } from './components/join2/join2.component';
import { SigninComponent } from './components/signin/signin.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { OtcComponent } from './components/otc/otc.component';
import { EnterNewpasswordComponent } from './components/enter-newpassword/enter-newpassword.component';
import { CustomerDashboardComponent } from './components/customer-dashboard/customer-dashboard.component';
import { SettingsComponent } from './components/settings/settings.component';
import { NotifcationSettingsComponent } from './components/notifcation-settings/notifcation-settings.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { PaymentComponent } from './components/payment/payment.component';
import { AccountSettingsComponent } from './components/account-settings/account-settings.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';



const routes: Routes = [
  {path:'', component: WelcomeComponent},
  {path:'home', component: HomeComponent},
  {path:'about', component: AboutComponent},
  
  {path:'join1', component: Join1Component},
  {path:'join2', component: Join2Component},
  {path:'signin',component: SigninComponent},
  {path:'resetpassword', component: ResetPasswordComponent},
  {path: 'otc', component: OtcComponent},
  {path:'newpassword', component: EnterNewpasswordComponent},
  {path:'customerdashboard', component: CustomerDashboardComponent},
  {path:'settings', component: SettingsComponent},
  {path:'notificationsettings', component: NotifcationSettingsComponent},
  {path:'changepassword', component: ChangePasswordComponent},
  {path:'payment', component: PaymentComponent},
  {path:'accountsettings', component: AccountSettingsComponent},
  {path:'results', component: SearchResultsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
