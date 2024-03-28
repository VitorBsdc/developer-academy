import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFakeContent } from 'src/app/data/content/dataFakeContent';
import { Content } from 'src/app/data/content/content.model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  private id: string | null = "0"; //Id inicializado em 0
  //conteudo a ser exibido
  content: Content = {
    title: "",
    paragraphs: [],
    photos: []
  };
  contentItems: { type: string, data: Content }[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    //pegar ID
    this.route.paramMap.subscribe(value =>
      this.id = value.get("id")
    );

    this.setValuesToComponent(this.id);
  }

  //configurar dados do conteudo
  setValuesToComponent(id: string | null) {
    const result = dataFakeContent.find(article => article.id === id);
    //se resultado positivo então passe para as seguintes variáveis
    if (result) {
      this.content.title = result.title;
      this.content.paragraphs = result.paragraphs;
      this.content.photos = result.photos;

      // Criar matriz de itens alternados
      this.contentItems = this.createContentItems();
    }
  }

  //conteudos alternados
  createContentItems(): { type: string, data: Content }[] {
    const contentItems: { type: string, data: Content }[] = [];
    const maxItems = Math.max(this.content.paragraphs.length, this.content.photos.length);

    //condição enquanto houver paragrafos ou photos = exibir alternadamente
    for (let i = 0; i < maxItems; i++) {
      if (this.content.paragraphs[i]) {
        contentItems.push({ type: 'paragraph', data: { title: '', paragraphs: [this.content.paragraphs[i]], photos: [] } });
      }
      if (this.content.photos[i]) {
        contentItems.push({ type: 'photo', data: { title: '', paragraphs: [], photos: [this.content.photos[i]] } });
      }
    }
    return contentItems;
  }
}
