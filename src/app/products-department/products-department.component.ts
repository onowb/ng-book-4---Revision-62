import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../product.model';

/**
 * @ProductDepartment: A component to show the breadcrumbs to a
 * Product's department
 */

@Component({
  selector: 'app-products-department',
  templateUrl: './products-department.component.html',
  styleUrls: ['./products-department.component.css']
})
export class ProductsDepartmentComponent implements OnInit {
  @Input() product: Product;

  constructor() { }

  ngOnInit() {
  }

}
