import { Component, Input, OnInit } from '@angular/core';
import { GlobalState } from '../../../global.state';

@Component({
  selector: 'nzHeader',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  // @Input() position = 'normal';
  isCollapsed: boolean;
  constructor(
    private _state: GlobalState
  ) {}

  ngOnInit() {

  }

  toggleSettings() {
    this.isCollapsed = !this.isCollapsed;
    this._state.notifyDataChanged('menuState', this.isCollapsed);
  }


}
