import { Injectable } from '@angular/core';
import { Avatar } from './avatar';
import { AVATARS } from './mock-avatars';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AvatarService {


  //create an Observable array of avatars
  //observable allows to fetch from a server
  getAvatars(): Observable<Avatar[]> {
    const avatars = of(AVATARS);

    return avatars;
  }

  constructor() { }
}
