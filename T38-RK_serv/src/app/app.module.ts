import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { HomeComponent } from './pages/home/home.component';
import { CharacByIdComponent } from './components/charac-by-id/charac-by-id.component';

@NgModule({
  declarations: [AppComponent, PersonajesComponent, HomeComponent, CharacByIdComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
