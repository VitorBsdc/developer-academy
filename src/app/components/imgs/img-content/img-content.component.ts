import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../../../data/content/content.model';

@Component({
  selector: 'app-img-content',
  templateUrl: './img-content.component.html',
  styleUrls: ['./img-content.component.css', './responsive-img-content.component.css']
})
export class ImgContentComponent implements OnInit {
  @Input() 
  contentData: Content = { title: "", paragraphs: [], photos: [] };

  constructor() { }

  ngOnInit(): void {
  }

}
