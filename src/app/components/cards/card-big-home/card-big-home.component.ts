import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-big-home',
  templateUrl: './card-big-home.component.html',
  styleUrls: ['./card-big-home.component.css', './responsive-card-big-home.component.css']
})
export class CardBigHomeComponent implements OnInit {
  @Input()
  getRoute:string = ""
  @Input()
  titleCardBig:string = ""
  @Input()
  descriptionCardBig:string = ""
  @Input()
  imgCardBig:string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
