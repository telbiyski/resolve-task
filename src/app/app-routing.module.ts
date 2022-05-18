import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { CustomerComponent } from './customer/customer.component';
import { SellerComponent } from './seller/seller.component';
import { AdminComponent } from './admin/admin.component';
import { PagesGuard } from './_guards/pages.guard';

const routes: Routes = [
    { path: 'dashboard', component: CustomerComponent, canActivate: [PagesGuard] },
    { path: 'login', component: LoginComponent, canActivate: [PagesGuard] },
    { path: 'product/:id', component: ProductComponent, canActivate: [PagesGuard] },
    { path: 'dashboard/customer', component: CustomerComponent, canActivate: [PagesGuard] },
    { path: 'dashboard/seller', component: SellerComponent, canActivate: [PagesGuard] },
    { path: 'dashboard/admin', component: AdminComponent, canActivate: [PagesGuard] },
    { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
