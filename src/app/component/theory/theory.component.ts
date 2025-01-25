import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-theory',
  templateUrl: './theory.component.html',
  styleUrls: ['./theory.component.scss'],
})
export class TheoryComponent implements OnInit {
  constructor(private _router: Router) {} // inject the Router service
  ngOnInit(): void {}
  // function to redirect to the products route when the user clicks on the button
  goToProducts() {
    // API call to redirect to the products route
    this._router.navigate(['/users']); // navigate to the products route
  }
}
