import { Component } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.interface';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss'],
})
export class PokemonsComponent {
  pokemons: Pokemon[] = [];

  constructor(private pokemonService: PokemonsService) {}

  ngOnInit() {
    this.pokemonService.getPokemons().subscribe((pokemons) => {
      console.log(pokemons);
      this.pokemons = pokemons;
    });
  }
}
