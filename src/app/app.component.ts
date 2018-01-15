import { Component } from '@angular/core';
import { GlobalState } from './global.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isCollapsed: boolean;
  constructor(
    private _state: GlobalState
  ) { 
    this._state.subscribe('menuState', (isCollapsed) => {
      this.isCollapsed = isCollapsed;
    })
  }
}

