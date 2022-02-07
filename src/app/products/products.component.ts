import { Component, OnInit } from '@angular/core';
import { products } from './products';

import { student1 } from './student1';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  p:products={ 
    pid:1,
    pname:'Marker',
    pprice:25.7,
    pdesc:'Nice brand to use it',
    id:2,
    name:'pen',
    price:7.0,
    desc:'parker for smooth writing',
    
    id1:3,
    name1:'Pencil',
    price1:8,
    desc1:'Apsara for good handwriting',
  };

 
  
  p1:student1={
    sid:1,
    sname:'Franklin',
    srank:3,
    sschool:'KNHSS',
    id:2,
    name:'Pradeep',
    rank:1,
    school:'SNHSS',

    id1:3,
    name1:'Madan',
    rank1:2,
    school1:'CNHSS',
    id2:4,
    name2:'Raju',
    rank2:1,
    school2:'HNHSS',
  };
 


  constructor() { }

  ngOnInit(): void {
  }

  // ngOnInit(): any {
  //   return "Dinesh"
  // }


}
