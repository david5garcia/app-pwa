import { NgModule } from '@angular/core';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CardComponent } from './card/card.component';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CardComponent],
  exports: [CardComponent],
  imports: [
    MatProgressSpinnerModule,
    MatCardModule,
    CommonModule,
    MatIconModule,
    MatTableModule,
    RouterModule,
  ],
})
export class SharedModule {}
