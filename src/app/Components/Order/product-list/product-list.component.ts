import { Component } from '@angular/core';
import { IProduct } from '../../../Models/iproduct';
import { ICategory } from '../../../Models/icategory';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  clickMessage:any;
  prdList:IProduct[];
  catList:ICategory[];
  orderTotalPrice:number = 0;
  selectedCategoryId:number = 0;

  buying(prdPrice:number, itemsCount:any)
  {
    this.orderTotalPrice = prdPrice * parseInt(itemsCount)
  }

  buy(prdPrice:number, itemsCount:any)
  {
    this.orderTotalPrice = prdPrice * parseInt(itemsCount)
  }

  changeCategory()
  {
    this.selectedCategoryId = 1;
  }

  profuctTrackByFun(index:number, prd:IProduct):number
  {
    return prd.id;
  }

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
    this.prdList = [
      {
        id:100,
        name:'LenovoThinkpad Laptop',
        price:100,
        quantity:1,
        imageURL:'https://fakeimg.pl/120x100/ff0000/000',
        categoryID:1
      },
      {
        id:200,
        name:'Apple MacBook Laptop',
        price:200,
        quantity:0,
        imageURL:'https://fakeimg.pl/120x100/ff0000/000',
        categoryID:1
      },
      {
        id:300,
        name:'Lenovo Tab 2',
        price:300,
        quantity:10,
        imageURL:'https://fakeimg.pl/120x100/ff0000/000',
        categoryID:2
      },
      {
        id:400,
        name:'Sumsung Tab',
        price:400,
        quantity:2,
        imageURL:'https://fakeimg.pl/120x100/ff0000/000',
        categoryID:2
      },
      {
        id:500,
        name:'Sumsung Note 10',
        price:500,
        quantity:0,
        imageURL:'https://fakeimg.pl/120x100/ff0000/000',
        categoryID:3
      },
      {
        id:600,
        name:'Sumsung S22 Utlra',
        price:600,
        quantity:1,
        imageURL:'https://fakeimg.pl/120x100/ff0000/000',
        categoryID:3
      },
    ];
  }
}
