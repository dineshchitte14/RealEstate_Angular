import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {RgservletService} from '../rgservlet.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  
  // model:any={};

  // e:any[]=[];


  constructor(private c:RgservletService) { }

  ngOnInit() {

    // this.e=JSON.parse(localStorage.getItem("contact"));
  }

  model:any={};

  add()
  {
   this.c.cont(this.model).subscribe();
   console.log("contact ts");


    

// local storage
  
  //  let emp=JSON.parse(localStorage.getItem("contact"));

  //  let b=0;
   
  //  if(emp==null)
  //  {
  //    emp=[];
  //    b++;
  //  }
  //  emp.push(this.model);
  //   localStorage.setItem("contact",JSON.stringify(emp));
  //   this.e=JSON.parse(localStorage.getItem("contact"));

  //   this.model={};

  } 
}
