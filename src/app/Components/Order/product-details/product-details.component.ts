import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StaticProductsService } from '../../../Services/static-products.service';
import { IProduct } from '../../../Models/iproduct';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {

  currenetProductId: number = 0;
  product: IProduct | null = null;
  productIdList: number[] = [];

  constructor(private activatedRoute: ActivatedRoute,
    private staticProductService: StaticProductsService,
    private location: Location,
    private router: Router ) {

  }

  ngOnInit(): void {
    this.productIdList = this.staticProductService.getProductsId();
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      this.currenetProductId = Number(paramMap.get('productId'));
      this.product = this.staticProductService.getProductById(this.currenetProductId);
    });
  }

  goBack()
  {
    this.location.back();
  }

  previousProduct()
  {
    let currentIndex = this.productIdList.findIndex((eleValueInArray) => eleValueInArray == this.currenetProductId);
    let previousProductId = this.currenetProductId;
    if(currentIndex > 0)
    {
      previousProductId = this.productIdList[currentIndex - 1];
      this.router.navigate(['Products/', previousProductId]);
    }
  }

  nextProduct()
  {
    let currentIndex = this.productIdList.findIndex((eleValueInArray) => eleValueInArray == this.currenetProductId);
    let previousProductId = this.currenetProductId;
    if(currentIndex < this.productIdList.length)
    {
      previousProductId = this.productIdList[currentIndex + 1];
      this.router.navigate(['Products/', previousProductId]);
    }
  }

}
