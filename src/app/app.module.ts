import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { NabvarComponent } from './components/core/nabvar/nabvar.component';
import { SidebarComponent } from './components/core/sidebar/sidebar.component';
import { ContentComponent } from './components/core/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    NabvarComponent,
    SidebarComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    TooltipModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
