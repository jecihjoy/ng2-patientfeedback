import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppMaterialModule } from './app-material.module';''
import { SurveyService } from './services/survey.service';
import { NgSelectModule } from '@ng-select/ng-select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthenticationService } from './services/authentication.service';
import { AuthGuardService } from './services/auth-guard.service';
import { LocalStorageService } from './services/local-storage.service';
import { SessionService } from './services/session.service';
import { SessionStorageService } from './services/session-storage.service';
import { AuthGuard } from './auth.guard';
import 'hammerjs';

import { AppComponent } from './app.component';
import { SurveyComponent } from './survey.component';
import { LoginComponent } from './login/login.component';
import { LocationsComponent } from './locations/locations.component';
import { ClinicTypeComponent } from './clinic-type/clinic-type.component';
import { CancelPageComponent } from './cancel-page/cancel-page.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SuccessComponent } from './success/success.component';
import { QuestionnareComponent } from './questionnare/questionnare.component';

@NgModule({
  declarations: [
    AppComponent,
    SurveyComponent,
    LoginComponent,
    LocationsComponent,
    ClinicTypeComponent,
    WelcomeComponent,
    SuccessComponent,
    CancelPageComponent,
    QuestionnareComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    NgSelectModule

  ],
  providers: [SurveyService,
    AuthenticationService,
    AuthGuardService,
    LocalStorageService,
    SessionService,
    AuthGuard,
    SessionStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
