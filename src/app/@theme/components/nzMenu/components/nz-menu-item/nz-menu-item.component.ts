import { Component, OnInit, Input } from '@angular/core';
import { GlobalState } from '../../../../../global.state';
import { MenuService } from '../../../../services';

@Component({
  selector: 'nz-menu-item',
  templateUrl: './nz-menu-item.component.html',
  styleUrls: ['./nz-menu-item.component.scss']
})
export class NzMenuItemComponent implements OnInit {
  @Input() menuItem: any;
  isCollapsed: boolean;
  constructor(
    private _state: GlobalState,
    private _service: MenuService
  ) {
    // this._state.subscribe('menuState', (isCollapsed) => {
    //   this.isCollapsed = isCollapsed;
    // })
  }

  ngOnInit() {
    console.log(this.menuItem)
  }
  public onToggleSubMenu($event, item) {
    console.log(item)
    this._service.activeLinkSave(item);
    // item.selected = true;
    // this._state.notifyDataChanged('activeMenu', item);
    // $event.item = item;
    // this.toggleSubMenu.emit($event);
    // return false;
  }

}
