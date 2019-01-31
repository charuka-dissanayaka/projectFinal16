import { IntimateService } from './../services/intimate.service';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Http } from '@angular/http';


@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})
export class FrontComponent implements OnInit {


  // matrix = new Array(10);
  // count = 0;
  // data = {
  //   matrix : null
  // }

  constructor() { }
    // private http: Http,
  //   private Intimates: IntimateService,
  //   private router:Router
  //   ) {
  //     this.count = 0;
  //   for(var i=0; i<10; i++){
  //     this.matrix[i] = new Array(10);
  //   }
  //   for(var i=0; i<10; i++){
  //     for(var j=0; j<10; j++){
  //       this.matrix[i][j] = false;
  //     }
  //   }

  // }   
  // addOnClick(Event){
  //   console.log("add on click")
  //   console.log(Math.floor((Event.x)/32));
  //   console.log(Math.floor((Event.y)/39));
  //   var x = Math.floor((Event.x)/32);
  //   var y = Math.floor((Event.y)/39);
  //    if(x>=10)
  //      x = 9;
  //    if(y>=10)
  //      y = 9;
  //    this.count++;
  //    this.matrix[x][y] = true;
  //   // console.log(this.matrix);
  //   this.Intimates.AddMatrix(this.matrix)
  //     .subscribe(responce => {
  //       console.log(responce);
  //     })
  // }


  // submit(){
  //   this.data.matrix = JSON.stringify(this.matrix);
  //   console.log(this.matrix);
  //   this.http.post('http://localhost:3000/intimate/', this.matrix);
  //   // console.log(this.data);
  // }


  ngOnInit() {
  }

}
