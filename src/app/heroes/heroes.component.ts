import { Component, OnInit } from '@angular/core';
import { heroes } from './heroes';
import { test } from '../mock-heroes';
 
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes = 'Thor';
  superheroes = test;

  hero:heroes =
  {
    id: '12345',
    name: 'Hulk'
  }

  hero1:heroes = 
  {
    id: '23456',
    name: 'Captain'
  }

  obj3:heroes = 
  {
    id:'6786',
    name:'Dinesh'
  }

  constructor() { }

  ngOnInit(): void {
    // this.superheroes = test;
  }

}
