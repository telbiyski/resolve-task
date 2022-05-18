import { Component, OnInit } from '@angular/core';
import { ProductService } from '../_services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {
    product: any;
    productId: any;

    constructor(private route: ActivatedRoute, private productService: ProductService) { }

    ngOnInit(): void {
        this.route.params.subscribe((params: any) => {
            this.productId = params.id;
        });
        this.productService.getProduct(this.productId).subscribe({
            next: (data) => {
                if (data) {
                    this.product = data;
                }
            }
        });
    }
}
