import { Component } from '@angular/core';
import { StoreData } from '../../ViewModels/store-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  storeInfo:StoreData;
  constructor() {
    this.storeInfo = new StoreData('E-Commerce Store', 'https://picsum.photos/400/200', ['Cairo', 'Alex', 'Qena']);
  }
  toggleImage()
  {
    this.storeInfo.isImageShown = !this.storeInfo.isImageShown;
  }
}
