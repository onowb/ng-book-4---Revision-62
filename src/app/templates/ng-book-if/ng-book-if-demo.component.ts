import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-book-if-demo',
  templateUrl: './ng-book-if-demo.component.html',
  styles: []
})
export class NgBookIfDemoComponent implements OnInit {

  display: boolean;

  constructor() {
    this.display = true;
  }

  toggle() {
    this.display = !this.display;
  }

  ngOnInit() {
  }

}
