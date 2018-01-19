import { Routes, RouterModule } from '@angular/router';
import { ButtonMain } from './button.main';
import { ButtonComponent } from './components';
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: ButtonMain,
    children: [
      { path: 'buttonson', component: ButtonComponent },
      { path: '**', redirectTo: 'button' }
    ]
  }
];
export const routing = RouterModule.forChild(routes);
