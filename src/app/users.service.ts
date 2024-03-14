import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn : "root"
})

export class usersService{
    private apiUrl = "http://localhost:8080/api/v1/users"
    constructor(private http: HttpClient){}

    createUsers(userData: any[]): Observable<String[]>{
        const headers = new HttpHeaders({'Content-type': 'application/json'});
        return this.http.post<any[]>(this.apiUrl, userData, {headers});
    }

    // isValidUsers(userData: any[]): Observable<String[]>{
    //     const headers = new HttpHeaders({'content-type': 'application/json'});
    //     return this.http.post<any[]>(this.apiUrl, userData, {headers});
    // }

    login(userCredentials: any[]): Observable<String[]>{
        const headers = new HttpHeaders({'Content-Type' : 'application/json'});
        const loginUrl = `${this.apiUrl}/login`;
        return this.http.post<any[]>(loginUrl, userCredentials, {headers});
    }

}