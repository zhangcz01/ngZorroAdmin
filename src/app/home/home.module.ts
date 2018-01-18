import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './home.routing';

import { HomeComponent} from './components';
@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
