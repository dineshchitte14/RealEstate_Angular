import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {


  img1="./assets/hira1.jpg";

  img2="./assets/konark1.jpg";

  img3="./assets/pride1.jpg";

city:any=[];



constructor()
 {

  this.city=[{loction:'navimumbai' }]

 


 }



}
