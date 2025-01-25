import { Component, OnInit } from '@angular/core';
import { Iuser } from 'src/app/module/user';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  usersArr!: Array<Iuser>;

  constructor(private _prodService: ProductService) {}

  ngOnInit(): void {
    this.usersArr = this._prodService.fetchUsers();
  }
}
