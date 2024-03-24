import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Frase } from 'src/app/models/Frase';
import { FraseService } from 'src/app/services/frase.service';


@Component({
  selector: 'app-exclui-altera-frase',
  templateUrl: './exclui-altera-frase.component.html',
  styleUrls: ['./exclui-altera-frase.component.css']
})
export class ExcluiAlteraFraseComponent implements OnInit{

  mensagem = {
    msg: '',
    tipo: ''
  }

  fraseSelecionada: Frase = {
    idFrase: 0,
    texto : '',
    nome_musica: '',
    link_video: '',
    artista: {
      idArtista:0,
      nome: ''
    }
  }

  @Input() frases: Frase[] = []

  @Output() mensagemEmit = new EventEmitter()

  constructor(private fraseService: FraseService){}

  ngOnInit(): void {
  }

  atualizarFrases(frases: Frase[]){
    this.frases = frases
  }

  selecionarFrase(frase: Frase) {
    this.fraseSelecionada = frase
  }

  enviarMensagemEmit(msg: any) {
    this.mensagem.msg = msg.msg
    this.mensagem.tipo = msg.tipo
    this.mensagemEmit.emit(this.mensagem)
  }

  excluirFrase() {
    this.fraseService.excluirFrase(this.fraseSelecionada.idFrase!).subscribe({
      next: (response)=> {
        this.frases.splice(this.frases.findIndex((fr)=>fr.idFrase === this.fraseSelecionada.idFrase), 1)
        window.scrollTo(0,0)
        this.enviarMensagem(response.mensagem, 'success')
      },
      error: (erro)=> {
        console.log(erro)
        this.enviarMensagem(erro.message, 'danger')
      }
    })
  }

  enviarMensagem(msg:string, tipo:string) {
    this.mensagem.msg = msg
    this.mensagem.tipo = tipo
    this.mensagemEmit.emit(this.mensagem)
  }

}
