import { Component, OnInit, Input } from '@angular/core';
// import { Post } from '../app.component';
import { PostModule } from '../models/post/post.module';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  @Input() post : PostModule;
  @Input() index : number;

  
  constructor(private dataService : DataService ) { }

  ngOnInit() {
  }

  onLoved() {
    this.dataService.loveIt(this.index);
    console.log(this.post.loveIts);
    this.dataService.savePostsToServer();

  }

  onDontLoved() {
    this.dataService.dontLoveIt(this.index);
      console.log(this.post.loveIts);
      this.dataService.savePostsToServer();
  }

onDelete(){
  this.dataService.deleteOne(this.index);
  console.log("Suppression ok");
  this.dataService.savePostsToServer();
}

  getMarginLeft() : string {
    return '10px';
  }
}
