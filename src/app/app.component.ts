import { Component } from '@angular/core';

export interface Post {
  id: number,
  title: string,
  content: string,
  loveIts: number,
  created_at: Date
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
 
}
