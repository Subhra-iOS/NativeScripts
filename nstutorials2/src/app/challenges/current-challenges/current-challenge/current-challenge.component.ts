import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ns-current-challenge',
  templateUrl: './current-challenge.component.html',
  styleUrls: ['./current-challenge.component.css'],
  moduleId: module.id
})
export class CurrentChallengeComponent implements OnInit {

  challengeDescription = ''
  currentChallenge = ''
  constructor() { }

  ngOnInit() {
  }

  onSetChallenge(){
    this.currentChallenge = this.challengeDescription
  }
}
