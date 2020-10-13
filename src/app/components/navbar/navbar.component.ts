import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  socialButtons: {name: string, identifier: string, url: string}[];

  constructor() {
    this.socialButtons = [
      {name: 'GitHub', identifier: 'github', url: 'https://github.com/tikimo'},
      {name: 'Linkedin', identifier: 'linkedin', url: '#'}
    ];
  }

  ngOnInit() {
  }


}
