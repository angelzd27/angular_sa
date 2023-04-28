import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './components/guards/guards.guard'

const routes: Routes = [
  {
    path: "",
    loadChildren:() => import("./private/private.module").then((m) => m.PrivateModule),
    canActivate: [AuthGuard],
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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
