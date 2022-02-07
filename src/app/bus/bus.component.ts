import { Component, OnInit } from '@angular/core';
import { bus } from './bus';

@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.css']
})
export class BusComponent implements OnInit {



  bu:bus={
    id:'TN78Cd4567',
    no:890765456,
    From:'Chennai',
    To:'Coimbatore'

  }


  constructor() { }

  ngOnInit(): void {
  }

}
