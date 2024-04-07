import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-small-home',
  templateUrl: './card-small-home.component.html',
  styleUrls: ['./card-small-home.component.css', './responsive-card-small-home.component.css']
})
export class CardSmallHomeComponent implements OnInit {
  @Input()
  getRoute:string = ""
  @Input()
  titleCardSmall:string = ""
  @Input()
  imgCardSmall:string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
