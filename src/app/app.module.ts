import { SidenavModule } from './sidenav/sidenav.module';
import { AuthModule } from './auth/auth.module';
import { NavbarModule } from './navbar/navbar.module';
import { PlayerModule } from './player/player.module';
import { PublisherModule } from './publisher/publisher.module';
import { ConsumerModule } from './consumer/consumer.module';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule, MdSidenavModule } from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    NavbarModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    CoreModule,
    MaterialModule.forRoot(),
    BrowserAnimationsModule,
    MdSidenavModule,
    ConsumerModule,
    PublisherModule,
    SidenavModule,
    PlayerModule,
    AuthModule,

    RouterModule.forRoot([
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
