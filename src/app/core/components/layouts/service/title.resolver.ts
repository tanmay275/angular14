import { Injectable } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { ActivatedRoute } from "@angular/router";

@Injectable({ providedIn: 'root' })
export class TitleResolver {

  private _baseTitle: string;

  constructor(
    private _title: Title
  ) {
    this._baseTitle = _title.getTitle();
  }
}
