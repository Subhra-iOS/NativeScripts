
import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Config } from '../config';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    constructor(private httpClient: HttpClient) { }

    public register(user: User){
        return this.httpClient.post(
                Config.apiUrl + "user/" + Config.appKey,
                JSON.stringify({
                    username: user.email,
                    email: user.email,
                    password: user.password
                }),
                { headers: this.getHeaders() }
        )
    }

    private getHeaders(){
        return new HttpHeaders({
            "Content-Type": "application/json",
            "Authorization": Config.appUserHeader
        })
    }

}
