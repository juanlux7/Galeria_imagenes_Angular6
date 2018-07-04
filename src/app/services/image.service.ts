import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private PIXABAY_URL: string = environment.API_URL;
  private PIXABAY_KEY: string = environment.KEY_URL;

  private combinated_URL: string = this.PIXABAY_URL + this.PIXABAY_KEY + "&q=";

  constructor(private http: Http) { }

  getImages(query){

    return this.http.get(this.combinated_URL + query);

  }

}
