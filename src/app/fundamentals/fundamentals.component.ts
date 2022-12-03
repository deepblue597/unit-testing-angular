import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
//import { MessageService } from '../message.service';

@Component({
  selector: 'app-fundamentals',
  templateUrl: './fundamentals.component.html',
  styleUrls: ['./fundamentals.component.css'],
})
export class FundamentalsComponent implements OnInit {
  hideContent = true;
  severity = 'you have been warned';
  constructor() {} // private msgService: MessageService

  ngOnInit(): void {}

  compute(number: number) {
    if (number < 0) {
      return 0;
    }
    return number + 1;
  }

  toggle() {
    this.hideContent = !this.hideContent;
  }

  toggleAsync() {
    timer(500).subscribe(() => {
      this.toggle();
    });
  }
}
