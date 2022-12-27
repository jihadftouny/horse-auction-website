import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
	
  movies = [
    {id: 1, title: "Titanic", 	 year: 1997, fav: true, img: "titanic.jpg"},
    {id: 2, title: "The Matrix", year: 1999, fav: false, img: "the_matrix.jpg"},
    {id: 3, title: "Twilight", 	 year: 2008, fav: true, img: "twilight.jpg"},
    {id: 4, title: "Avatar", 	 year: 2009, fav: false, img: "avatar.jpg"}
  ];

  constructor() { }
  
}
