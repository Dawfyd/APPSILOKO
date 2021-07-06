import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormInputsDto } from 'src/app/services/dto/form-inputs.dto';
import { UserLoginDto } from 'src/app/services/dto/user-login.dto';

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
    this.router.navigateByUrl('/creditos');
    this.authService.setToken(userData.token);
  }
  onLoginError(err) {
    alert(err.statusText);
  }
  loginAdmin(dataUser: FormInputsDto) {
    this.userLoginDto = {
      user: dataUser.firstValue,
      password: dataUser.secondValue,
    }
      this.authService
        .authenticate(this.userLoginDto)
        .subscribe(
          this.onLoginSuccess.bind(this),
          this.onLoginError
        );
  }
}