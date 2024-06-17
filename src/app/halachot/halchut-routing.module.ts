import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HalchutPage } from './halchut.page';


const routes: Routes = [
  {
    path: '',
    component: HalchutPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HalchutPageRoutingModule {}
