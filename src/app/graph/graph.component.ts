import { Component, OnInit } from '@angular/core';
import { test1 } from '../../assets/javascript/main'; 
@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  constructor() { 
    console.log(test1());
  }

  ngOnInit() {
  }

}

 
 