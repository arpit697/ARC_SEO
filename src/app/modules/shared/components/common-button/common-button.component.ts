import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-common-button',
  templateUrl: './common-button.component.html',
  styleUrls: ['./common-button.component.scss']
})
export class CommonButtonComponent implements OnInit {

  constructor() { }
  @Input() text!:string;
  @Input() buttonClass!:string;
  @Input() spin!:boolean;
  @Input() hideText!:boolean;
  @Output() onClick:EventEmitter<any> = new EventEmitter();
  @Input() disabledButton!:boolean
  
  ngOnInit(): void {
  }

  eventEmit(){
    this.onClick.emit();
  }

}
