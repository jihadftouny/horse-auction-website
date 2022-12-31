import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
	
  horses;
  messages;
  
  constructor(public dataService: DataService) { }

  ngOnInit(): void {
	  this.horses = this.dataService.horses;
    this.messages = this.dataService.messages;
  }
  
  public setSold(id:number) {
	  for(let horse of this.horses){
		  if(horse.id==id) {
			  horse.isSold = true;
        horse.currentBid = horse.maxBid;
		  }
	  }
  }
}
