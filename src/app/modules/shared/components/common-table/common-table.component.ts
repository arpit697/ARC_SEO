import { AfterContentInit, AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-common-table',
  templateUrl: './common-table.component.html',
  styleUrls: ['./common-table.component.scss']
})
export class CommonTableComponent<T> implements OnInit , AfterViewInit {
  @ViewChild(MatPaginator)
  Paginator!: MatPaginator;

  @Input()tableColumns :Array<any> = []
  @Input()tableData:Array<T> = []
  @Input() isPageable:boolean = false;
  @Input() defaultPaginationSize:number[] = [5,10,15];
  @Input() defaultPageSize = this.defaultPaginationSize[1];

  displayedColumns: Array<any> = [];
  dataSource: MatTableDataSource<T> = new MatTableDataSource();

  constructor() { }

  ngOnInit(): void {
    this.displayedColumns = this.tableColumns.map((c) => c.columnDef);
    this.dataSource = new MatTableDataSource(this.tableData);
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.Paginator
  }

}
