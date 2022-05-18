import { Component, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html'
})

export class AdminComponent {
    @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

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
        labels: ['Seller 1', 'Seller 2', 'Seller 3', 'Seller 4', 'Seller 5', 'Seller 6', 'Seller 7', 'Seller 8', 'Seller 9', 'Seller 10'],
        datasets: [{
            data: [3, 5, 7, 10, 14, 21, 23, 33, 56, 83]
        }]
    };
    public pieChartData2: ChartData<'pie', number[], string | string[]> = {
        labels: ['Buyer 1', 'Buyer 2', 'Buyer 3', 'Buyer 4', 'Buyer 5', 'Buyer 6', 'Buyer 7', 'Buyer 8', 'Buyer 9', 'Buyer 10'],
        datasets: [{
            data: [4, 6, 8, 12, 13, 14, 21, 24, 25, 28]
        }]
    };
    public pieChartData3: ChartData<'pie', number[], string | string[]> = {
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
}
