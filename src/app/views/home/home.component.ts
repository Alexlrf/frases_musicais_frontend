import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Frase } from 'src/app/models/Frase';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  mensagem = {
    msg: '',
    tipo: ''
  }

  constructor() {}

  ngOnInit(): void {
  }

  frasesArtistaSelecionado: Frase[] = [];

  atualizarFrases(frases: Frase[]) {
    this.frasesArtistaSelecionado = frases
  }

  enviarMensagemErro(msg: any) {
    this.mensagem.msg = msg.msg
    this.mensagem.tipo = msg.tipo
  }


}

