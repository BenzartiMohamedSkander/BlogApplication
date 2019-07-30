import { Injectable } from '@angular/core';
import { Subject, from } from 'rxjs';
import { PostModule } from '../models/post/post.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  postsSubject = new Subject<any[]>();
  


  private posts = [
    // {
    //   title: 'Mon premier post',
    //   content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ',
    //   loveIts: 0,
    //   created_at: new Date()
    // },
    // { 
    //   title: 'Mon deuxième post',
    //   content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ',
    //   loveIts: 0,
    //   created_at: new Date()
    // },
    // {
    //   title: 'Encore un post',
    //   content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ',
    //   loveIts: 0,
    //   created_at: new Date()
    // }
  ]

  constructor(private httpClient: HttpClient) { }

  emitPostSubject() {
    this.postsSubject.next(this.posts.slice());
  }

  deleteOne(i: number) {
    this.posts.splice(i,1);
    this.emitPostSubject();
}

loveIt(i: number){
  this.posts[i].loveIts++;
  this.emitPostSubject();
}

 dontLoveIt(i: number){
  this.posts[i].loveIts--;
  this.emitPostSubject();
 }

 addPost(newPost: PostModule )
 {
   this.posts.push(newPost);
  
   this.emitPostSubject();
 }


 savePostsToServer() {
  this.httpClient
    .put('https://rv-blog-master.firebaseio.com/posts.json', this.posts)
    .subscribe(
      () => {
        console.log('Enregistrement terminé !');
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
}

getPostsFromServer() {
  this.httpClient
    .get<any[]>('https://rv-blog-master.firebaseio.com/posts.json')
    .subscribe(
      (response) => {
        this.posts = response;
        this.emitPostSubject();
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
}



}
