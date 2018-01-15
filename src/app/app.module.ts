import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GlobalState } from './global.state';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ThemeModule } from './@theme/theme.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ThemeModule.forRoot(),
    NgZorroAntdModule.forRoot()
  ],
  providers: [GlobalState],
  bootstrap: [AppComponent]
})
export class AppModule { }
