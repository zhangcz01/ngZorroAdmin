import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { GlobalState } from './global.state';
import { MenuService } from './@theme';
import { APP_MENU } from './app.menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isCollapsed: boolean;
  constructor(
    private _state: GlobalState,
    private _menuService: MenuService,
  ) {
    this._state.subscribe('menuState', (isCollapsed) => {
      this.isCollapsed = isCollapsed;
    });
    this._menuService.updateMenuByRoutes(<Routes>APP_MENU);
  }
}

