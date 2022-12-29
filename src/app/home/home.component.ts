import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  horses;

  selectedHorseId: number;
  selectedHorseName: String;
  selectedHorseYear: number;
  selectedHorseGender: String;
  selectedHorseColor: String;
  selectedHorseImg: String;
  selectedHorseImg2: String;
  selectedHorseCurrentBid: number;
  selectedHorseMaxBid: number;
  selectedHorseisSold: boolean;

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    this.horses = this.dataService.horses;
  }

  public bid(id: number) {
    for (let horse of this.horses) {
      if (horse.id == id) {
        alert("You increase the bid for " + horse.name + " by a 100$!");
        horse.currentBid += 100;
        if (horse.currentBid >= horse.maxBid) {
          horse.isSold = true;
        }
      }
    }
  }

  public openInfo(id: number) {
    for (let horse of this.horses) {
      if (horse.id == id) {
        horse.fav = false;
      }
    }
  }

  selectHorse(id: number) {
    for (let horse of this.horses) {
      if (horse.id == id) {
        this.selectedHorseId = horse.id;
        this.selectedHorseName = horse.name;
        this.selectedHorseYear = horse.year;
        this.selectedHorseGender = horse.gender;
        this.selectedHorseColor = horse.color;
        this.selectedHorseImg = horse.img;
        this.selectedHorseImg2 = horse.img2;
        this.selectedHorseCurrentBid = horse.currentBid;
        this.selectedHorseMaxBid = horse.maxBid;
        this.selectedHorseisSold = horse.isSold;
      }
    }
  }
}


