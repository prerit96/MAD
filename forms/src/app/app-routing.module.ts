import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginReactiveComponent } from './login-reactive/login-reactive.component';
import { LoginTemplateComponent } from './login-template/login-template.component';

const routes: Routes = [
  // { path: '', redirectTo : '/login', pathMatch: 'full'},
  { path: 'login', component : LoginReactiveComponent },
  { path: 'loginTEMP', component : LoginTemplateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
