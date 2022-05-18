import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class ProductService {

    constructor(private http: HttpClient) { }

    private getOrders(buyerId: number) {
        return this.http.get('/assets/orders.json').pipe(map((data: any) => {
            let orders: any = [];

            data.forEach((obj: any) => {
                if (obj.userId === buyerId) {
                    obj.products.forEach((product: any) => {
                        if (orders.indexOf(product.id) === -1) {
                            orders.push(product.id);
                        }
                    });
                }
            });

            return orders;
        }));
    }

    getProduct(id: string): Observable<any> {
        return this.http.get('/assets/products.json').pipe(map((data: any) => {
            let product;

            data.forEach((obj: any) => {
                if (obj.id === parseInt(id)) {
                    product = obj;
                }
            });

            return product;
        }));
    }

    getProducts(sellerId: number, page: number): Observable<any> {
        return this.http.get('/assets/products.json').pipe(map((data: any) => {
            let products: any = [];

            data.filter((pr: any) => pr.sellerId === sellerId).forEach((obj: any, i: number) => {
                const from = page * 10;
                const to = from + 9;

                if (i >= from && i <= to) {
                    products.push(obj);
                }
            });

            return products;
        }));
    }

    getProductsBuyer(buyerId: number, page: number): Observable<any> {
        return this.http.get('/assets/products.json').pipe(map((data: any) => {
            let products: any = [];

            this.getOrders(buyerId).subscribe({
                next: (orders) => {
                    if (orders) {
                        data.filter((pr: any) => orders.indexOf(pr.id) > -1).forEach((obj: any, i: number) => {
                            const from = page * 10;
                            const to = from + 9;

                            if (orders.indexOf(obj.id) > -1 && i >= from && i <= to) {
                                products.push(obj);
                            }
                        });
                    }
                }
            });

            return products;
        }));
    }
}
