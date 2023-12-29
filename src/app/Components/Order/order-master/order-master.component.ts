import { Component } from '@angular/core';
import { ICategory } from '../../../Models/icategory';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrl: './order-master.component.css'
})
export class OrderMasterComponent {

  catList:ICategory[];
  selectedCategoryId:number = 0;
  receivedTotalPrice:number = 0;
  orderDate:Date = new Date();

  constructor() {
    this.catList = [
      {
        id:1,
        name:'Laptop'
      },
      {
        id:2,
        name:'Tablets'
      },
      {
        id:3,
        name:'Mobiles'
      }
    ];
  }

  changeCategory()
  {
    this.selectedCategoryId = 1;
  }

  onTotalPriceChange(totalPrice: number)
  {
    this.receivedTotalPrice = totalPrice;
  }
}
