import { Component, OnInit } from '@angular/core';
import{RgservletService} from '../rgservlet.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private rg:RgservletService)
   {

    }

    res:any[]=[];
 
    ngOnInit() {

      this.rg.fetch().subscribe((r:any)=>this.res=r);
    } 
      model:any={}

  e:any[]=[];

  // add data 

  emp:any;

  adddata()
  {
    
    this.rg.aadmindata(this.model).subscribe( z=> { this.emp=z
      
      alert("add property");
  
  })
  console.log("add admin data");
  }

  // image

  selectedfile: File = null;
  onfileselected(file: FileList) {
    this.selectedfile = file.item(0);
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.model.img = event.target.result;    
    }
    reader.readAsDataURL(this.selectedfile);
  }



  // edit and delete data


  myvalue:any;

  model2:any={};


  editdata(i)
  {

    console.log(i);

  }

  deletedata(i)
  {

    console.log(i);

  }

//  update data

updatadata()
{
  console.log("update");


}



 

}
