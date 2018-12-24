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

  entries: {header: string, content: string, year: number}[] = [
    {
      header: 'Roses are red',
      content: 'content',
      year: 2018
    },
    {
      header: 'Violets are blue',
      content: 'more content',
      year: 2017
    },
    {
      header: 'This site is still in development',
      content: 'more content',
      year: 2016
    },
    {
      header: 'But so are you',
      content: 'more content',
      year: 2015
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
