import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: any;

  emailDB: string = 'brunobozz'
  senhaDB: string = '789'
  mensagem: string = ''
  login: boolean = false

  constructor(private formBuilder: FormBuilder) {
    this.criarForm();
  }

  ngOnInit(): void {}

  criarForm() {
    this.form = this.formBuilder.group({
      email: [''],
      senha: [''],
    });
  }

  verificaLogin() {
    if (
      this.form.get('email').value == this.emailDB &&
      this.form.get('senha').value == this.senhaDB
    ) {
      this.login = true
    } else {
      this.mensagem = 'E-mail ou a senha estar errado!';
    }
  }
}
