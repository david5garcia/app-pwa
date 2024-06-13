import { trigger, transition, style, animate } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.interface';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  animations: [
    trigger('deslizarIzquierda', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate(
          '1000ms ease-out',
          style({ transform: 'translateX(0)', opacity: 1 })
        ),
      ]),
    ]),
  ],
})
export class GridComponent {
  displayedColumns: string[] = [
    'sprite',
    'name',
    'base_experience',
    'height',
    'weight',
  ];
  dataSource: Pokemon[] = [];

  @Input() pokemons!: Pokemon[];
}
