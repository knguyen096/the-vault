import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AvatarsComponent } from './avatars/avatars.component';
import { AvatarDetailComponent } from './avatar-detail/avatar-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    AvatarsComponent,
    AvatarDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
