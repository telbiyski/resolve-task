import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()

export class RouterHelper {

    constructor(private router: Router) { }

    redirect(type: string) {
        if (type === 'admin') {
            this.router.navigate(['/dashboard/admin'], { skipLocationChange: true });
        } else if (type === 'seller') {
            this.router.navigate(['/dashboard/seller'], { skipLocationChange: true });
        } else if (type === 'customer') {
            this.router.navigate(['/dashboard/customer'], { skipLocationChange: true });
        } else {
            this.router.navigate(['/login'], { skipLocationChange: true });
        }
    }
}
