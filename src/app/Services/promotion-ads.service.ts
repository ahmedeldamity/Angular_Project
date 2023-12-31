import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromotionAdsService {
  private adsList: string[];
  constructor()
  {
    this.adsList=[
      "Big Discounts",
      "Sale Up To 50%",
      "Check Our White Friday Offers",
      "",
      "Special White Friday Offers Up To 70%"
    ];
  }

  getScheduledAds(intervalInSeconds: number): Observable<string>
  {
    return new Observable<string>((observer) => {

      let counter = 0;
      let adsTimer = setInterval(() => {
        console.log("Interval");
        if(counter == this.adsList.length)
        {
          observer.complete();
        }
        if(this.adsList[counter] == "")
        {
          observer.error("Error: Empty Ad.");
        }
        observer.next(this.adsList[counter]);
        counter++;
      }, intervalInSeconds*1000);

      return {
        unsubscribe(){
          clearInterval(adsTimer);
          console.log("Un Subscribe");
        }
      }
    });
  }
}
