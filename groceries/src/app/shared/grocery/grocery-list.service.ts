import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Config } from '../config';
import { map, catchError } from "rxjs/operators";
import { throwError, Observable } from 'rxjs';
import { Grocery } from './grocery';


@Injectable({
  providedIn: 'root'
})
export class GroceryListService {

    private baseUrl = Config.apiUrl + "appdata/" + Config.appKey + "/Groceries"

    constructor(private http: HttpClient) {

    }
    public loadData(){
        return this.http.get(
            this.baseUrl,
            { headers: this.getCommonHeaders() }
        ).pipe(
            map( (data: any[]) => {
                const groceryList = data
                                    .sort((a, b) => {
                                        return a._kmd.lmt > b._kmd.lmt ? -1 : 1
                                    })
                                    .map( groceryModel => new Grocery(
                                        groceryModel.id,
                                        groceryModel.name
                                    ))

                return groceryList
            },
            (error: any) => {
                console.log(error)
            }),
            catchError(this.handleErrors)
        )
    }

    public loadList(): Observable<Grocery[]> {
        return this.http.get<Grocery[]>(
            this.baseUrl,
            { headers: this.getCommonHeaders() }
        )
    }



    private handleErrors(error: HttpErrorResponse){
        console.log(error)
        return throwError(error)
    }

    private getCommonHeaders() {
        return new HttpHeaders({
            "Content-Type": "application/json",
            "Authorization": "Kinvey " + Config.token,
        });
    }

}

