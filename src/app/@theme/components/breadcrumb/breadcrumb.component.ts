import { Component, OnInit } from '@angular/core';
import { GlobalState } from '../../../global.state';

@Component({
  selector: 'breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  breadcrumbArr: any = [];
  constructor(private _state: GlobalState) {
    this._state.subscribe('breadcrumb', (event) => {
      this.breadcrumbArr = event;
    });
  }

  ngOnInit() {
  }

}
