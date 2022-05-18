import { Injectable } from '@angular/core';

const USER_KEY = 'currentUser';

@Injectable({
    providedIn: 'root'
})

export class UserService {

    constructor() { }

    logout(): void {
        window.localStorage.clear();
    }

    public isLoggedIn() {
        return !!window.localStorage.getItem(USER_KEY);
    }

    public setUser(user: any): void {
        window.localStorage.removeItem(USER_KEY);
        window.localStorage.setItem(USER_KEY, JSON.stringify(user));
    }

    public getUser(): any {
        const user = window.localStorage.getItem(USER_KEY);

        if (user) {
            return JSON.parse(user);
        }

        return {};
    }
}
