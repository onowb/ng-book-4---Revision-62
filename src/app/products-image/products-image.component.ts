import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {Product} from '../../product.model';

@Component({
  selector: 'app-products-image',
  templateUrl: './products-image.component.html',
  styleUrls: ['./products-image.component.css']
})
export class ProductsImageComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'ui small image';
  @Input() product: Product;

  constructor() { }

  ngOnInit() {
  }

}
