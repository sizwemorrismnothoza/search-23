import { Component, OnInit } from '@angular/core';

import {ServiceProviderService} from '../../services/service-provider.service';
import {ServiceProvider} from '../../model/service-provider.model'

@Component({
  selector: 'app-service-provider-list',
  templateUrl: './service-provider-list.component.html',
  styleUrls: ['./service-provider-list.component.css']
})
export class ServiceProviderListComponent implements OnInit {

  ServiceProviders: ServiceProvider[];

  constructor(private serviceProviderService:ServiceProviderService) { }

  ngOnInit(): void {

    /*this.serviceProviderService.getServiceProviders().subscribe(data => {
      this.ServiceProviders = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as ServiceProvider;
      })
    );*/
  }

  create(serviceProvider: ServiceProvider){
    this.serviceProviderService.createServiceProvider(serviceProvider);
}

}
