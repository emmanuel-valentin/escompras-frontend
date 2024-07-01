import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../../services/post.service';
import { Post } from '../../interfaces/post.interface';
import { ImagePipe } from '../../../shared/pipes/image.pipe';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [ImagePipe, CommonModule],
  templateUrl: './post-detail-page.component.html',
  styles: ``,
})
export class PostDetailPageComponent implements OnInit {
  public post: Post = {} as Post;
  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
    private readonly postService: PostService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ id }) => {
      if (!id) {
        this.router.navigate(['/feed']);
        return;
      }
      this.postService.getPostById(id).subscribe((post) => {
        this.post = post;
      });
    });
  }
}
