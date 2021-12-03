import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'post-wrapper',
  templateUrl: './post-wrapper.component.html',
  styleUrls: ['./post-wrapper.component.scss']
})
export class PostWrapperComponent implements OnInit {
  constructor(
    private appService: AppService,
    private router: Router
  ) { }

  posts: Array<any> = [];
  loading = true;

  ngOnInit() {
    this.getBest();
  }

  getBest() {
    this.appService.getBest().subscribe(
      posts => {
        console.log('posts: ', posts);
        this.posts = posts;
        this.loading = false;
      },
      error => {
        console.error('big yikes: ', error);
        this.loading = false;
      }
    );
  }

  upvote(id: string) {
    this.appService.upvote(id).subscribe(
      data => {
        console.log('submission: ', data);
      },
      error => {
        console.error('big yikes submission: ', error);
      }
    );
  }

  downvote(id: string) {
    this.appService.downvote(id).subscribe(
      data => {
        console.log('submission: ', data);
      },
      error => {
        console.error('big yikes submission: ', error);
      }
    );
  }

  goToDetail(post: any) {
    console.log('what is the post on click: ', post);
    this.router.navigate(['/post', post]);
  }

}
