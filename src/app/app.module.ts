import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// MODULES
import { CoreModule } from './components/core/core.module';

import { UsersListComponent } from './pages/users-list/users-list.component';
import { ContentHeaderComponent } from './components/shared/content-header/content-header.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    ContentHeaderComponent
  ],
  imports: [
    BrowserModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
