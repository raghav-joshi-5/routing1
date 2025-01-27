import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import { UuidService } from 'src/app/service/uuid.service';

@Component({
  selector: 'app-prod-form',
  templateUrl: './prod-form.component.html',
  styleUrls: ['./prod-form.component.scss'],
})
export class ProdFormComponent implements OnInit {
  isEditMode: boolean = false; // to check if the form is in edit mode or not or to add the product
  prodId!: string; // to store the id
  productForm!: FormGroup; // to create the form
  constructor(
    private _routes: ActivatedRoute,
    private _uuid: UuidService,
    private _prodService: ProductService
  ) {}

  ngOnInit(): void {
    this.editMode();
    this.createForm();
  }

  editMode() {
    // comp will be in edit mode if the url has id/param.
    this.prodId = this._routes.snapshot.params['id'];
    if (this.prodId) {
      this.isEditMode = true;
    } else {
      this.isEditMode = false;
    }
  }

  createForm() {
    this.productForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required]),
      quantity: new FormControl('', [Validators.required]),
      productDescription: new FormControl('', [Validators.required]),
      canReturn: new FormControl('', [Validators.required]),
      prodStatus: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      let canReturnVal = this.productForm.value.canReturn === 'yes' ? 1 : 0;
      // this will get the value in 0 and 1 format
      let prodObj = {
        ...this.productForm.value,
        id: this._uuid.generateUuid(),
        canReturn: canReturnVal,
      };
      console.log(prodObj);
      this._prodService.onSubmitProduct(prodObj);
    }
  }
}
