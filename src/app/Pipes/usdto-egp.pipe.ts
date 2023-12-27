import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'USDtoEGP'
})
export class USDtoEGPPipe implements PipeTransform {

  transform(value?: number, currencyDifference:number = 15): number {
    if(value == null)
      return 0;
    return value * currencyDifference;
  }
}
