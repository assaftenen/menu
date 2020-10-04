import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  constructor() { }
  Lunch: any[] = [
    {
      name: 'French fries',
      price:1,
    },
    {
      name: 'Chicken roast',
      price: 12,
    },
    {
      name: 'Steak',
      price: 13,
    }
  ];
  Breakfast: any[] = [
    {
      name: 'Eggs',
      price: 10,
    },
    {
      name: 'Salad',
      price: 8,
    }
  ];

  ngOnInit(): void {
  }

}
