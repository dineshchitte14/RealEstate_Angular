import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  img1="./assets/home4.jpg";

  img2="./assets/home2.jpg";

  img3="./assets/home3.jpg";

  constructor() { }

  ngOnInit() {
  }


}
