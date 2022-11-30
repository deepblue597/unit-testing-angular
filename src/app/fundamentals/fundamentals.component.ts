import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fundamentals',
  templateUrl: './fundamentals.component.html',
  styleUrls: ['./fundamentals.component.css'],
})
export class FundamentalsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  compute(number: number) {
    if (number < 0) {
      return 0;
    }
    return number + 1;
  }
}
