import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from '../pages/pages-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

// CORE COMPONENTS
import { NabvarComponent } from './core/nabvar/nabvar.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { ContentComponent } from './core/content/content.component';

// SHARED COMPONENTS
import { ContentHeaderComponent } from './shared/content-header/content-header.component';
import { LoginComponent } from './core/login/login.component';

@NgModule({
  declarations: [
    NabvarComponent,
    SidebarComponent,
    ContentComponent,
    ContentHeaderComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    NabvarComponent,
    SidebarComponent,
    ContentComponent,
    ContentHeaderComponent,
    LoginComponent
  ]
})
export class ComponentsModule { }
