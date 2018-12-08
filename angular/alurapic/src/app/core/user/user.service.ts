import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { Subject, BehaviorSubject } from 'rxjs';
import { User } from './user';
import * as jtw_decode from 'jwt-decode';

@Injectable({ providedIn: 'root' })
export class UserService{
    
    private userSubject = new BehaviorSubject<User>(null);
    private user: User;
    
    constructor(private tokenService: TokenService){
        this.tokenService.hasToken() && 
            this.decodeAndNotify();
    }

    setToken(token: string){
        this.tokenService.setToken(token);
        this.decodeAndNotify();
    }

    getUser(){
        return this.userSubject.asObservable();
    }

    private decodeAndNotify(){
        const user = jtw_decode(this.tokenService.getToken()) as User; 
        
        this.user = user;
        this.userSubject.next(user);
    }

    logout(){
        this.tokenService.removeToken();
        this.userSubject.next(null);
    }

    isLogger(){
        return this.tokenService.hasToken();
    }

    getUserName(){
        return this.user.name;
    }
}