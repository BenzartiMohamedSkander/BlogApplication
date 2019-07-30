import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Post } from '../app.component';
import { Subscription } from 'rxjs';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {


  posts: any[];
  postSubscription: Subscription;

  constructor(private dataService: DataService) { }

  ngOnInit() {
  
    this.dataService.getPostsFromServer();
    this.postSubscription = this.dataService.postsSubject.subscribe(
      (posts: any[]) => {
        this.posts = posts;
      }
    );
    // this.dataService.emitPostSubject();


  }






  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }


}
