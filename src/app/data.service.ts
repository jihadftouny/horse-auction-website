import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  horses = [
    { id: 1, name: "FOUNTLEROY", gender: "Stallion", year: "10.05.2020", breed:" Niederländ. Warmblut ", color: "Black", size: " 171 cm (16.3 ¼ h.h.) ", owner: " D.J. Menkveld ", isSold: false, img: "horse1.png", currentBid: 8500, maxBid: 9000 },
    { id: 2, name: "FREIXENET", gender: "Stallion", year: "24.04.2020", breed:" German Sporthorse ",color: "Chestnut", size: " 169 cm (16.2 ¼ h.h.) ", owner: " Rudolf Joos", isSold: false, img: "horse2.png", currentBid: 8500, maxBid: 9000 },
    { id: 3, name: "JACK SPARROW", gender: "Stallion", year: "13.05.2020", breed:" German Sporthorse ",color: "Black", size: " 170 cm (16.2¼ h.h.) ", owner: " Schulze-Averdiek Zucht ", isSold: false, img: "horse3.png", currentBid: 8500, maxBid: 9000 },
    { id: 4, name: "BLACK JACK", gender: "Stallion", year: "01.06.2020", breed:" German Sporthorse ",color: "Black", size: " 168 cm (16.2 ¼ h.h.) ", owner: " Georg Albert ", isSold: false, img: "horse4.png", currentBid: 8500, maxBid: 9000},
    { id: 5, name: "SO BEAUTIFUL", gender: "Stallion", year: "07.03.2020", breed:" Hannoveraner ",color: "Black", size: " 166 cm (16.1 ¼ h.h.) ", owner: " Carsten Haack ", isSold: false, img: "horse5.png", currentBid: 8500, maxBid: 9000 },
    { id: 6, name: "BELMONDO", gender: "Stallion", year: "22.05.2020",breed:" German Sporthorse ", color: "Dark bay", size: " 165 cm (16.1 ¼ h.h.) ", owner: " Doris Schmidt ", isSold: false, img: "horse6.png", currentBid: 8500, maxBid: 9000 },
  ];

  messages = [
  ];
 }
