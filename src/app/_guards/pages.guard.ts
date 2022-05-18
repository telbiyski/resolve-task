import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { RouterHelper } from '../_helpers/router.helper';
import { UserService } from '../_services/user.service';

@Injectable()

export class PagesGuard implements CanActivate {

    constructor(private userService: UserService, private router: Router, private helper: RouterHelper) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const user = this.userService.getUser();
        const isLoggedIn = this.userService.isLoggedIn();
        let result = false;

        if (state.url === '/login') {
            if (isLoggedIn) {
                this.helper.redirect(user.type);
            } else {
                result = true;
            }
        } else if (isLoggedIn && state.url.indexOf('/product') > -1 || isLoggedIn && state.url === `/dashboard/${user.type}`) {
            result = true;
        } else {
            this.helper.redirect(user.type);
        }

        return result;
    }
}
