import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountComponent } from './core/components/layouts/account/account.component';
import { DashbordComponent } from './core/components/layouts/dashbord/dashbord.component';
import { AuthService } from './core/components/layouts/service/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    DashbordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
