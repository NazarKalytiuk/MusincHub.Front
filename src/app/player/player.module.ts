import { PlayerService } from './_services/player.service';
import { MaterialModule } from '@angular/material';
import { PlayerComponent } from './player/player.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    PlayerComponent
  ],
  exports: [
    PlayerComponent
  ],
  providers: [
    PlayerService
  ]
})
export class PlayerModule { }
