import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createarticle',
  templateUrl: './createarticle.component.html',
  styleUrl: './createarticle.component.css'
})
export class CreatearticleComponent {

  article:any={
    title:'',
    content:'',
    tags:[],
    desciption:''
  }

  tag:any='';

  image:any;
  select(e:any){
    this.image = e.target.files[0];
  }

  constructor(private _auth:AuthService,private data:DataService, private router:Router){}

  
  create(){
    let fd = new FormData();
    fd.append('title',this.article.title);
    fd.append('content',this.article.content);
    fd.append('tags',this.article.tags.toString());
    fd.append('description',this.article.desciption);
    fd.append('image',this.image);
    fd.append('idAuthor',this._auth.getAuthorDataFromToken()._id);

    this.data.create(fd)
      .subscribe(
        res=>{
          this.router.navigate(['/home']);
        },
        err=>{
          console.log(err);
        }
      );


  }

} 
