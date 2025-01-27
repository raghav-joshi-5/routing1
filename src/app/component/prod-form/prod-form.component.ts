import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prod-form',
  templateUrl: './prod-form.component.html',
  styleUrls: ['./prod-form.component.scss'],
})
export class ProdFormComponent implements OnInit {
  isEditMode: boolean = false; // to check if the form is in edit mode or not or to add the product
  prodId!: string; // to store the id
  constructor(private _routes: ActivatedRoute) {}

  ngOnInit(): void {
    // comp will be in edit mode if the url has id/param.
    this.prodId = this._routes.snapshot.params['id'];
    if (this.prodId) {
      this.isEditMode = true;
    } else {
      this.isEditMode = false;
    }
  }
}
