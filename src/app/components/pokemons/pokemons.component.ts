import { Component } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.interface';
import { PokemonsService } from 'src/app/services/pokemons.service';

type DisplayType = 'grid' | 'cards';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss'],
})
export class PokemonsComponent {
  pokemons: Pokemon[] = [];
  loading: boolean = true;
  displayType: DisplayType = 'grid';

  constructor(private pokemonService: PokemonsService) {}

  ngOnInit() {
    this.loading = true;

    this.pokemonService.getPokemons().subscribe((pokemons) => {
      console.log(pokemons);
      this.pokemons = pokemons;
      this.loading = false;
    });
  }
}
