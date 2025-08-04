import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { ProductsComponent } from './products/products.component';
import { ContacusComponent } from './contacus/contacus.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { authenticateRoute } from './services/auth.guard';
export const routes: Routes = [
    {path:"",component:LoginComponent},

    {path:"home",component:HomeComponent,canActivate:[authenticateRoute]},

    {path:"profile",component:UserDashboardComponent,canActivate:[authenticateRoute]},
    {path:"products",component:ProductsComponent,canActivate:[authenticateRoute]},
    {path:"contactus",component:ContacusComponent,canActivate:[authenticateRoute]},
    {path:"signup",component:SignupComponent}
];
