import { Component } from '@angular/core';
import { GlobalState } from './../global.state';

@Component({
    selector: 'button-main',
    template: `<router-outlet></router-outlet>`
})
export class ButtonMain {
    constructor(private _state: GlobalState) {
        this._state.notifyDataChanged('app.nav', { level: 0, NavName: "土地供求", routerLink: "supplydemand/putintoeffect" });
    }
}
