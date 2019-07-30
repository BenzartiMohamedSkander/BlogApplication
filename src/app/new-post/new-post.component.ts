import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { PostModule } from '../models/post/post.module';



@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  postForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private dataService : DataService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],

    });
  }

  onSubmitForm() {

    const title = this.postForm.get('title').value;
    const content = this.postForm.get('content').value;
    const loveIts = 0 ;
    const date = new Date();
    
  
    
    const newPost = new PostModule(title,content,loveIts,date);
    this.dataService.addPost(newPost);
    this.dataService.savePostsToServer();
    
    this.router.navigate(['/posts']);
  }



}


