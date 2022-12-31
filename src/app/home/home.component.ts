import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  horses;

  selectedHorseId: number;
  selectedHorseName: String;
  selectedHorseGender: String;
  selectedHorseYear: number;
  selectedHorseColor: String;
  selectedHorseSize: String;
  selectedHorseOwner: String;
  selectedHorseisSold: boolean;
  selectedHorseYtLink: String;
  selectedHorseImg: String;
  selectedHorseImg2: String;
  selectedHorseImg3: String;
  selectedHorseCurrentBid: number;
  selectedHorseMaxBid: number;
  selectedHorseGen1: String;
  selectedHorseGen2: String;
  selectedHorseGen3: String;
  selectedHorseBreed: String;

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    this.horses = this.dataService.horses;
  }

  public bid(id: number) {
    for (let horse of this.horses) {
      if (horse.id == id) {
        alert("You increase the bid for " + horse.name + " by a 100$!");
        horse.currentBid += 100;
        this.selectedHorseCurrentBid = horse.currentBid;
        
        if (horse.currentBid >= horse.maxBid) {
          horse.isSold = true;
          this.selectedHorseisSold = horse.isSold;
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
        this.selectedHorseImg3 = horse.img3;
        this.selectedHorseCurrentBid = horse.currentBid;
        this.selectedHorseMaxBid = horse.maxBid;
        this.selectedHorseisSold = horse.isSold;
        this.selectedHorseGen1 = horse.gen1;
        this.selectedHorseGen2 = horse.gen2;
        this.selectedHorseGen3 = horse.gen3;
        this.selectedHorseYtLink = horse.ytLink;
        this.selectedHorseOwner = horse.owner;
        this.selectedHorseSize = horse.size;
        this.selectedHorseBreed = horse.breed;
      }
    }
  }
}


