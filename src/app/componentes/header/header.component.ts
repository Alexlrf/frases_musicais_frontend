import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Frase } from 'src/app/models/Frase';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit{

  mensagem = {
    msg: '',
    tipo: ''
  }

  @Output() mensagemEmit = new EventEmitter();
  frasesArtistaSelecionado: Frase[] = []
  @Output() atualizarFrasesArtista = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
  }

  atualizarFrases(frases: Frase[]) {
    this.frasesArtistaSelecionado = frases
    this.atualizarFrasesArtista.emit(this.frasesArtistaSelecionado)
  }

  enviarMensagemEmit(msg: any) {
    this.mensagem.msg = msg.msg
    this.mensagem.tipo = msg.tipo
    this.mensagemEmit.emit(this.mensagem)
  }

}
