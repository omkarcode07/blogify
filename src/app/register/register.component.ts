import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {


  author = {
    name:'',
    lastname:'',
    email:'',
    password:'',
    about:'',
  }

  image:any;
  select(e:any){
    this.image=e.target.files[0];
  }

  constructor(private _auth: AuthService, private router:Router){}

  register(){

    let fd = new FormData();

    fd.append('name',this.author.name);
    fd.append('lastname',this.author.lastname);
    fd.append('email',this.author.email);
    fd.append('password',this.author.password);
    fd.append('about',this.author.about);
    fd.append('image',this.image);

    this._auth.register(fd)
      .subscribe(
        res=>{
          this.router.navigate(['/login']);
        }
      );

  }

}
