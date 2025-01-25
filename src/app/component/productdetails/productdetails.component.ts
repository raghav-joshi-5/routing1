import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iprod } from 'src/app/module/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss'],
})
export class ProductdetailsComponent implements OnInit {
  prodId!: string;
  prodObj!: Iprod;
  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _prodService: ProductService
  ) {}

  ngOnInit(): void {
    this.prodId = this._route.snapshot.params['id'];
    this.prodObj = this._prodService.getproductInfo(this.prodId)!;
    // navigate to the product details route
    this._router.navigate(['/products', this.prodId]);
  }
}
