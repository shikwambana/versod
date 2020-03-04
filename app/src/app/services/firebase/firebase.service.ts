/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { take } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs'
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

    currentMessage = new BehaviorSubject(null);

    constructor(private firestore: AngularFirestore,
        private angularFireAuth: AngularFireAuth,
        private angularFireDB: AngularFireDatabase,
        private angularFireMessaging: AngularFireMessaging) {
        this.angularFireMessaging.messaging.subscribe(
            (_messaging) => {
                _messaging.onMessage = _messaging.onMessage.bind(_messaging);
                _messaging.onTokenRefresh = _messaging.onTokenRefresh.bind(_messaging);
            }
        )
    }

    addMessage(message) {

        return new Promise<any>((resolve, reject) => {
            this.firestore.collection('messages')
                .add(message)
                .then(res => {
                    console.log(res)
                    resolve(res)
                },
                    err => {
                        reject(err)
                        console.log(err)
                    })
        })
    }

    getCoffeeOrders() {
        return this.firestore.collection("messages", ref =>
            ref.orderBy('date', 'desc')).snapshotChanges();

        // this.firestore.collection('messages').get().toPromise().then(function(querySnapshot) {
        //     querySnapshot.forEach(function(doc) {
        //         // doc.data() is never undefined for query doc snapshots
        //         console.log(doc);
        //     });
        // })
    }

    sendMessage() {
        const messaging = firebase.messaging();

        messaging.usePublicVapidKey('BKU6dhcIFGqpx4LLs0AveTOqdncy9bpKipS7HYUU1oauE_N4tlJ5rL_sdO_-LWdRUN6fcgCnKVh1c5Y5Qm-d3K0');
    }

    /**
     * update token in firebase database
     * 
     * @param userId userId as a key 
     * @param token token as a value
     */
    updateToken(userId, token) {
        // we can change this function to request our backend service
        this.angularFireAuth.authState.pipe(take(1)).subscribe(
            () => {
                const data = {};
                data[userId] = token
                this.angularFireDB.object('fcmTokens/').update(data)
            })
    }

    /**
     * request permission for notification from firebase cloud messaging
     * 
     * @param userId userId
     */
    requestPermission(userId) {
        this.angularFireMessaging.requestToken.subscribe(
            (token) => {
                console.log(token);
                this.updateToken(userId, token);
            },
            (err) => {
                console.error('Unable to get permission to notify.', err);
            }
        );
    }

    /**
     * hook method when new notification received in foreground
     */
    receiveMessage() {
        this.angularFireMessaging.messages.subscribe(
            (payload) => {
                console.log("new message received. ", payload);
                this.currentMessage.next(payload);
            })
    }

}
