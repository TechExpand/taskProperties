import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Tasks } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private firestore: AngularFirestore, private httpClient: HttpClient) { }


  getPolicies() {
    return this.firestore.collection('workorders').snapshotChanges();
}



getPoliciesFilter(property: any) {
  return this.firestore.collection('workorders', ref => {
    return ref
            .where('property', '==', property)
  }).snapshotChanges()
}



public sendGetRequest(mail: any, body:any, title:any ){
  return this.httpClient.get(`https://wingu1000.pythonanywhere.com/foodtruck-vendor/sendmail/mail=${mail}&body=${body}&title=${title}/`);
}

createPolicy(task: any){
  return this.firestore.collection('workorders').add(task);
}


updatePolicy(task: any, id: string){
  this.firestore.doc('workorders/' + id).update(task);
}

deletePolicy(taskid: string){
  this.firestore.doc('workorders/' + taskid).delete();
}
}
