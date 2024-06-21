import { Component, OnInit } from '@angular/core';
import { Metrika } from 'ng-yandex-metrika';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  constructor(private metrika: Metrika) {}

  ngOnInit(): void {}
  onClick() {
    this.metrika.reachGoal('a_goal_name');
  }
}
