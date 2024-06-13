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
    // return this.http.get<PokemonList>(`${this.baseUrl}?limit=50`).pipe(
    //   map((pokemonList) => this.getRandomPokemons(pokemonList.results, 5)),
    //   switchMap((pokemons) =>
    //     forkJoin(pokemons.map((pokemon) => this.http.get<Pokemon>(pokemon.url)))
    //   )
    // );
    return this.http.get<Pokemon[]>('./assets/pokemon-mock.json');
  }

  private getRandomPokemons(
    pokemons: { name: string; url: string }[],
    count: number
  ): { name: string; url: string }[] {
    const aleatorio = pokemons.sort(() => 0.5 - Math.random());
    return aleatorio.slice(0, count);
  }

  getPokemon(id: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.baseUrl}/${id}`);
  }
}
