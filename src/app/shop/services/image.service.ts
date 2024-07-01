import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Photo } from '../interfaces/photo.interface';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  private baseUrl = environment.baseUrl;

  constructor(private readonly http: HttpClient) {}

  uploadImage(image: File): Observable<Photo> {
    const formData = new FormData();
    formData.append('image', image);
    return this.http.post<Photo>(`${this.baseUrl}/images/upload`, formData);
  }
}
