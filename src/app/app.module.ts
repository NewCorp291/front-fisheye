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
import { MatRadioModule } from '@angular/material/radio';
import { HeaderComponent } from './header/header.component';
import { RoutingRadioComponent } from './routing-radio/routing-radio.component';
import { ConcoursComponent } from './concours/concours.component';
import { ProgrammationComponent } from './programmation/programmation.component';
import { MultimediaComponent } from './multimedia/multimedia.component';
import { EquipeComponent } from './equipe/equipe.component';
import { PartenaireComponent } from './partenaire/partenaire.component';
import { ContactComponent } from './contact/contact.component';
import {MatCardModule} from '@angular/material/card';

const routes: Routes = [
  { path: 'load-screen', component: LoadScreenComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'billeterie', component: BilleterieComponent },
  { path: 'devenir-partenaire', component: DevenirPartenaireComponent },
  { path: 'concours', component: ConcoursComponent },
  { path: 'programmation', component: ProgrammationComponent },
  { path: 'multimedia', component: MultimediaComponent },
  { path: 'equipe', component: EquipeComponent },
  { path: 'partenaire', component: PartenaireComponent },
  { path: 'contact', component: ContactComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    LoadScreenComponent,
    AccueilComponent,
    BilleterieComponent,
    DevenirPartenaireComponent,
    HeaderComponent,
    RoutingRadioComponent,
    ConcoursComponent,
    ProgrammationComponent,
    MultimediaComponent,
    EquipeComponent,
    PartenaireComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    RouterModule.forRoot(routes),
    MatRadioModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

