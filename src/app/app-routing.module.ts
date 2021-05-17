import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent },
  // {
  //   path: '', component: HomeComponent, children: [
  //     // { path: '', component: TodayComponent },
  //     // { path: 'tomorrow', component: TomorrowComponent },
  //     // { path: 'all', component: AllComponent },
  //     // { path: 'new', component: NewComponent },
  //   ],
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
