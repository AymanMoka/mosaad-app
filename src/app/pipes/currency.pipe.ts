import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {

  transform(price: number) {
    return (new Intl.NumberFormat('ar-SA', { style: 'currency', minimumFractionDigits: 0, currency: 'SAR' }).format(price));

  }

}
