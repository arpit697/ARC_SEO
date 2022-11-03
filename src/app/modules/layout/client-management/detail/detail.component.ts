import { Component, OnInit } from '@angular/core';
import { TRANSACTION_MANAGEMENT_INF, USER_TRANSACTION } from 'src/app/constants/interfaces';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  items = [1, 3, 3]
  constructor() { }

  ngOnInit(): void {
  }
  tableColumns: Array<any> = [
    {
      columnDef: 'serial_number',
      header: 'S.No',
      cell: (element: Record<string, any>) => `${element['serial_number']}`
    },
    {
      columnDef: 'transaction_id',
      header: 'Transaction ID',
      cell: (element: Record<string, any>) => `${element['transaction_id']}`,
    },
    {
      columnDef: 'amount',
      header: 'Amount',
      cell: (element: Record<string, any>) => `${element['amount']}`
    },
    {
      columnDef: 'date_time',
      header: 'Date & Time',
      cell: (element: Record<string, any>) => `${element['date_time']}`
    }
  ];

  tableData: Array<USER_TRANSACTION> = [
    {
      serial_number: 1,
      transaction_id: 1,
      amount: 1,
      data_time: 'hello'
    },
    {
      serial_number: 1,
      transaction_id: 1,
      amount: 1,
      data_time: 'hello'
    },
    {
      serial_number: 1,
      transaction_id: 1,
      amount: 1,
      data_time: "one"
    }]
}
