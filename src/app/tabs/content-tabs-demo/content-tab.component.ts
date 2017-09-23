import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-content-tab',
  templateUrl: './content-tab.component.html',
  styles: []
})
export class ContentTabComponent implements OnInit {
  @Input() title: string;
  active = false;
  name: string;

  constructor() { }

  ngOnInit() {
  }

}
