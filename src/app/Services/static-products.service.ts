import { IProduct } from './../Models/iproduct';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StaticProductsService {
  private productList: IProduct[];
  constructor()
  {
    this.productList = [
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

  getAllProducts(): IProduct[]
  {
    return this.productList;
  }

  getProductByCategoryId(categoryId: number): IProduct[]
  {
    if(categoryId == 0)
      return this.productList;
    else
      return this.productList.filter(P => P.categoryID == categoryId);
  }

  getProductById(productId: number): IProduct | null
  {
    let product = this.productList.find(P => P.id == productId);
    return product ?? null
  }

  addNewProduct(product: IProduct)
  {
    this.productList.push(product);
  }
  getProductsId(): number[]
  {
    return this.productList.map(p => p.id);
  }
}
