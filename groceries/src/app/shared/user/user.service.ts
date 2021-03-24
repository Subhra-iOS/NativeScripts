
import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Config } from '../config';
import { tap, catchError } from "rxjs/operators";
import { throwError } from 'rxjs';

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

    public login(user: User){
        return this.httpClient.post(
            Config.apiUrl + "user/" + Config.appKey + "/login",
            JSON.stringify({
                username: user.email,
                email: user.email,
                password: user.password
            }),
            { headers: this.getHeaders()}
        ).pipe(
            tap(
            (data: any) => {
                Config.token = data._kmd.authtoken //Need to check
                console.log(Config.token)
            },
            (errorResponse: any) =>{
                console.log(errorResponse)
            }),
            catchError(this.handleErrors)

        )
    }

    private handleErrors(error: HttpErrorResponse){
        console.log(error)
        return throwError(error)
    }

    private getHeaders(){
        return new HttpHeaders({
            "Content-Type": "application/json",
            "Authorization": Config.appUserHeader
        })
    }

}
