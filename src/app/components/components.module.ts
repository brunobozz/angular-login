import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from '../pages/pages-routing.module';

// CORE COMPONENTS
import { NabvarComponent } from './core/nabvar/nabvar.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { ContentComponent } from './core/content/content.component';

// SHARED COMPONENTS
import { ContentHeaderComponent } from './shared/content-header/content-header.component';

@NgModule({
  declarations: [
    NabvarComponent,
    SidebarComponent,
    ContentComponent,
    ContentHeaderComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  exports: [
    NabvarComponent,
    SidebarComponent,
    ContentComponent,
    ContentHeaderComponent
  ]
})
export class ComponentsModule { }
