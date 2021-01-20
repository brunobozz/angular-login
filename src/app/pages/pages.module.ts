import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// PAGES
import { HomeComponent } from './home/home.component';
import { UsersListComponent } from './users-list/users-list.component';
import { ComponentsModule } from '../components/components.module';
import { PermissionsComponent } from './permissions/permissions.component';

@NgModule({
  declarations: [
    HomeComponent,
    UsersListComponent,
    PermissionsComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    HomeComponent,
    UsersListComponent,
    PermissionsComponent
  ]
})
export class PagesModule { }
