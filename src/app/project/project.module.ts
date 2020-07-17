import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project.component';
import { Routes, RouterModule } from '@angular/router';



const route: Routes = [
  {
    path: '', component: ProjectComponent, pathMatch: 'full'
  }
];



@NgModule({
  declarations: [ProjectComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ]
})
export class ProjectModule { }
