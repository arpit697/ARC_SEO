import { Component, OnInit } from '@angular/core';
import { DASHBOARD_INF } from 'src/app/constants/interfaces';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  tableColumns: Array<any> = [
    {
      columnDef: 'select',
      header: 'check_box',
      cell: (element: Record<string, any>) => `${element['select']}`,
    },
    {
      columnDef: 'serial_number',
      header: 'S.No',
      cell: (element: Record<string, any>) => `${element['serial_number']}`,
    },
    {
      columnDef: 'first_name',
      header: 'First Name',
      cell: (element: Record<string, any>) => `${element['first_name']}`,
    },
    {
      columnDef: 'last_name',
      header: 'Last Name',
      cell: (element: Record<string, any>) => `${element['last_name']}`,
    },
    {
      columnDef: 'email',
      header: 'Email',
      cell: (element: Record<string, any>) => `${element['email']}`,
    },
    {
      columnDef: 'phone',
      header: 'Phone',
      cell: (element: Record<string, any>) => `${element['phone']}`,
    },
    {
      columnDef: 'postal_code',
      header: 'Postal Code',
      cell: (element: Record<string, any>) => `${element['postal_code']}`,
    },
    {
      columnDef: 'action',
      header: 'Action',
      cell: (element: Record<string, any>) => `${element['action']}`,
    },
  ];

  tableData: Array<DASHBOARD_INF> = [
    {
      select: true,
      serial_number: 1,
      first_name: 'arpit',
      last_name: 'dwivedi',
      email: true,
      phone: true,
      psotal_code: true,
      action: 'something',
    },
    {
      select: true,
      serial_number: 1,
      first_name: 'arpit',
      last_name: 'dwivedi',
      email: true,
      phone: true,
      psotal_code: true,
      action: 'something',
    },
    {
      select: true,
      serial_number: 1,
      first_name: 'arpit',
      last_name: 'dwivedi',
      email: true,
      phone: true,
      psotal_code: true,
      action: 'something',
    },
    {
      select: true,
      serial_number: 1,
      first_name: 'arpit',
      last_name: 'dwivedi',
      email: true,
      phone: true,
      psotal_code: true,
      action: 'something'
    },
    {
      select: true,
      serial_number: 1,
      first_name: 'arpit',
      last_name: 'dwivedi',
      email: true,
      phone: true,
      psotal_code: true,
      action: 'something'
    },
    {
      select: true,
      serial_number: 1,
      first_name: 'arpit',
      last_name: 'dwivedi',
      email: true,
      phone: true,
      psotal_code: true,
      action: 'something'
    },
    {
      select: true,
      serial_number: 1,
      first_name: 'arpit',
      last_name: 'dwivedi',
      email: true,
      phone: true,
      psotal_code: true,
      action: 'something'
    },
    {
      select: true,
      serial_number: 1,
      first_name: 'arpit',
      last_name: 'dwivedi',
      email: true,
      phone: true,
      psotal_code: true,
      action: 'something'
    },
    {
      select: true,
      serial_number: 1,
      first_name: 'arpit',
      last_name: 'dwivedi',
      email: true,
      phone: true,
      psotal_code: true,
      action: 'something'
    },
    {
      select: true,
      serial_number: 1,
      first_name: 'arpit',
      last_name: 'dwivedi',
      email: true,
      phone: true,
      psotal_code: true,
      action: 'something'
    },
    {
      select: true,
      serial_number: 1,
      first_name: 'arpit',
      last_name: 'dwivedi',
      email: true,
      phone: true,
      psotal_code: true,
      action: 'something'
    },
    {
      select: true,
      serial_number: 1,
      first_name: 'arpit',
      last_name: 'dwivedi',
      email: true,
      phone: true,
      psotal_code: true,
      action: 'something'
    }



  ];
}
