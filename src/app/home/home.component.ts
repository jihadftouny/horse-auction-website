import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies;

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
	  this.movies = this.dataService.movies;
  }
  
  public watch() {
	  alert("Thank you for watching!");
  }
  
  public unfavorite(id:number) {
	  for(let movie of this.movies){
		  if(movie.id==id) {
			  movie.fav = false;
		  }
	  }
  }

}
