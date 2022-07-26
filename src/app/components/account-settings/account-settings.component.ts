import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getMachanics(){
    /*this.searchService.findByCategory("Machanics").subscribe(
      sp => this.listOfServiceProviders = sp
    )*/
  }

  getBuilders(){
    /*this.searchService.findByCategory("Builders").subscribe(
      sp => this.listOfServiceProviders = sp
    )*/
  }

  getFood(){
    /*this.searchService.findByCategory("Food").subscribe(
      sp => this.listOfServiceProviders = sp
    )*/
  }

  getHair(){
    /*.searchService.findByCategory("Hair").subscribe(
      sp => this.listOfServiceProviders = sp
    )*/
  }

  getPlumbing(){
   /* this.searchService.findByCategory("Plumbing").subscribe(
      sp => this.listOfServiceProviders = sp
    )*/
  }

  getTransport(){
    /*.searchService.findByCategory("Transport").subscribe(
      sp => this.listOfServiceProviders = sp
    )*/
  }

  getMusic(){
    /*this.searchService.findByCategory("Music").subscribe(
      sp => this.listOfServiceProviders = sp
    )*/
  }

  getTutor(){
    /*this.searchService.findByCategory("Tutor").subscribe(
      sp => this.listOfServiceProviders = sp
    )*/
  }

  openNav(){
    document.getElementById("mySidenav").style.width = "232px";
  }

  closeNav(){
    document.getElementById("mySidenav").style.width = "0";
  }


}
