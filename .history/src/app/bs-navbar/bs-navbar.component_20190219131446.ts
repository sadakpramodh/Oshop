import { AuthService } from './../auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {
  user$: Observable<firebase.User>;

  constructor(private afAuth: AuthService) {
   }
  logout() {
    this.afAuth.logout();
  }
}
