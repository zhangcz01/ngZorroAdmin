import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './button.routing';
import { ButtonComponent } from './components';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [ButtonComponent]
})
export class ButtonModule { }
