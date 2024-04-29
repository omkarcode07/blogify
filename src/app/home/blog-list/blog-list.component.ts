import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.css'
})
export class BlogListComponent {

  articles:any;


  constructor(private data:DataService){}
  
  ngOnInit():void{
    this.data.getAll()
      .subscribe(
        res=>{
          this.articles = res;
        },err=>{
          console.log(err);
        }
      );
  }

}
