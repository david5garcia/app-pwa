import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin, map, switchMap } from 'rxjs';
import { PokemonList } from '../models/pokemon-list.interface';
import { Pokemon } from '../models/pokemon.interface';

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  private baseUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<PokemonList>(`${this.baseUrl}?limit=20`).pipe(
      map((pokemonList) => pokemonList.results),
      switchMap((pokemons) =>
        forkJoin(pokemons.map((pokemon) => this.http.get<Pokemon>(pokemon.url)))
      )
    );
  }

  getPokemon(id: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.baseUrl}/${id}`);
  }
}
