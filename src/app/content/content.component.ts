import { Component, OnInit } from '@angular/core';

export interface orderTotals {
  orderStatus: string;
  toDay: string;
  thisWeek: string;
  thisMonth: string;
  thisYear: string;
  allTime: string;
}

const ELEMENT_DATA: orderTotals[] = [
  {orderStatus: 'Pending', toDay: '$0.00', thisWeek: '$0.00', thisMonth: '$0.00', thisYear: '$0.00', allTime: '$2,468.80'},
  {orderStatus: 'Processing', toDay: '$0.00', thisWeek: '$0.00', thisMonth: '$0.00', thisYear: '$0.00', allTime: '$1,957.00'},
  {orderStatus: 'Complete', toDay: '$0.00', thisWeek: '$0.00', thisMonth: '$0.00', thisYear: '$0.00', allTime: '$43.50'},
  {orderStatus: 'Cancelled', toDay: '$0.00', thisWeek: '$0.00', thisMonth: '$0.00', thisYear: '$0.00', allTime: '$0.00'},
];

export interface incompleteOrder {
  item: string;
  total: string;
  count: string;
}

const INCOMPLETE_DATA: incompleteOrder[] = [
  {item: 'Total unpaid orders (pending payment status)', total: '$2,468.80', count: '2-view all'},
  {item: 'Total not yet shipped orders', total: '$4,315.00', count: '2-view all'},
  {item: 'Total incomplete orders (pending order status)', total: '$2,468.80', count: '2-view all'},
];


export interface latest {
  orderLatest: string;
  orderStatusLatest: string;
  customerLatest: string;
  createdOn: string;
  viewLatest: string;
}

const LATEST_DATA: latest[] = [
  {orderLatest: '5', orderStatusLatest: 'Complete', customerLatest: 'Victoria Terces (victoria_victoria@nopCommerce.com)', createdOn: '03/13/2017 6:20:10 AM', viewLatest: 'View'},
  {orderLatest: '4', orderStatusLatest: 'Processing', customerLatest: 'Brenda Lindgren (brenda_lindgren@nopCommerce.com)', createdOn: '03/13/2017 6:20:09 AM', viewLatest: 'View'},
  {orderLatest: '3', orderStatusLatest: 'Pending', customerLatest: 'Arthur Holmes (arthur_holmes@nopCommerce.com)', createdOn: '03/13/2017 6:20:09 AM', viewLatest: 'View'},
  {orderLatest: '2', orderStatusLatest: 'Pending', customerLatest: 'Steve Gates (steve_gates@nopCommerce.com)', createdOn: '03/13/2017 6:20:09 AM', viewLatest: 'View'},
  {orderLatest: '1', orderStatusLatest: 'Processing', customerLatest: 'James Pan (james_pan@nopCommerce.com)', createdOn: '03/13/2017 6:20:09 AM', viewLatest: 'View'},
];

export interface popular {
  keyword: string;
  countPopular: string;
}

const POPULAR_DATA: popular[] = [
  {keyword: 'computer	', countPopular: '34'},
  {keyword: 'camera	', countPopular: '30'},
  {keyword: 'jewelry', countPopular: '27'},
  {keyword: 'shoes', countPopular: '26'},
  {keyword: 'jeans', countPopular: '19'},
];

export interface bestSellers {
  nameQuantity: string;
  totalQuantity: string;
  totalAmount: string;
  view: string;
}

const BESTSELLERS_DATA: bestSellers[] = [
  {nameQuantity: 'Leica T Mirrorless Digital Camera', totalQuantity: '1', totalAmount: '$530.00', view: 'View'},
  {nameQuantity: 'Apple iCam', totalQuantity: '1', totalAmount: '$1,300.00', view: 'View'},
  {nameQuantity: 'Levi\'s 511 Jeans', totalQuantity: '1', totalAmount: '$43.50', view: 'View'},
  {nameQuantity: 'Night Visions', totalQuantity: '1', totalAmount: '$2.80', view: 'View'},
  {nameQuantity: 'If You Wait (donation)', totalQuantity: '1', totalAmount: '$3.00', view: 'View'},
];

export interface bestSellers2 {
  nameQuantity2: string;
  totalQuantity2: string;
  totalAmount2: string;
  view2: string;
}

const BESTSELLERS2_DATA: bestSellers2[] = [
  {nameQuantity2: 'Vintage Style Engagement Ring', totalQuantity2: '1', totalAmount2: '$2,100.00', view2: 'View'},
  {nameQuantity2: 'Apple iCam', totalQuantity2: '1', totalAmount2: '$1,300.00', view2: 'View'},
  {nameQuantity2: 'Leica T Mirrorless Digital Camera', totalQuantity2: '1', totalAmount2: '$530.00', view2: 'View'},
  {nameQuantity2: 'Flower Girl Bracelet', totalQuantity2: '1', totalAmount2: '$360.00', view2: 'View'},
  {nameQuantity2: 'First Prize Pies', totalQuantity2: '1', totalAmount2: '$51.00', view2: 'View'},
];

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  displayedColumns: string[] = ['Order Status', 'Today', 'This Week', 'This Month', 'This Year', 'All time'];
  dataSource = ELEMENT_DATA;
  displayedColumnsIncomplete: string[] = ['Item', 'Total', 'Count'];
  dataSourceIncomplete = INCOMPLETE_DATA;
  displayedColumnsLatest: string[] = ['Order', 'Order status', 'Customer', 'Created on', 'View'];
  dataSourceLatest = LATEST_DATA;
  displayedColumnsPopular: string[] = ['Keyword', 'Count'];
  dataSourcePopular = POPULAR_DATA;
  displayedColumnsBestSeller: string[] = ['Name', 'Total quantity', 'Total amount (excl tax)', 'View'];
  dataSourceBestSeller = BESTSELLERS_DATA;
  displayedColumnsBestSeller2: string[] = ['Name', 'Total quantity', 'Total amount (excl tax)', 'View'];
  dataSourceBestSeller2 = BESTSELLERS2_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
