import { Component, OnInit } from '@angular/core';
import {cars1}  from  './cars1';
import {cars2}  from  './cars2';
@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

zz:cars1=
{
cid:101,
cname:'Renault',
cno:'TN-38-9087',
cmodel:2012

}

yy:cars2=
{
  NameofCar:'NISSAN',
  carprice:800000,
  carmileage:'12-Km/ph',
  carratings:4,
  carsfeedback:'Best In class in today Market',
  maxcarspeed:180
}
  constructor() { }

  ngOnInit(): void {
  }

}
