import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  public users: {
    id: number;
    name: string;
    email: string;
    password: string;
  }[] = [
    {
      id: 0,
      name: 'Luca Bacci Tourn',
      email: 'luktb@gmail.com',
      password: '45734573',
    },
    {
      id: 1,
      name: 'Bruno Bozzetti',
      email: 'brunobozz@gmail.com',
      password: '94ndfjdj54',
    },
    {
      id: 2,
      name: 'Theo Bozzetti',
      email: 'theoturn@gmail.com',
      password: 'dfhj4763t',
    },
    {
      id: 3,
      name: 'Joanna Fraga',
      email: 'joannasfraga@gmail.com',
      password: 'nodssu5634',
    },
    {
      id: 4,
      name: 'Ronaldinho Gaúcho',
      email: 'r10@ronaldinho.com.br',
      password: 'asahs4uhd',
    },
  ];

  public userName: string = '';

  constructor() {}

  ngOnInit(): void {}

  public userExclude(numero: number) {
    let userExclude = this.users[numero];
    console.log(userExclude.name);
    alert('Deseja excluir ' + userExclude.name + '?');
  }
}
