import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    constructor(private http: HttpClient) { }

    login(username: string, password: string): Observable<any> {
        return this.http.get('/assets/users.json').pipe(map((data: any) => {
            let profile;

            data.forEach((user: any) => {
                if (user.username === username && user.password === password) {
                    delete user.password;
                    profile = user;
                }
            });

            return profile;
        }));
    }
}
