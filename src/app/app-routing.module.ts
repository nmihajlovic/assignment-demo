import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren:  () => import('./pages/home/home.page.module').then(m => m.HomePageModule) },
  { path: 'history', loadChildren: () => import('./pages/history/history.page.module').then(m => m.HistoryPageModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
