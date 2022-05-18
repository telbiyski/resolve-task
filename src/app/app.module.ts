import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { AdminComponent } from './admin/admin.component';
import { SellerComponent } from './seller/seller.component';
import { CustomerComponent } from './customer/customer.component';
import { PagesGuard } from './_guards/pages.guard';
import { RouterHelper } from './_helpers/router.helper';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        ProductComponent,
        AdminComponent,
        SellerComponent,
        CustomerComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        NgChartsModule,
        HttpClientModule
    ],
    providers: [PagesGuard, RouterHelper],
    bootstrap: [AppComponent]
})

export class AppModule { }
