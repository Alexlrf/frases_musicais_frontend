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
  frasesAtualizadas: any

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

  excluirFrase() {
    this.fraseService.excluirFrase(this.fraseSelecionada.idFrase!).subscribe({
      next: (response)=> {
        this.frases.splice(this.frases.findIndex((fr)=>fr.idFrase === this.fraseSelecionada.idFrase), 1)
        this.mensagemEmit.emit(response.mensagem)
      },
      error: (erro)=> {
        console.log(erro)
      }
    })
  }

}
