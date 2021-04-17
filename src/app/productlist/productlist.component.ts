import { Component, OnInit } from '@angular/core';

export interface productTable {
  isChecked: boolean;
  picture: string;
  productName: string;
  sku: string;
  price: number;
  stock: number;
  published: string;
  edit: string;
}

const PRODUCT_DATA: productTable[] = [
  {isChecked: false, picture: '0000020_build-your-own-computer_75.jpeg', productName: 'Build your own computer', sku: 'COMP_CUST', price: 1200, stock: 10000, published: '', edit: 'Edit'},
  {isChecked: false, picture: '0000022_digital-storm-vanquish-3-custom-performance-pc_75.jpeg', productName: 'Digital Storm VANQUISH 3 Custom Performance PC', sku: 'DS_VA3_PC', price: 1259, stock: 10000, published: '', edit: 'Edit'},
  {isChecked: false, picture: '0000023_lenovo-ideacentre-600-all-in-one-pc_75.jpeg', productName: 'Lenovo IdeaCentre 600 All-in-One PC', sku: 'LE_IC_600', price: 500, stock: 10000, published: '', edit: 'Edit'},
  {isChecked: false, picture: '0000024_apple-macbook-pro-13-inch_75.jpeg', productName: 'Apple MacBook Pro 13-inch', sku: 'AP_MBP_13', price: 1800, stock: 10000, published: '', edit: 'Edit'},
];

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {

  displayedColumnsProduct: string[] = ['checked', 'Picture', 'Product name', 'SKU', 'Price', 'Stock quantity', 'Published', 'Edit'];
  dataSourceProduct = PRODUCT_DATA;

  constructor() { 

  }

  ngOnInit(): void {
  }

}
