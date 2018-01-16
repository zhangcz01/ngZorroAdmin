import { Component, OnInit } from '@angular/core';
import { GlobalState } from '../../../../../global.state';

@Component({
  selector: 'nz-menu-item',
  templateUrl: './nz-menu-item.component.html',
  styleUrls: ['./nz-menu-item.component.scss']
})
export class NzMenuItemComponent implements OnInit {
  isCollapsed: boolean;
  constructor(
    private _state: GlobalState
  ) {
    // this._state.subscribe('menuState', (isCollapsed) => {
    //   this.isCollapsed = isCollapsed;
    // })
  }

  ngOnInit() {
  }

}
