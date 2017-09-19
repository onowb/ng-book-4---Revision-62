import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {User} from './user.model';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

/**
 * UserService manages our current user
 */
@Injectable()
export class UserService {
  // `currentUser` contains the current user
  currentUser: Subject<User> = new BehaviorSubject<User>(null);

  public setCurrentUser(newUser: User): void {
    this.currentUser.next(newUser);
  }

  constructor() { }

}

export const userServiceInjectables: Array<any> = [
  UserService
];
