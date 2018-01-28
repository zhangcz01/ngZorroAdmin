import { Component, OnInit } from '@angular/core';
import { GlobalState } from '../../../global.state';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { MenuService } from '../../services';
// import SimpleBar from 'SimpleBar';
@Component({
  selector: 'nzMenu',
  templateUrl: './nzMenu.component.html',
  styleUrls: ['./nzMenu.component.scss']
})
export class NzMenuComponent implements OnInit {
  isCollapsed: boolean;
  menuItems: any = [];
  protected _onRouteChange: Subscription;

  constructor(
    private _state: GlobalState,
    private _router: Router,
    private _service: MenuService
  ) {
    this._state.subscribe('menuState', (isCollapsed) => {
      this.isCollapsed = isCollapsed;
    })
  }

  ngOnInit() {
    this._onRouteChange = this._router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log(event)
        console.log(this._service.menuItems)
        this.menuItems = this._service.menuItems.value;
        // this.menuItems = this._service.selectMenuItem(this.menuItems);
        // this._state.notifyDataChanged('menu.activeLink', this._service.getCurrentItem());

      }
    })

    //滚动条初始化
    // var myElement = new SimpleBar(document.getElementById('myElement'))
  }

}
