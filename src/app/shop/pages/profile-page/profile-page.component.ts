import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { User } from '../../../auth/interfaces/user.interface';
import { PostService } from '../../services/post.service';
import { Post } from '../../interfaces/post.interface';
import { PostFeedComponent } from '../../components/post-feed/post-feed.component';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { first } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, PostFeedComponent, ReactiveFormsModule, RouterLink],
  templateUrl: './profile-page.component.html',
  styles: ``,
})
export class ProfilePageComponent implements OnInit {
  public user: User = {} as User;
  public posts: Post[] = [];
  public drafts: Post[] = [];

  public editProfileForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
  });

  public isLoading = false;

  constructor(
    private readonly authService: AuthService,
    private readonly postService: PostService
  ) {}

  get currentUser() {
    const user = this.editProfileForm.value as User;
    return user;
  }

  ngOnInit(): void {
    this.authService.getProfile().subscribe((user) => {
      this.user = user;
      this.editProfileForm.reset(user);
      this.editProfileForm.disable();
    });
    this.postService.getMyPosts().subscribe((posts) => (this.posts = posts));
    this.postService
      .getMyDrafts()
      .subscribe((drafts) => (this.drafts = drafts));
  }

  toggleEdit(): void {
    if (this.editProfileForm.enabled) {
      this.editProfileForm.disable();
    } else {
      this.editProfileForm.enable();
    }
  }

  onSubmit(): void {
    if (this.editProfileForm.invalid) {
      return;
    }

    this.isLoading = true;
    this.authService
      .updateProfile(this.currentUser)
      .pipe(first())
      .subscribe({
        next: (user) => {
          this.user = user;
          this.editProfileForm.reset(user);
          this.editProfileForm.disable();
        },
        error: (error) => {
          alert(error.message);
        },
        complete: () => {
          alert('Perfil actualizado correctamente');
          this.isLoading = false;
        },
      });
  }
}
