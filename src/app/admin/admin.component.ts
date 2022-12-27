import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
	
  movies;
  
  constructor(public dataService: DataService) { }

  ngOnInit(): void {
	  this.movies = this.dataService.movies;
  }
  
  public favorite(id:number) {
	  for(let movie of this.movies){
		  if(movie.id==id) {
			  movie.fav = true;
		  }
	  }
  }
}
