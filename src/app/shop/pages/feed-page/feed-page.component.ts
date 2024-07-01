import { Component, OnInit } from '@angular/core';
import { PostFeedComponent } from '../../components/post-feed/post-feed.component';
import { PostService } from '../../services/post.service';
import { Post } from '../../interfaces/post.interface';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, PostFeedComponent, RouterLink],
  templateUrl: './feed-page.component.html',
  styles: ``,
})
export class FeedPageComponent implements OnInit {
  public posts: Post[] = [];

  constructor(
    private readonly postService: PostService,
    private readonly activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(({ q }) => {
      if (!q) {
        this.postService.getPosts().subscribe((posts) => {
          this.posts = posts;
        });
        return;
      }
      this.postService.searchPosts(q).subscribe((posts) => {
        this.posts = posts;
      });
    })
  }
}
