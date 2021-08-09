import { Component, OnInit } from '@angular/core';
import { Avatar } from '../avatar';
import { AvatarService } from '../avatar.service';

//Avatar is the object
//AVATAR is the list of avatars
//avatars is the variable for AVATAR

@Component({
  selector: 'app-avatars',
  templateUrl: './avatars.component.html',
  styleUrls: ['./avatars.component.css']
})
export class AvatarsComponent implements OnInit {

  //declare an avatar array
  avatars: Avatar[] = [];

  //assign the clicked avatar from the template
  selectedAvatar?: Avatar;

  //create onSelect method
  onSelect(avatar: Avatar): void {
    this.selectedAvatar = avatar;
  }

  //create getAvatarsnmethod with the Obervable array
  getAvatars(): void {
    this.avatarService.getAvatars().subscribe(avatars => this.avatars = avatars);
  }


  //inject the avatarService 
  constructor(private avatarService: AvatarService) { }

  ngOnInit(): void {
    this.getAvatars();
  }

}


