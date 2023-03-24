import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "demo",
    pathMatch:'prefix',
  },
  {
    path: "demo",
    loadChildren: () => import("./private/demo/demo.module").then((m) => m.DemoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
