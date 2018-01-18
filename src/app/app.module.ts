import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GlobalState } from './global.state';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { ThemeModule } from './@theme/theme.module';
import { AppRouting } from './app.routing';
import { AppComponent } from './app.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    ThemeModule.forRoot(),
    NgZorroAntdModule.forRoot(),
    AppRouting
  ],
  providers: [GlobalState],
  bootstrap: [AppComponent]
})
export class AppModule { }
