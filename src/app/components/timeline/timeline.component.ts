import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  alternate: boolean = true;
  toggle: boolean = true;
  color: boolean = false;
  size: number = 40;
  expandEnabled: boolean = true;

  entries = [
    {
      header: 'header',
      content: 'content'
    },
    {
      header: 'another header',
      content: 'more content'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  onExpandEntry($event, i) {

  }

  onHeaderClick($event) {

  }

  onDotClick($event) {

  }
}
