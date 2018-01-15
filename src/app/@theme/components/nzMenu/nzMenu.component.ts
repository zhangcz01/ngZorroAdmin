import { Component, OnInit } from '@angular/core';
import { GlobalState } from '../../../global.state';

@Component({
  selector: 'nzMenu',
  templateUrl: './nzMenu.component.html',
  styleUrls: ['./nzMenu.component.scss']
})
export class NzMenuComponent implements OnInit {
  isCollapsed: boolean;
  constructor(
    private _state: GlobalState
  ) {
    this._state.subscribe('menuState', (isCollapsed) => {
      this.isCollapsed = isCollapsed;
    })
  }

  ngOnInit() {

  }

}
