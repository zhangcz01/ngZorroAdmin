import { Component, OnInit } from '@angular/core';
import { GlobalState } from '../../../global.state';
import PerfectScrollbar from 'perfect-scrollbar';
@Component({
  selector: 'nzMenu',
  templateUrl: './nzMenu.component.html',
  styleUrls: ['./nzMenu.component.scss']
})
export class NzMenuComponent implements OnInit {
  isCollapsed: boolean;
  menuItems: any = [];
  constructor(
    private _state: GlobalState
  ) {
    this._state.subscribe('menuState', (isCollapsed) => {
      this.isCollapsed = isCollapsed;
    })
  }

  ngOnInit() {
    //滚动条初始化
    // var ps = new PerfectScrollbar('#container ', {
    //   // maxScrollbarLength : 20
    //   // handlers:['wheel']
    //   // swipeEasing: true
    //   // scrollingThreshold:3000
    //   suppressScrollX: true
    // });
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
            link: '',
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
