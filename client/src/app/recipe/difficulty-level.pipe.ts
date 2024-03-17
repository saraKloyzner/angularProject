import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'difficultyLevel'
})
export class DifficultyLevelPipe implements PipeTransform {

  transform(value: number): string {
    let stars: string = '';

    for (let i = 0; i < value; i++) {
      stars += '<i class="fas fa-star"></i>'; // הוספת כוכב לתוך המשתנה
    }

    return stars;
  }
}
