import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoemFormComponent } from '../poem-form/poem-form.component';
import { PoemTableComponent } from '../poem-table/poem-table.component';



@NgModule({
  declarations: [
    PoemFormComponent,
    PoemTableComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PoemModule { }
