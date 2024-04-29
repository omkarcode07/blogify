import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {

  id:any;
  article:any;

  constructor(private act:ActivatedRoute, private data:DataService){}

  ngOnInit():void{
    this.id=this.act.snapshot.paramMap.get('id');
    this.data.getArticleById(this.id)
      .subscribe(
        res=>{
          this.article = res;
        }
      );
  }
}
