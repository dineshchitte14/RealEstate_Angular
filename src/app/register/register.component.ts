import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup , Validators} from '@angular/forms'; 
import { Router } from '@angular/router';
import{ RgservletService} from '../rgservlet.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
  
})
export class RegisterComponent implements OnInit {

  userform: FormGroup;
  
  countries = ['USA', 'Germany', 'Italy', 'France' , 'India'];
 
  constructor(private r:Router , private rg: RgservletService) { }

  ngOnInit() {
    this.userform = new FormGroup(
      {
        name: new FormControl('', [Validators.required, Validators.minLength(3)]),
        
        pass: new FormControl('', [Validators.required, Validators.minLength(8)]),
      
        mail: new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z0-9]+@[a-z]+[.][a-z]+")]),
        
        gender: new FormControl(),

        country: new FormControl(),

        mobile: new FormControl('', [Validators.required, Validators.minLength(10) , Validators.pattern("[0-9]{10}")]),
        
        address : new FormControl()
        
        })

      }

      // this.e=JSON.parse(localStorage.getItem("reg"));
    


    demo(){
      console.log(this.userform.value.name);
  
     }

    //  save local storage

    //  model:any={  };

    //  e:any []=[];

    //  temp:any[]=[];

     addregister()
     {

      // send data to  servlet using   
      
       this.rg.getdata(this.userform.value).subscribe();

      console.log("register work ts");
      
    

      // Register to  login page 


        // local storage 

      // let emp=JSON.parse(localStorage.getItem("reg"));
      
      //  if(emp==null)
      //  {
      //    emp=[];
      //  }

      //  emp.push(this.model);

      //  localStorage.setItem("reg",JSON.stringify(emp));
      //  this.e=JSON.parse(localStorage.getItem("reg"));

      //  this.model={};

       //  end

  
       this.r.navigate(['/login']);

      }

      login()
      {

        this.r.navigate(['/login'])
      }

      
       

}
