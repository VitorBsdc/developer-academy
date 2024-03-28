import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AlgorithmComponent } from './pages/algorithm/algorithm.component';
import { ProgramacaoComponent } from './pages/programacao/programacao.component';
import { DataStructureComponent } from './pages/data-structure/data-structure.component';
import { AboutProfessionComponent } from './pages/about-profession/about-profession.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ContentComponent } from './pages/content/content.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'algoritmo',
    component:AlgorithmComponent
  },
  {
    path:'programacao',
    component:ProgramacaoComponent
  },
  {
    path:'estrutura-dados',
    component:DataStructureComponent
  },
  {
    path:'sobre-a-profissao',
    component:AboutProfessionComponent
  },
  {
    path:'contato',
    component:ContactComponent
  },
  {
    path:'conteudo/:id',
    component:ContentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
