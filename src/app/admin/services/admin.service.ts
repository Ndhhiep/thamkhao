import { Injectable } from '@angular/core';
import { Auth,  onAuthStateChanged,  signOut } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  user: BehaviorSubject<User|null>;

  constructor(private auth: Auth) { 
    this.user = new BehaviorSubject<User|null>({
      id: '',
      name: '',
      email: '',
      avatarUrl: ''
    } as User);

    onAuthStateChanged(this.auth, (user) => {
      // console.log(user);
      if(user) {
        this.user.next({
          id: user.uid,
          name: user.displayName,
          email: user.email,
          avatarUrl: user.photoURL
        } as User);
      }
      else {
        this.user.next(null);
      }
    },(error) => {
      console.log(error);
    });
  }

  async logOut() {
    await signOut(this.auth);
  }
}
