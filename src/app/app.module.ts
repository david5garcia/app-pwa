import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    PokemonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
