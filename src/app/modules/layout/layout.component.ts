import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LOGIN, MY_PROFILE } from 'src/app/constants/routes';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  isExpanded:boolean = false;
  constructor(
    public _router:Router
  ) { }

  ngOnInit(): void {
  }
   hello(){
     console.log('hello');
     
   }

   routeMyProfile(){
     this._router.navigate([MY_PROFILE.fullUrl])
   }
   logOut(){
    this._router.navigate([LOGIN.path])
   }
}
