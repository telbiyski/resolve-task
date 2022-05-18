import { Component, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { ProductService } from '../_services/product.service';
import { UserService } from '../_services/user.service';

@Component({
    selector: 'app-seller',
    templateUrl: './seller.component.html'
})

export class SellerComponent {
    @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

    products: any = [];
    page = 0;

    public pieChartOptions: ChartConfiguration['options'] = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top',
            }
        }
    };
    public pieChartData: ChartData<'pie', number[], string | string[]> = {
        labels: ['Iphon X', 'Samsung S20', 'Huawei P30', 'OPPOF19', 'MacBook Pro', 'Infinix INBOOK', 'Brown Perfume', 'Tree Oil 30ml', 'Skin Beauty Serum', 'Flying Wooden Bird'],
        datasets: [{
            data: [4, 2, 3, 5, 17, 7, 9, 12, 16, 13]
        }]
    };
    public pieChartType: ChartType = 'pie';
    public pieChartPlugins = [];

    public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
        console.log(event, active);
    }

    public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
        console.log(event, active);
    }

    constructor(private userService: UserService, private productService: ProductService) { }

    ngOnInit(): void {
        this.getAll();
    }

    getAll(): void {
        this.productService.getProducts(this.userService.getUser().id, this.page).subscribe({
            next: (data) => {
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
