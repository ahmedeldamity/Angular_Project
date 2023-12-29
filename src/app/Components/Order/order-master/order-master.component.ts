import { ProductListComponent } from './../product-list/product-list.component';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ICategory } from '../../../Models/icategory';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrl: './order-master.component.css'
})
export class OrderMasterComponent implements AfterViewInit {

  catList:ICategory[];
  selectedCategoryId:number = 0;
  receivedTotalPrice:number = 0;
  orderDate:Date = new Date();
  @ViewChild('clientName') clientNameInput!: ElementRef;
  @ViewChild(ProductListComponent) ProductListComponentObj!: ProductListComponent;

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

  ngAfterViewInit(): void {
    this.clientNameInput.nativeElement.value = "Your Name Here";
    this.clientNameInput.nativeElement.style.border = "2px solid red";
    console.log(this.ProductListComponentObj.prdList);
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
