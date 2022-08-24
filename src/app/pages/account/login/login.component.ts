import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/components/layouts/service/auth.service';
import { ILogin } from '../modeles/login.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginInput: ILogin = { userName: localStorage.getItem('username') || '', password: '' };
  apiResponce: any = {};
  sending: boolean = false
  show: boolean = false

  constructor(private accountContext: AuthService, private _router: Router) { }

  ngOnInit(): void { }

  postLoginForm() {
    this.sending = true
    this.accountContext.login(this.loginInput).subscribe((apiResponce: any) => {
      // console.warn(apiResponce);
      this.apiResponce = apiResponce;
      this.sending = false;
      if (this.loginInput.rememberme) {
        localStorage.setItem('username', this.loginInput.userName)
      }
      if (apiResponce && apiResponce.id) {
        sessionStorage.setItem('mytoken', apiResponce.data)
        this._router.navigate(['dashbord'])
      }
    });
  }


  showPassowrd(pass: any) {
    if (this.show == false) {
      this.show = true
      pass.type = 'text'
    } else {
      this.show = false;
      pass.type = 'password'
    }
  }
}
