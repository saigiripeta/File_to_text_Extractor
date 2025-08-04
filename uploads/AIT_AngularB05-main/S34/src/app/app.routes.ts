import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { ProductsComponent } from './products/products.component';
import { ContacusComponent } from './contacus/contacus.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { authenticateRoute } from './services/auth.guard';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { UdetailsComponent } from './users-management/udetails/udetails.component';
import { OrdersComponent } from './user-dashboard/orders/orders.component';
import { PaymentsComponent } from './user-dashboard/payments/payments.component';
import { ChangePasswordComponent } from './user-dashboard/change-password/change-password.component';
export const routes: Routes = [
    {path:"",component:LoginComponent},

    {path:"home",component:HomeComponent,canActivate:[authenticateRoute]},
    // {path:"productdetails",component:ProductDetailsComponent,canActivate:[authenticateRoute]},
    {path:"productdetails/:id",component:ProductDetailsComponent,canActivate:[authenticateRoute]},
   



    {
        path:"profile",
        component:UserDashboardComponent,
        canActivate:[authenticateRoute],
        // canActivateChild:[()=>{return true}],
        children:[
           {path:"details",component:UdetailsComponent,canActivate:[()=>{return true}]},
            {path:'orders',component:OrdersComponent,canActivate:[()=>{return true}]},
            {path:"payments",component:PaymentsComponent,canActivate:[()=>{return false}]},
            {path:"changepassword",component:ChangePasswordComponent,canActivate:[()=>{return true}]}
        ]
    },



    {path:"products",component:ProductsComponent,canActivate:[authenticateRoute]},
    {path:"contactus",component:ContacusComponent,canActivate:[authenticateRoute]},
    {path:"signup",component:SignupComponent}
];
