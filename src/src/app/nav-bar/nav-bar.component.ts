import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  icon1 : boolean=false;
  icon2 : boolean=false;
  icon3 : boolean=false;
  icon4 : boolean=false;
  icon5 : boolean=false;
  icon6 : boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

}
