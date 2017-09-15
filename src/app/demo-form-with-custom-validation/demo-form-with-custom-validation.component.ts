import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

/**
 * Our custom validator
 *
 * A validator:
 * - Takes a `Control` as it's input and
 * - Returns a `StringMap<string, boolean>` where the key is "error code" and
 *   the value is `true` if it fails
 */

function skuValidator(control: FormControl): {
  [s: string]: boolean
} {
  if (!control.value.match(/^123/)) {
    return {
      invalidSku: true
    };
  }
}

@Component({
  selector: 'app-demo-form-with-custom-validation',
  templateUrl: './demo-form-with-custom-validation.component.html',
  styleUrls: ['./demo-form-with-custom-validation.component.css']
})
export class DemoFormWithCustomValidationComponent implements OnInit {
  myFrom: FormGroup;
  sku: AbstractControl;

  constructor(fb: FormBuilder) {
    this.myFrom = fb.group({
      'sku': ['', Validators.compose([
        Validators.required, skuValidator
      ])]
    });

    this.sku = this.myFrom.controls['sku'];
  }

  onSubmit(value: string): void {
    console.log('You submitted value: ', value);
  }

  ngOnInit() {
  }

}
