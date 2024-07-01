import { Component, Input } from '@angular/core';
import { Post } from '../../interfaces/post.interface';
import { ImagePipe } from '../../../shared/pipes/image.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shop-post-feed',
  standalone: true,
  imports: [CommonModule, ImagePipe],
  templateUrl: './post-feed.component.html',
  styles: ``
})
export class PostFeedComponent {
  @Input()
  public post: Post = {} as Post;

  @Input()
  public showCartButton: boolean = false;
}
