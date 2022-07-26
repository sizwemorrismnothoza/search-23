import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openNav(){
    document.getElementById("mySidenav").style.width = "232px";
  }

  closeNav(){
    document.getElementById("mySidenav").style.width = "0";
  }


}
