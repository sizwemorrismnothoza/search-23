import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule,  ReactiveFormsModule} from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import {AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceProviderListComponent } from './components/service-provider-list/service-provider-list.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ServiceProviderService } from './services/service-provider.service';
import { AboutComponent } from './components/about/about.component';
import { AccountSettingsComponent } from './components/account-settings/account-settings.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { CustomerDashboardComponent } from './components/customer-dashboard/customer-dashboard.component';
import { EnterNewpasswordComponent } from './components/enter-newpassword/enter-newpassword.component';
import { HomeComponent } from './components/home/home.component';
import { Join1Component } from './components/join1/join1.component';
import { Join2Component } from './components/join2/join2.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NotifcationSettingsComponent } from './components/notifcation-settings/notifcation-settings.component';
import { OtcComponent } from './components/otc/otc.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { ServiceProviderDetailsComponent } from './components/service-provider-details/service-provider-details.component';
import { SettingsComponent } from './components/settings/settings.component';
import { SigninComponent } from './components/signin/signin.component';
import { AuthenticationService } from './services/authentication.service';

@NgModule({
  declarations: [
    AppComponent,
    ServiceProviderListComponent,
    WelcomeComponent,
    AboutComponent,
    AccountSettingsComponent,
    ChangePasswordComponent,
    ConfirmationComponent,
    CustomerDashboardComponent,
    EnterNewpasswordComponent,
    HomeComponent,
    Join1Component,
    Join2Component,
    NotFoundComponent,
    NotifcationSettingsComponent,
    OtcComponent,
    PaymentComponent,
    ResetPasswordComponent,
    SearchResultsComponent,
    ServiceProviderDetailsComponent,
    SettingsComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ServiceProviderService,
    AuthenticationService,
    AngularFirestoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
