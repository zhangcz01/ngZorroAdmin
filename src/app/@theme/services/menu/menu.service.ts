import { Injectable } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import * as _ from 'lodash';

@Injectable()
export class MenuService {
  menuItems = new BehaviorSubject<any[]>([]);

  constructor(private _router: Router) { }
  public updateMenuByRoutes(routes: Routes) {
    console.log(routes)
    this.menuItems.next(routes);
  }
}
