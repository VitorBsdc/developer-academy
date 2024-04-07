import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-content',
  templateUrl: './card-content.component.html',
  styleUrls: ['./card-content.component.css', './responsive-card-content.component.css']
})
export class CardContentComponent implements OnInit {
  //Obter rota + id + titulo dinâmico
  @Input()
  getRoute:string = ""
  @Input()
  Id:string = "0"
  @Input()
  titleCardcontent:string = ""
  @Input()
  imgCardContent:string = ""

  constructor() { }

  ngOnInit(): void {
  }
}
