import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BasketComponent } from './basket/basket.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  
  { 
    path: '', 
    pathMatch: 'full',
    redirectTo: '/home'
  },
  { path: 'home', component: HomeComponent },
  { path: 'basket', component: BasketComponent },
  { path: 'products/:id', component: ProductComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
