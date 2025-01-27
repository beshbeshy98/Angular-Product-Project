import { Routes } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

export const routes: Routes = [
    {
        path:'products',
        component: ProductsListComponent,
        title:'products'
    },
    {
        path:'login',
        component: LoginComponent,
        title:'login'
    },
    {
        path:'register',
        component: RegisterComponent,
        title:'register'
    },
    {
        path:'cart',
        component: CartComponent,
        title:'cart'
    },
    {
        path: 'product/:id',
        component : ProductDetailsComponent,
        title: 'product-details'
    },
    {
        path : '**',
        component : NotFoundComponent,
        title : 'Page Not Found'
    }
];
