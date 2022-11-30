import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-arrays',
  templateUrl: './string-arrays.component.html',
  styleUrls: ['./string-arrays.component.css'],
})
export class StringArraysComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  greet(name: string) {
    return 'Welcome ' + name + '!';
  }

  getCurrencies() {
    return ['USD', 'EUR', 'AUD'];
  }
}
