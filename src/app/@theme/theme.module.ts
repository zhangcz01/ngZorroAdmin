import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import {
    HeaderComponent,
    NzMenuComponent,
    FooterComponent,
    BreadcrumbComponent,
    NzMenuItemComponent
} from './components';

const COMPONENTS = [
    HeaderComponent,
    NzMenuComponent,
    FooterComponent,
    BreadcrumbComponent,
    NzMenuItemComponent
];

@NgModule({
    imports: [RouterModule,BrowserAnimationsModule, NgZorroAntdModule.forRoot()],
    exports: [...COMPONENTS],
    declarations: [...COMPONENTS],
})
export class ThemeModule {
    static forRoot(): ModuleWithProviders {
        return <ModuleWithProviders>{
            ngModule: ThemeModule,
            providers: [],
        };
    }
}