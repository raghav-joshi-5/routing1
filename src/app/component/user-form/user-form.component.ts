import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Iuser } from 'src/app/module/user';
import { ProductService } from 'src/app/service/product.service';
import { UuidService } from 'src/app/service/uuid.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  isEditMode: boolean = false;
  userId!: string;

  userForm!: FormGroup;

  constructor(
    private _routs: ActivatedRoute,
    private _uuid: UuidService,
    private _prodService: ProductService
  ) {}

  ngOnInit(): void {
    this.editMode();
    this.createform();
  }

  createform() {
    // create the form
    this.userForm = new FormGroup({
      // add the form controls
      name: new FormControl('', [Validators.required]),
      role: new FormControl('', [Validators.required]),
      workDescription: new FormControl('', [Validators.required]),
    });
  }

  editMode() {
    this.userId = this._routs.snapshot.params['id'];
    if (this.userId) {
      this.isEditMode = true;
    } else {
      this.isEditMode = false;
    }
  }

  onSubmit() {
    if (this.userForm.valid) {
      let userObj: Iuser = {
        ...this.userForm.value,
        id: this._uuid.generateUuid(),
      };
      console.log(userObj);

      this._prodService.onSubmit(userObj);
    }
  }
}
