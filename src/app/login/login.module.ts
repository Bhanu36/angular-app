import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component'


const route: Routes = [
  {
    path: '/login', component: LoginComponent, pathMatch: 'full'
  }
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ]
})
export class LoginModule { }
