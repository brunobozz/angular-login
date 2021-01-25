import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PagesRoutingModule } from './pages-routing.module';
import { NgxMaskModule } from 'ngx-mask';
import { FormsModule } from '@angular/forms';

// PAGES
import { HomeComponent } from './home/home.component';
import { UsersListComponent } from './users-list/users-list.component';
import { ComponentsModule } from '../components/components.module';
import { PermissionsComponent } from './permissions/permissions.component';
import { ConfigurationsComponent } from './configurations/configurations.component';

@NgModule({
  declarations: [
    HomeComponent,
    UsersListComponent,
    PermissionsComponent,
    ConfigurationsComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    HttpClientModule,
    PagesRoutingModule,
    NgxMaskModule.forRoot(),
    FormsModule
  ],
  exports: [
    HomeComponent,
    UsersListComponent,
    PermissionsComponent,
  ],
})
export class PagesModule { }
