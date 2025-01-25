import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iuser } from 'src/app/module/user';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent implements OnInit {
  userId!: string;
  userObj!: Iuser;
  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _prodService: ProductService
  ) {}

  ngOnInit(): void {
    this.userId = this._route.snapshot.params['id'];
    this.userObj = this._prodService.getuserInfo(this.userId)!;
    // navigate to the user info route
    this._router.navigate(['/users', this.userId]);
  }
}
