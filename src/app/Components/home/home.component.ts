import { Component, OnDestroy, OnInit } from '@angular/core';
import { StoreData } from '../../ViewModels/store-data';
import { PromotionAdsService } from '../../Services/promotion-ads.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  storeInfo:StoreData;
  private subscriptions: Subscription[] = [];
  constructor(private promoAds: PromotionAdsService) {
    this.storeInfo = new StoreData('E-Commerce Store', 'https://picsum.photos/400/200', ['Cairo', 'Alex', 'Qena']);
  }

  ngOnInit(): void {

    let adsSubscription = this.promoAds.getScheduledAds(3).subscribe({
      next: (data:string) => {
        console.log(data)
      },
      error: (error:string) => {
        console.log(error);
      },
      complete: () => {
        console.log("Ads Finished");
      }
    });

    this.subscriptions.push(adsSubscription);

    // adsSubscription.unsubscribe();
  }

  ngOnDestroy(): void {
    for(let subscription of this.subscriptions)
    {
      subscription.unsubscribe();
    }
  }

  toggleImage()
  {
    this.storeInfo.isImageShown = !this.storeInfo.isImageShown;
  }
}
