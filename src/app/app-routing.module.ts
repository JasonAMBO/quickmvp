import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  {
    path: 'customer',
    loadChildren: './pages/customer/customer.module#CustomerPageModule'
  },
  {
    path: 'login',
    loadChildren: './pages/login/login.module#LoginPageModule'
  },
  {
    path: 'dashboard',
    loadChildren: './pages/dashboard/dashboard.module#DashboardPageModule'
  },
  {
    path: 'customer-details',
    loadChildren: './pages/customer-details/customer-details.module#CustomerDetailsPageModule'
  },
  {
    path: 'details',
    loadChildren: './pages/details/details.module#DetailsPageModule'
  },
  { 
    path: 'logout', 
  loadChildren: './pages/logout/logout.module#LogoutPageModule' 
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
