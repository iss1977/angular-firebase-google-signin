import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { RouterModule, Routes } from '@angular/router'

const routes: Routes = []


var firebaseConfig = {
  apiKey: "AIzaSyD2G8qs2rPJKB-DXxXCZO-iepp3tK88u78",
  authDomain: "angular-test-da2c9.firebaseapp.com",
  databaseURL: "https://angular-test-da2c9-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "angular-test-da2c9",
  storageBucket: "angular-test-da2c9.appspot.com",
  messagingSenderId: "822215967559",
  appId: "1:822215967559:web:cc6a76e280bdc06bd70262",
  measurementId: "G-NEMZRE6DTR"
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
