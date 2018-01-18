import { Routes, RouterModule } from '@angular/router';
// import { DynamicMain } from './dynamic.main';
import { HomeComponent } from './components';
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    // children: [
    //   { path: 'dynamic', component: DynamicComponent },
    //   { path: '**', redirectTo: 'dynamic' }
    // ]
  }
];
export const routing = RouterModule.forChild(routes);
