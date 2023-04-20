import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './components/guards/guards.guard'

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch:'prefix',
  },
  {
    path: "demo",
    loadChildren: () => import("./private/demo/demo.module").then((m) => m.DemoModule)
  },
  {
    path: "not-found",
    loadChildren: () => import("./public/not-found/not-found.module").then((m) => m.NotFoundModule)
  },
  {
    path: "login",
    loadChildren: () => import("./public/auth/login/login.module").then((m) => m.LoginModule)
  },
  {
    path: "**",
    redirectTo: "not-found",
    pathMatch: "prefix"
  },
  {
    path: "",
    loadChildren: () => import("./private/private.module").then((m) => m.PrivateModule),
    canActivate: [AuthGuard]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
