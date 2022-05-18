import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { UserService } from '../_services/user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
    form: any = {
        username: null,
        password: null
    };
    isLoggedIn = false;
    errorMessage = '';
    username = false;

    constructor(private userService: UserService, private authService: AuthService) { }

    ngOnInit(): void {
        this.isLoggedIn = this.userService.isLoggedIn();
        if (this.isLoggedIn) {
            this.username = this.userService.getUser().username;
        }
    }

    onSubmit(): void {
        const { username, password } = this.form;

        this.authService.login(username, password).subscribe({
            next: (data) => {
                if (data) {
                    this.userService.setUser(data);
                    this.isLoggedIn = true;
                    this.username = data.username;
                    this.reloadPage();
                } else {
                    this.errorMessage = 'Wrong credentials.';
                    this.isLoggedIn = false;
                }
            },
            error: (err) => {
                this.errorMessage = err.message;
                this.isLoggedIn = false;
            }
        });
    }

    reloadPage(): void {
        window.location.reload();
    }
}
