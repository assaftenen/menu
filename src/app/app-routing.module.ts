import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OrderComponent } from './components/order/order.component';


const routes: Routes = [
  {
    path: 'order',
    loadChildren: () => import('./components/order/order.module').then(m => m.OrderModule)
  },
  {
    path: '',
    component:DashboardComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}