import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ADD_STAFF } from 'src/app/constants/routes';

@Component({
  selector: 'app-staff-management',
  templateUrl: './staff-management.component.html',
  styleUrls: ['./staff-management.component.scss']
})
export class StaffManagementComponent implements OnInit {

  constructor(
    private _router:Router
  ) { }

  ngOnInit(): void {
  }

  addStaff(){
    this._router.navigate([ADD_STAFF.fullUrl])
  }
}
