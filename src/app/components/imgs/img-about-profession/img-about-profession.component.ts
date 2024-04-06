import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-about-profession',
  templateUrl: './img-about-profession.component.html',
  styleUrls: ['./img-about-profession.component.css', './responsive-img-about-profession.component.css']
})
export class ImgAboutProfessionComponent implements OnInit {
  @Input()
  imgAboutProfession:string = "";
  
  constructor() { }

  ngOnInit(): void {
  }

}
