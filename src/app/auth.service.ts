import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class AuthService{
    setToken(token: string): void{
        localStorage.setItem('token', token);
    }

    removeToken(): void{
        localStorage.removeItem('token');
    }
    isLoggedIn(): boolean{
        console.log("logged in");   
        return localStorage.getItem('token') ! == null;
    }
}