import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class PostModule {
  constructor(
   
    public title: string,
    public content: string,
    public loveIts: number,
    public created_at: Date
  ) {}
 }
