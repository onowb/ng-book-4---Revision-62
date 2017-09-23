import {Component, Inject} from '@angular/core';
import {Router} from '@angular/router';
import {ExampleDef} from './example.modul';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private router: Router,
    @Inject('ExampleDefs') public exmaples: ExampleDef
  ) {}
}
