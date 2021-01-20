import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//PAGES
import { HomeComponent } from './home/home.component';
import { UsersListComponent } from './users-list/users-list.component';
import { PermissionsComponent } from './permissions/permissions.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'userList', component: UsersListComponent },
  { path: 'permissions', component: PermissionsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
