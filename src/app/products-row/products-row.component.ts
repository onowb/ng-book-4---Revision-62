import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {Product} from '../../product.model';

/**
 * @ProductRow: A component for the view of single Product
 */

@Component({
  selector: 'app-products-row',
  templateUrl: './products-row.component.html',
  styleUrls: ['./products-row.component.css']
})
export class ProductsRowComponent implements OnInit {

  @Input() product: Product;
  @HostBinding('attr.class') cssClass = 'item';

  constructor() { }

  ngOnInit() {
  }

}
