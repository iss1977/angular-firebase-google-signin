import { Injectable } from '@angular/core';

// we need the following Classes:
import {Router} from '@angular/router'

// for auth:
import firebase from 'firebase/app';
import {AngularFireAuth} from '@angular/fire/auth'

// firestore

import {
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators'

//Our User interface
import {User} from './user.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //the "User document" will be shared across our application
  user$: Observable<User>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {

    // get a reference for the user document
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
   }

  async googleSignin(){
    const provider = new firebase.auth.GoogleAuthProvider();
    const credential = await this.afAuth.signInWithPopup(provider);
    return this.updateUserData(credential.user);
  }

  async signOut(){
    await this.afAuth.signOut();
    return this.router.navigate(['/']);;
  }

  updateUserData(user){
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

    //the data we want to save
    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoUrl: user.photoURL
    }

    return userRef.set(data, {merge: true});
  }



}
