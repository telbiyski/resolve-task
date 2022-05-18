import { Component } from '@angular/core';
import { UserService } from './_services/user.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    isLoggedIn = false;
    username?: string;

    constructor(private userService: UserService) { }

    ngOnInit(): void {
        this.isLoggedIn = this.userService.isLoggedIn();
        if (this.isLoggedIn) {
            this.username = this.userService.getUser().username;
        }
    }

    logout(): void {
        this.userService.logout();
        window.location.reload();
    }
}
