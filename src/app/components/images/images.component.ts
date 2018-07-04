import { ImageService } from './../../services/image.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  private images: any[];
  private query: string;
  private searching: boolean = false;

  constructor(private imageService: ImageService) { }

  ngOnInit() {
  }

  searchImages(){
    this.imageService.getImages(this.query).subscribe(data =>{
      this.searching = true;
      //console.log(data.json().hits);
      this.images = data.json().hits;
    },
  error => {
    console.log(error);
  }, 
  ()=> {
    this.searching = false;
  })
  }

}
