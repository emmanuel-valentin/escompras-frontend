import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private baseUrl = `${environment.baseUrl}/posts`;
  constructor(private readonly http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.baseUrl}/`);
  }

  getPostById(postId: number): Observable<Post> {
    return this.http.get<Post>(`${this.baseUrl}/${postId}`);
  }

  createPost(post: Post): Observable<Post> {
    return this.http.post<Post>(`${this.baseUrl}/`, post);
  }

  updatePost(post: Post): Observable<Post> {
    console.log('post', post);
    return this.http.put<Post>(`${this.baseUrl}/${post.postId}`, post);
  }

  deletePost(postId: number): Observable<Post> {
    return this.http.delete<Post>(`${this.baseUrl}/${postId}`);
  }

  getMyPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.baseUrl}/my-posts`);
  }

  getMyDrafts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.baseUrl}/my-posts/drafts`);
  }

  searchPosts(query: string): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.baseUrl}/search?q=${query}`);
  }

  getMyPostById(postId: string): Observable<Post> {
    return this.http.get<Post>(`${this.baseUrl}/my-posts/${postId}`);
  }
}
