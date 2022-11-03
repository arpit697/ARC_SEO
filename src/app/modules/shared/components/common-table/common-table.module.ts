import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonTableComponent } from './common-table.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { PaginationStyleDirective } from 'src/app/directives/pagination-style.directive';

@NgModule({
  declarations: [
    CommonTableComponent,
    PaginationStyleDirective
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
  ],exports:[
    CommonTableComponent,
  ]
})
export class CommonTableModule { }
