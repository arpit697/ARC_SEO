import { Component, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';

export interface SEARCH_CHIPS {
  name: string;
}
@Component({
  selector: 'app-send-notification',
  templateUrl: './send-notification.component.html',
  styleUrls: ['./send-notification.component.scss']
})
export class SendNotificationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  addOnBlur = true;

  searchChips: SEARCH_CHIPS[] = [{ name: 'Lemon' }, { name: 'Lime' }, { name: 'Apple' }];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.searchChips.push({ name: value });
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(fruit: SEARCH_CHIPS): void {
    const index = this.searchChips.indexOf(fruit);

    if (index >= 0) {
      this.searchChips.splice(index, 1);
    }
  }
}
