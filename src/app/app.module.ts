import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { MessageComponent } from './message/message.component';
import { InputComponent } from './input/input.component';

var config = {
  apiKey: "AIzaSyAoFW2zSnCcu6nKkr2VfZNCGopez--AvbQ",
  authDomain: "fir-workshop-ngcolombia.firebaseapp.com",
  databaseURL: "https://fir-workshop-ngcolombia.firebaseio.com",
  projectId: "fir-workshop-ngcolombia",
  storageBucket: "fir-workshop-ngcolombia.appspot.com",
  messagingSenderId: "440387735450"
};

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    MessageComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
