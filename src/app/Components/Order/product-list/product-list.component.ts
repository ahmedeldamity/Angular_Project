import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IProduct } from '../../../Models/iproduct';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnChanges {
  clickMessage:any;
  prdList:IProduct[];
  productListFilteration:IProduct[]=[];
  @Input() reseivedCategoryId:number = 0;
  orderTotalPrice:number = 0;
  orderDate:Date = new Date();

  setClassToButton:string = "btn btn-primary";
  setClassInfo:string= "table-info";
  setClassWarning:string= "table-warning";

  blueColor:string = "blue;";
  yellowColor:string = "yellow;";

  setInfoBackgroundColor:string = "background-color: blue;";
  setWarningBackgroundColor:string = "background-color: yellow;";

  constructor()
  {

    this.prdList = [
      {
        id:100,
        name:'LenovoThinkpad Laptop',
        price:100000,
        quantity:1,
        imageURL:'https://fakeimg.pl/120x100/ff0000/000',
        categoryID:1
      },
      {
        id:200,
        name:'Apple MacBook Laptop',
        price:200550,
        quantity:0,
        imageURL:'https://fakeimg.pl/120x100/ff0000/000',
        categoryID:1
      },
      {
        id:300,
        name:'Lenovo Tab 2',
        price:3000200,
        quantity:10,
        imageURL:'https://fakeimg.pl/120x100/ff0000/000',
        categoryID:2
      },
      {
        id:400,
        name:'Sumsung Tab',
        price:400860,
        quantity:2,
        imageURL:'https://fakeimg.pl/120x100/ff0000/000',
        categoryID:2
      },
      {
        id:500,
        name:'Sumsung Note 10',
        price:5000.999,
        quantity:0,
        imageURL:'https://fakeimg.pl/120x100/ff0000/000',
        categoryID:3
      },
      {
        id:600,
        name:'Sumsung S22 Utlra',
        price:600.12,
        quantity:1,
        imageURL:'https://fakeimg.pl/120x100/ff0000/000',
        categoryID:3
      },
    ];
  }

  ngOnChanges(): void {
    this.productsFilteration();
  }

  buying(prdPrice:number, itemsCount:any)
  {
    this.orderTotalPrice = prdPrice * parseInt(itemsCount)
  }

  productsTrackByFun(index:number, prd:IProduct):number
  {
    return prd.id;
  }

  private productsFilteration()
  {
    if(this.reseivedCategoryId == 0)
      this.productListFilteration = this.prdList;
    else
      this.productListFilteration = this.prdList.filter(P => P.categoryID == this.reseivedCategoryId);
  }
}
