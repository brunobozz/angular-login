import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NabvarComponent } from './nabvar/nabvar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [
    NabvarComponent,
    SidebarComponent,
    ContentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NabvarComponent,
    SidebarComponent,
    ContentComponent
  ]
})
export class CoreModule { }
