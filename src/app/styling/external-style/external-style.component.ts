import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-external-style',
  template: `
    <p>
      external-style Works!
    </p>
  `,
  styleUrls: ['./external-style.component.css']
})
export class ExternalStyleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
