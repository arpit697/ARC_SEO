import { Component, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { Router } from '@angular/router';
import { SEND_NOTIFICATION } from 'src/app/constants/routes';

export interface SEARCH_CHIPS {
  name: string;
}

@Component({
  selector: 'app-notification-management',
  templateUrl: './notification-management.component.html',
  styleUrls: ['./notification-management.component.scss']
})
export class NotificationManagementComponent implements OnInit {

  constructor(
    private _router:Router
  ) { }

  ngOnInit(): void {
  }
  sendNotification(){
    this._router.navigate([SEND_NOTIFICATION.fullUrl])
  }
}
