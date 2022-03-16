import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from '../accueil/accueil.component';
import { LoadScreenComponent } from '../load-screen/load-screen.component';

const routes: Routes = [
  { path: 'load-screen', component: LoadScreenComponent},
  { path: 'accueil', component: AccueilComponent}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
// export const routingComponents = [LoadScreenComponent, AccueilComponent]
