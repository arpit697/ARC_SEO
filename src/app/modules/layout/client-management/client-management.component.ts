import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DETAIL } from 'src/app/constants/routes';

@Component({
  selector: 'app-client-management',
  templateUrl: './client-management.component.html',
  styleUrls: ['./client-management.component.scss']
})
export class ClientManagementComponent implements OnInit {
  items=[1,3,3]
  constructor(
    private _router:Router
  ) { }

  ngOnInit(): void {
  }
  detailRoute(){
    this._router.navigate([DETAIL.fullUrl])
  }
}
