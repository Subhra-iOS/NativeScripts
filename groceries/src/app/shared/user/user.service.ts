
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    constructor() { }
    public register(user: User){
        alert(`You're email is : ${user.email}`)
    }

}
