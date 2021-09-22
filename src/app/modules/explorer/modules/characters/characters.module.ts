import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './characters.component';
import { TableModule } from '../../../../shared/shared-modules/table/table.module';

@NgModule({
  declarations: [CharactersComponent],
  imports: [CommonModule, CharactersRoutingModule, TableModule],
})
export class CharactersModule {}
