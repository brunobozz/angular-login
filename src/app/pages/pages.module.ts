import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// PAGES
import { HomeComponent } from './home/home.component';
import { UsersListComponent } from './users-list/users-list.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    HomeComponent,
    UsersListComponent
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
