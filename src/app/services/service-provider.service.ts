import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { ServiceProvider } from '../model/service-provider.model'
 
@Injectable({
  providedIn: 'root'
})
export class ServiceProviderService {

  constructor(private firestore: AngularFirestore) { }

  getServiceProviders() {
    return this.firestore.collection('serviceProviders').snapshotChanges();
  }

  createServiceProvider(servceProvider: ServiceProvider){
    return this.firestore.collection('serviceProviders').add(servceProvider);
  }

  

  /*updatePolicy(serviceProvider: ServiceProvider){
    delete serviceProvider.id;
    this.firestore.doc('policies/' + serviceProvider.id).update(serviceProvider);
  }*/

  


}
