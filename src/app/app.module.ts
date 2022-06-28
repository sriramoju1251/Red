import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlackComponent } from './black/black.component';
import { WhiteComponent } from './white/white.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GreenComponent } from './green/green.component';
@NgModule({
  declarations: [
    AppComponent,
    BlackComponent,
    WhiteComponent,
    GreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
