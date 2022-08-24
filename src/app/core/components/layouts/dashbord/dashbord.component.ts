import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent implements OnInit {
  apiResponce: number = 0;
  user$: any;

  constructor(
    private authcontext: AuthService,
    private _router: Router
  ) {
    this.user$ = this.authcontext.loadUser()
  }

  ngOnInit(): void {
  }

  logout() {
    this.authcontext.logout()
      .subscribe((apiResponce: any) => {
        if (apiResponce && apiResponce.id > 0) {
          sessionStorage.removeItem('mytoken')
          this._router.navigate(['/'])
        }
      })
  }

}
