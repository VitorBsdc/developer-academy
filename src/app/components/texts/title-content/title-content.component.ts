import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-content',
  templateUrl: './title-content.component.html',
  styleUrls: ['./title-content.component.css', './responsive-title-content.component.css']
})
export class TitleContentComponent implements OnInit {
  //Input para pegar valor da data
  @Input() 
  title:string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
