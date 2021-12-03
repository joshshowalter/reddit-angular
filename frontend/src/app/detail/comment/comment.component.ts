import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  constructor() { }

  @Input() comment: any

  collapse = false;

  ngOnInit() {
  }

}
