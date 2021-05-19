import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { DefaultComponent } from './pages/default/default.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '', component: HomeComponent, children: [
      { path: '', component: DefaultComponent },
      { path: 'add-product', component: AddProductComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
