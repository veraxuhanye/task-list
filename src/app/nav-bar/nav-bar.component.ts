//import { Component, OnInit } from '@angular/core';

import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

//export class NavBarComponent implements OnInit {

//  constructor() { }

//  ngOnInit() {
//  }

//}

export class NavBarComponent {
  constructor(private authService: AuthService) { }
}
