import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountComponent } from './core/components/layouts/account/account.component';
import { DashbordComponent } from './core/components/layouts/dashbord/dashbord.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    DashbordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
