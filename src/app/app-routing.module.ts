import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { TableViewComponent } from './table-view/table-view.component';

const routes: Routes = [
  {
    path: 'table-view',
    component: HeroesComponent
  },
  {
    path: 'dashboard-view',
    component: TableViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
