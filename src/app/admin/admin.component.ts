import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
	
  horses;
  
  constructor(public dataService: DataService) { }

  ngOnInit(): void {
	  this.horses = this.dataService.horses;
  }
  
  public setSold(id:number) {
	  for(let horse of this.horses){
		  if(horse.id==id) {
			  horse.isSold = true;
        horse.currentbid = horse.maxbid;
		  }
	  }
  }
}
