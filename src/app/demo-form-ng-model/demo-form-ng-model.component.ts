import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-demo-form-ng-model',
  templateUrl: './demo-form-ng-model.component.html',
  styleUrls: ['./demo-form-ng-model.component.css']
})
export class DemoFormNgModelComponent implements OnInit {
  myForm: FormGroup;
  productName: string;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'productName': ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  onSubmit(value: string): void {
    console.log('You submitted value: ', value);
  }

}
