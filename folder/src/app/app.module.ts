import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Router } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { AddComponent } from './features/add/add.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './partials/navbar/navbar.component';
import { NotfoundComponent } from './error/notfound/notfound.component';
import { EditComponent } from './features/edit/edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DeletedShiftsComponent } from './deleted-shifts/deleted-shifts.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    AddComponent,
    NavbarComponent,
    NotfoundComponent,
    EditComponent,
    DeletedShiftsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
