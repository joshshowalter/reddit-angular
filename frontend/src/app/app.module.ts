import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { 
  MatCardModule, 
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatProgressSpinnerModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostComponent, NoSanitizePipe } from './post/post.component';
import { DetailComponent } from './detail/detail.component';
import { PostWrapperComponent } from './post/post-wrapper/post-wrapper.component';
import { CommentComponent } from './detail/comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    NoSanitizePipe,
    DetailComponent,
    PostWrapperComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
