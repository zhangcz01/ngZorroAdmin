import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './button.routing';
import { ButtonMain } from './button.main';
import { ButtonComponent } from './components';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [ButtonMain,ButtonComponent]
})
export class ButtonModule { }
