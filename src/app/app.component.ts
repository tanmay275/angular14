import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { TitleResolver } from './core/components/layouts/service/title.resolver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private titleResolver: TitleResolver
  ) {
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      map(e => this.titleResolver.getRouterPageTitle(this.route))

    ).subscribe(pagetitle => {
      // console.warn(pagetitle)
      titleResolver.updatetitle(pagetitle);
    })
  }
}
