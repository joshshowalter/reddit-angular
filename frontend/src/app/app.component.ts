import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AppService } from './app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private appService: AppService,
    private router: Router
  ) {}

  // @ViewChild('parentel', {static: false}) parentEl: ElementRef;

  title = 'frontend';
  posts: Array<any> = [];
  profile: any;
  loading = true;
  // scrollPos: number;

  ngOnInit() {
    // this.getBest();
    this.getMe();
  }

  // getBest() {
  //   this.appService.getBest().subscribe(
  //     posts => {
  //       console.log('posts: ', posts);
  //       this.posts = posts;
  //       this.loading = false;
  //     },
  //     error => {
  //       console.error('big yikes: ', error);
  //       this.loading = false;
  //     }
  //   );
  // }

  getMore() {
    this.appService.getMore().subscribe(
      posts => {
        console.log('more posts: ', posts);
        this.posts = posts;
        this.loading = false;
      },
      error => {
        console.error('big yikes: ', error);
        this.loading = false;
      }
    );
  }

  getMe() {
    this.appService.getMe().subscribe(
      profileData => {
        console.log('retrieved profile ', profileData);
        this.profile = profileData;
      },
      error => {
        console.error('big yikes profile: ', error);
      }
    );
  }

  // upvote(id: string) {
  //   this.appService.upvote(id).subscribe(
  //     data => {
  //       console.log('submission: ', data);
  //     },
  //     error => {
  //       console.error('big yikes submission: ', error);
  //     }
  //   );
  // }

  // downvote(id: string) {
  //   this.appService.downvote(id).subscribe(
  //     data => {
  //       console.log('submission: ', data);
  //     },
  //     error => {
  //       console.error('big yikes submission: ', error);
  //     }
  //   );
  // }

  // goToDetail(post: any) {
  //   console.log('what is the post on click: ', post);
  //   this.router.navigate(['/post', post]);
  // }

}
