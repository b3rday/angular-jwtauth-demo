import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { RouterModule , Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';

import { JWTAuthModule } from '@techiediaries/ngx-jwtauth';

import { HttpClientModule } from '@angular/common/http';
import 'hammerjs';

const appRoutes: Routes = [
    { path: '', component: AuthComponent, canActivate: [] },
    { path: 'home', component: HomeComponent },
    { path: '**', redirectTo: '' }
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    MaterialModule,
    HttpClientModule,
    JWTAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

