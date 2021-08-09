import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvatarsComponent } from './avatars/avatars.component';


//when user clicks the link or pastes url, this will tell ROuter which component to display
const routes: Routes = [
  { path: 'avatars', component: AvatarsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }