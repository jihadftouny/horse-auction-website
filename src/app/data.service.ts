import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  horses = [
    { id: 1, name: "Horse1", year: 1997, gender: "Stallion", color: "Chestnut", currentBid: 8500, maxBid: 9000, isSold: false, img: "horse1.png", img2: "horse1a.png" },
    { id: 2, name: "Horse2", year: 1997, gender: "Stallion", color: "Chestnut", currentBid: 8500, maxBid: 8900, isSold: false, img: "horse1.png", img2: "horse1a.png" },
    { id: 3, name: "Horse3", year: 1997, gender: "Stallion", color: "Chestnut", currentBid: 8500, maxBid: 9000, isSold: false, img: "horse1.png", img2: "horse1a.png" },
    { id: 4, name: "Horse4", year: 1997, gender: "Stallion", color: "Chestnut", currentBid: 8500, maxBid: 9000, isSold: false, img: "horse1.png", img2: "horse1a.png" },
    { id: 5, name: "Horse5", year: 1997, gender: "Stallion", color: "Chestnut", currentBid: 8500, maxBid: 9000, isSold: false, img: "horse1.png", img2: "horse1a.png" },
    { id: 6, name: "Horse6", year: 1997, gender: "Stallion", color: "Chestnut", currentBid: 8500, maxBid: 9000, isSold: false, img: "horse1.png", img2: "horse1a.png" },
    { id: 7, name: "Horse7", year: 1997, gender: "Stallion", color: "Chestnut", currentBid: 8500, maxBid: 9000, isSold: false, img: "horse1.png", img2: "horse1a.png" },
  ];

  messages = [
  ];

  constructor() { }

}
