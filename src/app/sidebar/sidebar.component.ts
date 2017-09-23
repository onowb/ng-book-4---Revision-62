import {Component, Input, OnInit} from '@angular/core';
import {ExampleDef} from '../example.modul';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  @Input('items') items: ExampleDef[];

  constructor() { }

  ngOnInit() {
  }

}
