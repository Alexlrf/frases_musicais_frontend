import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  @Input() titulo: string = ''

  @Output() mensagemEmit = new EventEmitter()
  formulario!: FormGroup;

  constructor(
    private fraseService: FraseService,
    private formBuilder: FormBuilder
    ){}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      texto: ['', Validators.compose([
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(250),
      ])],
      nome_musica: ['', Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(100),
      ])],
      link_video: ['', Validators.compose([
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(60),
      ])],
      nome: ['', Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(100),
      ])],
    })
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

  selecionaAlterarFrase() {
    alert('Foi')
    this.formulario.setValue({
      texto: this.fraseSelecionada.texto,
      nome_musica: this.fraseSelecionada.nome_musica,
      link_video: this.fraseSelecionada.link_video,
      nome: this.fraseSelecionada.artista.nome
    })
    console.log(this.formulario)
    console.log(this.fraseSelecionada.texto)
    console.log(this.fraseSelecionada.nome_musica)
    console.log(this.fraseSelecionada.artista.nome)
  }

  alterarFrase() {

  }

  enviarMensagem(msg:string, tipo:string) {
    this.mensagem.msg = msg
    this.mensagem.tipo = tipo
    this.mensagemEmit.emit(this.mensagem)
  }

}
