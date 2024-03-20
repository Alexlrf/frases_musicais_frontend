import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Frase } from 'src/app/models/Frase';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  mensagemErro: string = ''

  constructor() {}

  ngOnInit(): void {
  }

  frasesArtistaSelecionado: Frase[] = [];

  atualizarFrases(frases: Frase[]) {
    this.frasesArtistaSelecionado = frases
  }

  enviarMensagemErro(mensagemErro: string) {
    this.mensagemErro = mensagemErro
  }

}

