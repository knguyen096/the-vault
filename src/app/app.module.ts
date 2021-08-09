import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AvatarsComponent } from './avatars/avatars.component';
import { AvatarDetailComponent } from './avatar-detail/avatar-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
    AvatarsComponent,
    AvatarDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,

    MatExpansionModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
