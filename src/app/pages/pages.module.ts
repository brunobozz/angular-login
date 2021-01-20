import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// PAGES
import { HomeComponent } from './home/home.component';
import { UsersListComponent } from './users-list/users-list.component';
import { ComponentsModule } from '../components/components.module';
import { PermisionsComponent } from './permisions/permisions.component';

@NgModule({
  declarations: [
    HomeComponent,
    UsersListComponent,
    PermisionsComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    HomeComponent,
    UsersListComponent
  ]
})
export class PagesModule { }
