import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent implements OnInit {
  // 类似props
  @Input() product!: Product | undefined;
  // emit
  @Output() notify = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
