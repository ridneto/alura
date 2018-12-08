import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo } from './photo';

const API = 'http://localhost:2553'

@Injectable({ providedIn: 'root' })
export class PhotoService{
    constructor(private http: HttpClient) {}

    listFromUser(userName: string) {
        return this.http
            .get<Photo[]>(API + '/' + userName + '/photos')
    }

    listFromUserPaginated(userName: string, page: number){
        const params = new HttpParams().append('page', page.toString())
        
        return this.http
            .get<Photo[]>(API + '/' + userName + '/photos',
                { params })
    }

    // https://s3.amazonaws.com/caelum-online-public/901-angular-parte2/img/home.jpg
}