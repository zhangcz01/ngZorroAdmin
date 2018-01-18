import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { AppComponent } from './app.component';
export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: './home/home.module#HomeModule' },
    { path: '**', redirectTo: 'home' }
];
export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes);
// 另一种写法
// @NgModule({
//     imports: [
//         RouterModule.forRoot([
//             { path: '', redirectTo: '/home', pathMatch: 'full' },
//             {
//                 path: 'home',
//                 loadChildren: 'app/home/home.module#HomeModule' //Lazy load home module
//             },
//             {
//                 path: 'detail',
//                 loadChildren: 'app/detail/detail.module#DetailModule' //Lazy load detail module
//             },
//             {
//                 path: 'contact',
//                 loadChildren: 'app/contact/contact.module#ContactModule' //Lazy load contact module
//             },
//             { path: '**', redirectTo: 'home' }
//         ])
//     ],
//     exports: [RouterModule]
// })
// export class AppRouting { }