import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MyService } from './services/my-service';


@NgModule({
  exports: [
    CommonModule
  ],
  imports: [
    CommonModule
  ],
  providers: [
    MyService
  ]
})
export class SharedModule {}

export { MyService };
