import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  spin: any
  textHide: any

  constructor() { }
  
  spinOn() {
    this.spin = true
    this.textHide = true
  }

  spinOff() {
    this.spin = false
    this.textHide = false
  }
}
