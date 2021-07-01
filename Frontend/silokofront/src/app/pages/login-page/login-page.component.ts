import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginTitle: string = "Inicia sesión";
  user: string = "Usuario";
  password: string = "Contraseña";
  button: string = "Entrar";
  showPassword: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
