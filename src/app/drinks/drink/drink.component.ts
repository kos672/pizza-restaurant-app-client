import {Component, Input, OnInit} from '@angular/core';
import {Drink} from "../drink.model";

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.css']
})
export class DrinkComponent implements OnInit {

  @Input() drink: Drink;

  constructor() { }

  ngOnInit() {
  }

}
