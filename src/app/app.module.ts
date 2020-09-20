import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignuploginComponent } from './signuplogin/signuplogin.component';
import { ServicesComponent } from './services/services.component';
import{HomeModule} from './home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    SignuploginComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
