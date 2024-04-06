import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-about-profession',
  templateUrl: './text-about-profession.component.html',
  styleUrls: ['./text-about-profession.component.css', './responsive-text-about-profession.component.css']
})
export class TextAboutProfessionComponent implements OnInit {
  @Input()
  textAboutProfession:string = "";
  
  constructor() { }

  ngOnInit(): void {
  }

}
