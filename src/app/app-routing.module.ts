import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '', canActivate: [], loadChildren: './login/login.module#LoginModule'
},
{
    path: 'login', canActivate: [], loadChildren: './login/login.module#LoginModule'
},
{
    path: 'supporthome', canActivate: [], loadChildren: './support-dashboard/support-dashboard.module#SupportDashboardModule'
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
