import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../../../data/content/content.model';

@Component({
  selector: 'app-text-content',
  templateUrl: './text-content.component.html',
  styleUrls: ['./text-content.component.css', './responsive-text-content.component.css']
})
export class TextContentComponent implements OnInit {
  @Input() 
  contentData: Content = { title: "", paragraphs: [], photos: [] };

  constructor() { }

  ngOnInit(): void {
  }

}
