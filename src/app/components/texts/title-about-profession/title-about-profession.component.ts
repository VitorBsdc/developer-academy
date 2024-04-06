import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-about-profession',
  templateUrl: './title-about-profession.component.html',
  styleUrls: ['./title-about-profession.component.css', './responsive-title-about-profession.component.css']
})
export class TitleAboutProfessionComponent implements OnInit {
  @Input()
  titleAboutProfession:string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
