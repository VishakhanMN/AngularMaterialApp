import { Component, OnInit } from '@angular/core';
import { SPORTS } from '../model/data';
import { Sport } from '../model/sport';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public cricketTeam: Sport[];
  public footballTeam: Sport[];
  public team: any;

  constructor() { }

  ngOnInit(): void {
    this.team = Object.values(SPORTS);
    this.initialize();
  }

  private initialize() {
    this.cricketTeam = this.team.filter(squad =>
      squad.category == 'Cricket'
    );
    console.log(this.cricketTeam)
    this.footballTeam = this.team.filter(squad =>
      squad.category == 'Football'
    );

  }



}
