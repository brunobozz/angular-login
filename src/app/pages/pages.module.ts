import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// PAGES
import { HomeComponent } from './home/home.component';
import { UsersListComponent } from './users-list/users-list.component';

@NgModule({
  declarations: [
    HomeComponent,
    UsersListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    UsersListComponent
  ]
})
export class PagesModule { }
