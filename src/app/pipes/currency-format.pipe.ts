import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormat'
})
export class CurrencyFormatPipe implements PipeTransform {

  transform(
    value: number,
    currencySign: string = '$',
    decimalLength: number = 2,
    chunkDelimiter: string = ',',
    decimalDelimiter: string = '.',
    chunkLength: number = 3): string {

    // value /= 100;
    const result = '\\d(?=(\\d{' + chunkLength + '})+' + (decimalLength > 0 ? '\\D' : '$') + ')';
    if (!value || value == null) {
      value = 0;
    } else if ((typeof (value) === 'string')) {
      value = +value;
    } else {
      value = value;
    }


    // tslint:disable-next-line:no-bitwise
    const num = value.toFixed(Math.max(0, ~~decimalLength));
    // tslint:disable-next-line:max-line-length
    return currencySign + (decimalDelimiter ? num.replace('.', decimalDelimiter) : num).replace(new RegExp(result, 'g'), '$&' + chunkDelimiter);
  }

}
