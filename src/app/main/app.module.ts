/**
 * example-angular4
 * https://github.com/3lXample/example-angular4
 *
 * Copyright (c) 2017 3lXample (https://github.com/3lXample)
 * Licensed under the MIT license
 */
import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent }     from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HeaderComponent }  from './_layout/header.component';
import { NavComponent }     from './_layout/nav.component';
import { FooterComponent }  from './_layout/footer.component';

import { UserService }      from './_services/user.service';

import { HomeComponent }    from './home/home.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
