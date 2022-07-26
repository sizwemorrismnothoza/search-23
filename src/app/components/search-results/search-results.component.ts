import { Component, OnInit } from '@angular/core';
import { ServiceProvider } from 'src/app/model/service-provider.model';

import { AngularFirestore } from '@angular/fire/firestore';
//import { Observable } from 'rxjs/Observable';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  //listOfServiceProviders:ServiceProvider[];
listOfServiceProviders : Observable<any[]>
  constructor(db: AngularFirestore ) {
    this.listOfServiceProviders = db.collection('serviceProviders').valueChanges();
   }

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
