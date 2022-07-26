import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(
    public authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
  }

  openNav(){
    document.getElementById("mySidenav").style.width = "232px";
  }

  closeNav(){
    document.getElementById("mySidenav").style.width = "0";
  }


}
