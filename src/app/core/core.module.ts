import { BaseService } from './services/base.service';
import { NgModule, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalStorageService } from "./services/local-storage.service";
import { PreloaderComponent } from './preloader/preloader.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  entryComponents: [
    PreloaderComponent
  ],
  declarations: [PreloaderComponent],
  providers: [
    LocalStorageService,
    BaseService,
    PreloaderComponent
  ],
  exports: [
    PreloaderComponent
  ]
  
})
export class CoreModule { }
