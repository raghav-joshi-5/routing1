import { Injectable } from '@angular/core';
import { Iprod } from '../module/product';
import { Iuser } from '../module/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private _router: Router) {}

  productsArr: Array<Iprod> = [
    {
      id: '1',
      name: 'Wireless Mouse',
      type: 'Electronics',
      quantity: '50',
      productDescription:
        'A high-precision wireless mouse with ergonomic design.',
      canReturn: 1,
      prodStatus: 'InProgress',
    },
    {
      id: '2',
      name: 'Notebook',
      type: 'Stationery',
      quantity: '120',
      productDescription:
        'A 200-page ruled notebook perfect for writing and note-taking.',
      canReturn: 0,
      prodStatus: 'Delivered',
    },
    {
      id: '3',
      name: 'Water Bottle',
      type: 'Kitchen',
      quantity: '75',
      productDescription:
        'Stainless steel water bottle with 1-liter capacity and leak-proof design.',
      canReturn: 1,
      prodStatus: 'Dispatched',
    },
    {
      id: '4',
      name: 'Bluetooth Speaker',
      type: 'Electronics',
      quantity: '30',
      productDescription:
        'Compact Bluetooth speaker with 12-hour battery life and rich sound quality.',
      canReturn: 1,
      prodStatus: 'Delivered',
    },
    {
      id: '5',
      name: 'Running Shoes',
      type: 'Footwear',
      quantity: '20',
      productDescription:
        'Lightweight and comfortable running shoes designed for long-distance runners.',
      canReturn: 0,
      prodStatus: 'Dispatched',
    },
  ];

  usersArr: Array<Iuser> = [
    {
      id: '1',
      name: 'Alice Johnson',
      role: 'Admin',
      workDescription: 'Manages system settings and oversees operations.',
    },
    {
      id: '2',
      name: 'Bob Smith',
      role: 'Candidate',
      workDescription: 'Applies for available job positions in the system.',
    },
    {
      id: '3',
      name: 'Charlie Brown',
      role: 'Candidate',
      workDescription: 'Prepares applications and attends interviews.',
    },
    {
      id: '4',
      name: 'Diana Evans',
      role: 'Admin',
      workDescription: 'Handles user accounts and monitors system performance.',
    },
    {
      id: '5',
      name: 'Ethan Green',
      role: 'Candidate',
      workDescription: 'Focuses on profile building and skill assessments.',
    },
  ];

  fetchProducts(): Array<Iprod> {
    return this.productsArr;
  }

  fetchUsers(): Array<Iuser> {
    return this.usersArr;
  }

  getuserInfo(id: string) {
    return this.usersArr.find((user) => user.id === id);
  }

  getproductInfo(id: string) {
    return this.productsArr.find((product) => product.id === id);
  }

  onSubmit(user: Iuser) {
    this.usersArr.push(user);
    // navigate to the users page after submitting the form
    this._router.navigate(['/users']); //by default it will navigate to the users page. this use the absolute path by default
  }

  onSubmitProduct(prod: Iprod) {
    this.productsArr.push(prod);
    this._router.navigate(['/products']);
  }
}
