import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/User';

import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  users$: Observable<User[]>;

  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    this.users$ = this.crudService.fetchAll();
  }

  public userExclude(numero: number) {
    alert('Deseja excluir ?');
  }
}
