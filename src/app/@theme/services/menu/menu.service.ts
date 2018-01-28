import { Injectable } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { GlobalState } from '../../../global.state';

import * as _ from 'lodash';

@Injectable()
export class MenuService {
  menuItems = new BehaviorSubject<any[]>([]);
  activeLink: any;
  constructor(
    private _router: Router,
    private _state: GlobalState
  ) { }

  public updateMenuByRoutes(routes: Routes) {
    console.log(routes)
    let convertedRoutes = this.convertRoutesToMenus(routes);
    console.log(convertedRoutes)
    this.menuItems.next(convertedRoutes);
  }
  public convertRoutesToMenus(routes: Routes): any[] {
    routes.forEach((route) => {
      if (route.children) {
        route.children.forEach((routeSon) => {
          this.configurationRoutes(routeSon, route.link);
        });
        console.log(route.children)
      } else {
        this.configurationRoutes(route);
        console.log(route);
      }
    });
    return routes;
  }
  public configurationRoutes(route, parent?: any) {
    route.path = ['/'];
    console.log(this.menuItems)
    // let activeMenu =  this._state.subscribe('activeMenu', (activeLink) => {
    //   console.log(activeLink)
    //   return activeLink.title;
    // });
    console.log(this.activeLink)
    if (parent != undefined && parent != null && parent != '') {
      route.path.push(parent);
    }
    route.path.push(route.link);
  }
  public activeLinkSave(obj) {
    this.activeLink = obj;
    console.log(this.activeLink)
  }

}
