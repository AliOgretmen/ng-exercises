import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TwoWayComponent } from './components/two-way/two-way.component';
import { CompInterComponent } from './components/comp-inter/comp-inter.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [{ path: '', redirectTo: '/main', pathMatch: 'full' },
{ path: 'main', component: MainComponent},
{path: 'parent', component: CompInterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
