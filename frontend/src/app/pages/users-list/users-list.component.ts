import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

import { CrudService } from '../../services/crud.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  users$: Observable<User[]>;

  constructor(
    private crudService: CrudService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.users$ = this.crudService.fetchAll();
  }

  fetchAll(): Observable<User[]> {
    return this.crudService.fetchAll();
  }

  post(userForm): void {
    this.users$ = this.crudService
      .post(userForm)
      .pipe(tap(() => (this.users$ = this.fetchAll())));
  }

  delete(id: number, nome: string): void {
    var r = confirm('Deseja deletar o usuário ' + nome + '?');
    if (r == true) {
      this.users$ = this.crudService
        .delete(id)
        .pipe(tap(() => (this.users$ = this.fetchAll())));
      this.toastr.success('O usuário ' + nome + ' foi deletado', 'Feito!');
    }
  }

  edit(iduser: number) {
    let users = this.users$;
  }

  onSubmit(data) {
    // IMPORTANTE validar o form antes de dar o POST
    this.post(data);
    this.toastr.success('Usuário ' + data.nome + ' adicionado', 'Pronto!');
  }
}
