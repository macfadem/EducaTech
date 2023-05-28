import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ParceirosComponent } from './pages/parceiros/parceiros.component';
import { DoeComponent } from './pages/doe/doe.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'sobre', component: AboutComponent },
  { path: 'parceiros', component: ParceirosComponent },
  { path: 'doe', component: DoeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
