import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RgservletService {

  constructor(private temp:HttpClient) {} 

    public logout()
    {

      
    }



  // register

    public getdata(num: String)
    {
      return this.temp.post("http://localhost:8080/realestateserv/register",num);
    }
    fetch()
    {
      return this.temp.get("http://localhost:8080/realestateserv/fetchData");
    }

    // login
    public setdata(num2)
    {

      return this.temp.post("http://localhost:8080/realestateserv/login",num2);
    }


    // contactus
    public cont(num3)
    {
      return this.temp.post("http://localhost:8080/realestateserv/contact",num3);
    }


    // Admin servlet path

    public aadmindata(num4)
    {
      return this.temp.post("http://localhost:8080/realestateserv/admin",num4);
    }
}
