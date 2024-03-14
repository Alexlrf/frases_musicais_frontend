import { Component, Input, OnInit } from '@angular/core';
import { Frase } from 'src/app/models/Frase';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor() {}

  ngOnInit(): void {
  }

  frasesArtistaSelecionado: Frase[] = [];

  atualizarFrases(frases: Frase[]) {
    this.frasesArtistaSelecionado = frases
  }

}
