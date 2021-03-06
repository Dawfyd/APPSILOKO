import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormInputsDto } from 'src/app/services/dto/form-inputs.dto';
import { UserLoginDto } from 'src/app/services/dto/user-login.dto';
import Swal from 'sweetalert2';

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
  userLoginDto: UserLoginDto;

  constructor(
    private router: Router,
    private authService: AuthService,  ) {}

  ngOnInit(): void {
  }
  onLoginSuccess(userData) {
    //Redirigir usuario logueado a la pagina de creditos
    this.router.navigateByUrl('/creditos');
    this.authService.setToken(userData.token);
  }
  onLoginError(err) {
    Swal.fire({
      title: 'Usuario y/o Contraseña incorrectos',
      icon: 'error',
      showCancelButton: false,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'OK!'
    })
  }
  loginAdmin(dataUser: FormInputsDto) {
    this.userLoginDto = {
      user: dataUser.firstValue,
      password: dataUser.secondValue,
    } //Obtener usuario dummy de el servicio de autentificacion ->  user: admin, password: admin
      this.authService
        .authenticate(this.userLoginDto)
        .subscribe(
          this.onLoginSuccess.bind(this),
          this.onLoginError
        );
  }
}