import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListWorkersComponent } from './workers/list-workers/list-workers.component';



@NgModule({
  declarations: [
    ListWorkersComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListWorkersComponent
  ]
})
export class FeaturesModule { }
