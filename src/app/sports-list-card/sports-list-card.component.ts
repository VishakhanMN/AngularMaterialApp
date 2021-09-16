import { Component, Input, OnInit } from '@angular/core';
import { Sport } from '../model/sport';

@Component({
  selector: 'sports-list-card',
  templateUrl: './sports-list-card.component.html',
  styleUrls: ['./sports-list-card.component.scss']
})
export class SportsListCardComponent implements OnInit {

  @Input() sports: Sport[];

  constructor() { }

  ngOnInit(): void {
  }

}
