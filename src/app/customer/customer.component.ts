import { Component, OnInit } from '@angular/core';
import { ProductService } from '../_services/product.service';
import { UserService } from '../_services/user.service';

@Component({
    selector: 'app-customer',
    templateUrl: './customer.component.html'
})

export class CustomerComponent implements OnInit {
    products: any = [];
    page = 0;

    constructor(private userService: UserService, private productService: ProductService) { }

    ngOnInit(): void {
        this.getAll();
    }

    getAll(): void {
        this.productService.getProductsBuyer(this.userService.getUser().id, this.page).subscribe({
            next: (data) => {
                console.log(data);
                if (data) {
                    this.products = data;
                }
            }
        });
    }

    pageChange(event: string): void {
        if (event === 'next') {
            this.page += 1;
        } else {
            this.page -= 1;
        }
        this.getAll();
    }
}
