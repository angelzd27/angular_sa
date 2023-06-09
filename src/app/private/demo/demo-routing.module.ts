import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { DemoComponent } from './demo/demo.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {
    path: "", 
    component: DemoComponent
  },
  {
    path: "create", 
    component :  CreateComponent
  },
  {
    path: "update", 
    component :  UpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
