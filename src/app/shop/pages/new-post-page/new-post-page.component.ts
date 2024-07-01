import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageService } from '../../services/image.service';
import { PostService } from '../../services/post.service';
import { Post } from '../../interfaces/post.interface';
import { Photo } from '../../interfaces/photo.interface';
import { tap } from 'rxjs';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './new-post-page.component.html',
  styles: ``,
})
export class NewPostPageComponent implements OnInit {
  public newPostForm = new FormGroup({
    postId: new FormControl(),
    title: new FormControl(''),
    content: new FormControl(''),
    price: new FormControl(0),
    tag: new FormControl(''),
    published: new FormControl<boolean | null>(null),
  });

  public photo?: File;

  constructor(
    private readonly postService: PostService,
    private readonly imageService: ImageService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
  ) {}


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ id }) => {
      if (!id) {
        return;
      }
      this.postService.getMyPostById(id).subscribe((post) => {
        this.newPostForm.reset({
          postId: post.postId,
          title: post.title,
          content: post.content,
          price: post.price,
          tag: post.tags[0].tag,
          published: post.published
        });
      })
    })
  }

  get currentPost(): Post {
    const formValues = this.newPostForm.value;
    const post = {
      postId: formValues.postId,
      title: formValues.title,
      content: formValues.content,
      price: formValues.price,
      tags: [
        {
          tag: formValues.tag,
        },
      ],
      published: formValues.published,
    };
    return post as unknown as Post;
  }

  onSubmit() {
    const post = this.currentPost;
    // Verificar si this.photo está presente para cargar la imagen
    if (this.photo) {
      this.imageService.uploadImage(this.photo).subscribe({
        next: (photo: Photo) => {
          post.photos = [photo];
          this.createOrUpdatePost(post);
        },
        error: (e) => {
          console.error(e);
        },
      });
    } else {
      this.createOrUpdatePost(post);
    }
  }

  createOrUpdatePost(post: Post) {
    if (!post.postId) {
      this.postService.createPost(post).subscribe({
        complete: () => this.router.navigate(['/shop']),
        error: (e) => {
          alert(e.error.message || 'An error occurred');
          this.newPostForm.reset();
        },
      });
    } else {
      this.postService.updatePost(post).pipe(
        tap((post) => post.photos = [])
      ).subscribe({
        complete: () => this.router.navigate(['/shop']),
        error: (e) => {
          alert(e.error.message || 'An error occurred');
          this.newPostForm.reset();
        },
      });
    }
  }

  onFileChange(event: Event) {
    const target = event.target as HTMLInputElement;
    if (!target.files || target.files.length === 0) {
      return;
    }
    this.photo = target.files[0];
  }
}
