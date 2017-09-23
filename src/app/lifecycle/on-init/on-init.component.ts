import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-init',
  templateUrl: './on-init.component.html'
})
export class OnInitComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('On init');
  }

  ngOnDestroy(): void {
    console.log('On destroy');
  }

}
