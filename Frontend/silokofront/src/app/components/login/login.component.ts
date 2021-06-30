import { Component,ViewEncapsulation} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  hide = true;
  usuario = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);

  getErrorMessageUser() {
    if (this.usuario.hasError('required')) {
      return 'Ingresa un Usuario';
    }

    return this.usuario.hasError('usuario') ? 'Not a valid user' : '';
  }
  getErrorMessagePassword() {
    if (this.password.hasError('required')) {
      return 'Ingresa una Contraseña';
    }

    return this.password.hasError('password') ? 'Not a valid password' : '';
  }
}