import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({opacity: 0}),
          animate('1000ms', style({opacity: 1}))
        ])
      ]
    )
  ]
})
export class PostComponent implements OnChanges {
  @Input() post: any;
  @Output() onClick: EventEmitter<string> = new EventEmitter();
  @Output() onUpvote: EventEmitter<string> = new EventEmitter();
  @Output() onDownvote: EventEmitter<string> = new EventEmitter();

  preview: any;
  embeddedHtml: any;
  upvotes: string;
  author: string;
  hasUpvoted: boolean;
  hasDownvoted: boolean;
  title: string;
  comments: number;

  constructor(private domSanitizer: DomSanitizer) { }

  ngOnChanges() {
    this.extractPostProps();
  }

  extractPostProps(): void {
    if (this.post.preview && this.post.preview.images) {
      this.preview = this.post.preview.images[0].source.url
    }
    if (this.post.ups) {
      this.upvotes = (this.post.ups / 1000 > 1) ? (this.post.ups / 1000).toFixed(1) + 'k' : this.post.ups;
    }
    if (this.post.likes) {
      this.hasUpvoted = true;
    } else if (this.post.likes === false) {
      this.hasDownvoted = true;
    }

    this.comments = (this.post.num_comments / 1000 > 1) ? (this.post.num_comments / 1000).toFixed(1) + 'k' : this.post.num_comments;
    this.title = this.post.title.length > 120 ? this.post.title.substr(0, 121) + '...' : this.post.title;
    this.author = 'Posted by ' + this.post.author;
    
    this.handleEmbeddedMedia();
  }

  handleEmbeddedMedia(): void {
    // Very wack inner html handling
    if (this.post.media_embed && this.post.media_embed.content) {
      const htmlString = this.post.media_embed.content;
      if (htmlString.substr(0, 7) === '<iframe') {
        this.embeddedHtml = htmlString.substr(0, 7) + ' style="width: 100%" ' + htmlString.substr(7, htmlString.length);
      }
      this.embeddedHtml = this.domSanitizer.bypassSecurityTrustHtml(this.embeddedHtml);
      this.embeddedHtml = this.embeddedHtml.changingThisBreaksApplicationSecurity;
    }
  }

  click(): void {
    this.onClick.emit(this.post.id);
  }

  upvote(): void {
    this.hasUpvoted = true;
    this.hasDownvoted = false;
    this.onUpvote.emit(this.post.id);
  }
  
  downvote(): void {
    this.hasDownvoted = true;
    this.hasUpvoted = false;
    this.onDownvote.emit(this.post.id);
  }

}

@Pipe({ name: 'noSanitize' })
export class NoSanitizePipe implements PipeTransform {
   constructor(private domSanitizer: DomSanitizer) {

   }
   transform(html: string): SafeHtml {
      return this.domSanitizer.bypassSecurityTrustHtml(html);
   }
}
