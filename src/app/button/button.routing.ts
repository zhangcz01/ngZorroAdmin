import { Routes, RouterModule } from '@angular/router';
// import { DynamicMain } from './dynamic.main';
import { ButtonComponent } from './components';
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: ButtonComponent,
    // children: [
    //   { path: 'dynamic', component: DynamicComponent },
    //   { path: '**', redirectTo: 'dynamic' }
    // ]
  }
];
export const routing = RouterModule.forChild(routes);
