import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

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
    ComponentsModule,
    HttpClientModule
  ],
  exports: [
    HomeComponent,
    UsersListComponent,
    PermissionsComponent
  ]
})
export class PagesModule { }
