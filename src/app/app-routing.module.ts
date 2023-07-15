import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { CharactersComponent } from './characters/characters.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DetailComponent } from './detail/detail.component';
import { StartPageComponent } from './start-page/start-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'start-page',
    component:StartPageComponent,
    children: [
      {
        path:'home',
        component:HomeComponent
      },
      {
        path:'characters',
        component:CharactersComponent
      },
      {
        path:'about',
        component:AboutComponent
      },
      {
        path:'detail',
        component:DetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
