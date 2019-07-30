import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { DataService } from './services/data.service';
import { NewPostComponent } from './new-post/new-post.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', component:PostListComponent},
  { path: 'posts', component:PostListComponent},
  { path: 'newPost', component:NewPostComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    NavbarComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
    
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
