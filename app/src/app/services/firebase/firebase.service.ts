/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import 'firebase/database';
// import Firebase Authentication (optional)
import '@firebase/auth';

// import Firebase Realtime Database (optional)
import '@firebase/database';

// import Cloud Firestore (optional)
import '@firebase/firestore';

@Injectable()
export class firebaseService {

    constructor(   private firestore: AngularFirestore   ) {}

    addMessage(message){

        return new Promise<any>((resolve,reject) =>{
            this.firestore.collection('messages')
            .add(message)
            .then(res => {
                console.log(res)
                resolve(res)
            },
            err => {
                reject(err)
                console.log(err)})
        })
    }

    getCoffeeOrders() { 
        return this.firestore.collection("messages").snapshotChanges();
      }

}
