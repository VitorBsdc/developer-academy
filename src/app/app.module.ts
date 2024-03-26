import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AlgorithmComponent } from './pages/algorithm/algorithm.component';
import { ProgramacaoComponent } from './pages/programacao/programacao.component';
import { DataStructureComponent } from './pages/data-structure/data-structure.component';
import { AboutProfessionComponent } from './pages/about-profession/about-profession.component';
import { ContentComponent } from './pages/content/content.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NavbarComponent } from './components/body/navbar/navbar.component';
import { FooterContactComponent } from './components/body/footer-contact/footer-contact.component';
import { CardBigHomeComponent } from './components/cards/card-big-home/card-big-home.component';
import { CardSmallHomeComponent } from './components/cards/card-small-home/card-small-home.component';
import { CardContentComponent } from './components/cards/card-content/card-content.component';
import { TitleHomeComponent } from './components/texts/title-home/title-home.component';
import { TitleContentComponent } from './components/texts/title-content/title-content.component';
import { TextContentComponent } from './components/texts/text-content/text-content.component';
import { ImgContentComponent } from './components/imgs/img-content/img-content.component';
import { NetworksImgContactComponent } from './components/imgs/networks-img-contact/networks-img-contact.component';
import { ClickOutsideDirectve } from './components/body/navbar/clickOutside.directive';
import { SpaceFooterComponent } from './components/body/space-footer/space-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlgorithmComponent,
    ProgramacaoComponent,
    DataStructureComponent,
    AboutProfessionComponent,
    ContentComponent,
    ContactComponent,
    NavbarComponent,
    FooterContactComponent,
    CardBigHomeComponent,
    CardSmallHomeComponent,
    CardContentComponent,
    TitleHomeComponent,
    TitleContentComponent,
    TextContentComponent,
    ImgContentComponent,
    NetworksImgContactComponent,
    ClickOutsideDirectve,
    SpaceFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
