import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-header-main',
  templateUrl: './header-main.component.html',
  styleUrls: ['./header-main.component.scss']
})
export class HeaderMainComponent implements OnInit {

  @Input() showMenu: boolean = true;

  fontWeightCredit: number;
  fontWeightQuota: number;
  fontWeightClients: number;
  fontWeightRecords: number;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    switch (this.router.url) {
      case "/creditos":
        this.fontWeightCredit = 700
        break;
      case "/cupo":
        this.fontWeightQuota = 700
        break;
      case "/clientes":
        this.fontWeightClients = 700
        break;
      case "/registros":
        this.fontWeightRecords = 700
        break;
    }
  }
  deleteToken() {
    this.authService.deleteToken();
  }
}
