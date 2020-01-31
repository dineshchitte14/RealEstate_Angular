import { Component} from '@angular/core';
import {RgservletService} from '../rgservlet.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
 
  constructor(private lg:RgservletService)
  {
    
  }

  model:any={};
  temp:any[]=[];

  add():void
  {

    this.lg.setdata(this.model).subscribe();
    console.log("ts method")
      
 
    // let c=0;

    // this.temp=JSON.parse(localStorage.getItem("reg"));

    // for(let i=0; i<this.temp.length;i++)
    // {
    //   if(this.temp[i].email==this.model.mail && this.temp[i].pass==this.model.pass)
    //   {
    //     c++;
    //     break;
    //   }
    // }
    // if(c==1)
    // {
    //   alert('success');
    // }
    // else
    // {
    //   alert('enter valid password & email');
    // }     
     
    }



}



