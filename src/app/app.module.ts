import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadScreenComponent } from './load-screen/load-screen.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AccueilComponent } from './accueil/accueil.component';
import { BilleterieComponent } from './billeterie/billeterie.component';
import { DevenirPartenaireComponent } from './devenir-partenaire/devenir-partenaire.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'load-screen', component: LoadScreenComponent},
  { path: 'accueil', component: AccueilComponent},
  { path: 'billeterie', component: BilleterieComponent},
  { path: 'devenir-partenaire', component: DevenirPartenaireComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoadScreenComponent,
    AccueilComponent,
    BilleterieComponent,
    DevenirPartenaireComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule, 
    BrowserAnimationsModule,
    MatProgressBarModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

