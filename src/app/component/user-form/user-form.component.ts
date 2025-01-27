import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  isEditMode: boolean = false;
  userId!: string;
  constructor(private _routs: ActivatedRoute) {}

  ngOnInit(): void {
    this.userId = this._routs.snapshot.params['id'];
    if (this.userId) {
      this.isEditMode = true;
    } else {
      this.isEditMode = false;
    }
  }
}
