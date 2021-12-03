import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { AppService } from '../app.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  constructor(
    private appService: AppService,
    private route: ActivatedRoute
  ) { }

  data: any

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap(params => {
        const id = params.get('id');
        return this.appService.getPost(id);
      })
    ).subscribe(data => {
      console.log('data; ', data);
      this.data = data;
    });
  }
}
