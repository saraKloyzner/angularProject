
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatPreparationTime'
})
export class FormatPreparationTimePipe implements PipeTransform {

  transform(value: number): string {
    const hours = Math.floor(value / 60);
    const minutes = value % 60;

    let text = '';

    if (hours > 0) {
      text += `${hours} hours`;
    }

    if (minutes > 0) {
      if (hours > 0) {
        text += ' and ';
      }
      text += `${minutes} minutes`;
    }

    return text;
  }
}
