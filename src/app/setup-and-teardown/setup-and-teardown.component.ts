import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setup-and-teardown',
  templateUrl: './setup-and-teardown.component.html',
  styleUrls: ['./setup-and-teardown.component.css'],
})
export class SetupAndTeardownComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  totalVotes = 0;

  upVote() {
    this.totalVotes++;
  }

  downVote() {
    this.totalVotes--;
  }
}
