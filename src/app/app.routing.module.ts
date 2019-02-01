import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ProductComponent } from './pages/product/product.component';

const routes: Routes = [{
  path: '',
  redirectTo: '/',
  pathMatch: 'full'
},
{
  path: '',
  component: HomeComponent
},
{
  path: 'select-product',
  component: SettingsComponent
},
{
  path: 'product-detail',
  component: ProductComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
