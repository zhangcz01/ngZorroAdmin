import { Component, OnInit } from '@angular/core';
import { GlobalState } from '../../../global.state';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
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
    private _router: Router
  ) {
    this._state.subscribe('menuState', (isCollapsed) => {
      this.isCollapsed = isCollapsed;
    })
  }

  ngOnInit() {

    // console.log(Scrollbars)
    this._onRouteChange = this._router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log(event)

      }
    })

    //滚动条初始化
    // var myElement = new SimpleBar(document.getElementById('myElement'))
    this.menuItems = [
      {
        title: '首页',
        icon: 'anticon anticon-home',
        link: 'home'
      },
      {
        title: 'UI 特点',
        icon: 'anticon anticon-appstore',
        link: '',
        children: [
          {
            title: '按钮',
            link: '/button/buttonson',
          },
          {
            title: '表单',
            link: '',
          },
          {
            title: '图标',
            link: '/pages/ui-features/icons',
          },
          {
            title: '弹窗',
            link: '/pages/ui-features/modals',
          },
          {
            title: '评分',
            link: '/pages/ui-features/typography',
          },
          {
            title: '头像',
            link: '/pages/ui-features/search-fields',
          },
          {
            title: '日历',
            link: '/pages/ui-features/tabs',
          },
        ],
      },
    ];

  }

}
