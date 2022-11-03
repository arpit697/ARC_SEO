import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-link-send-success',
  templateUrl: './link-send-success.component.html',
  styleUrls: ['./link-send-success.component.scss']
})
export class LinkSendSuccessComponent implements OnInit {

  constructor(
    private _route:Router
  ) { }

  ngOnInit(): void {
  }
  submitHandler(){
    this._route.navigate([''])
  }
}
