import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../../environments/environment';

@Pipe({
  name: 'image',
  standalone: true,
})
export class ImagePipe implements PipeTransform {
  transform(imageUrl: string): unknown {
    const baseUrl = environment.baseUrl;
    return `${baseUrl}/images/${imageUrl}`;
  }
}
