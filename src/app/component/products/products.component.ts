import { Component, OnInit } from '@angular/core';
import { Iprod } from 'src/app/module/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  productsArr!: Array<Iprod>;
  constructor(private _prodService: ProductService) {}

  ngOnInit(): void {
    this.productsArr = this._prodService.fetchProducts();
  }
}
