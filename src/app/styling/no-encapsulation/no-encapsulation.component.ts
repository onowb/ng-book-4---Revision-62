import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-encapsulation',
  template: `
    <p>
      no-encapsulation Works!
    </p>
  `,
  styles: []
})
export class NoEncapsulationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
