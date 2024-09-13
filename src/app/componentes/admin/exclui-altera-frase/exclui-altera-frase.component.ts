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

  idFraseAlteracao: number = 0
  idArtistaAlteracao: number = 0

  @Input() frases: Frase[] = []
  @Input() titulo: string = ''

  @Output() mensagemEmit = new EventEmitter()
  formulario!: FormGroup;

  constructor(
    private fraseService: FraseService,
    private formBuilder: FormBuilder
    ){}

  ngOnInit(): void {
    this.validadorForm(this.fraseSelecionada)
  }

  validadorForm(frase: Frase) {
    this.formulario = this.formBuilder.group({
      texto: [frase.texto, Validators.compose([
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(250),
      ])],
      nome_musica: [frase.nome_musica, Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(100),
      ])],
      // link_video: [frase.link_video, Validators.compose([
      //   Validators.required,
      //   Validators.minLength(10),
      //   Validators.maxLength(60),
      // ])],
      nome: [frase.artista.nome, Validators.compose([
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

  excluirFrase() {
    this.fraseService.excluirFrase(this.fraseSelecionada.idFrase!).subscribe({
      next: (response)=> {
        this.frases.splice(this.frases.findIndex((fr)=>fr.idFrase === this.fraseSelecionada.idFrase), 1)
        window.scrollTo(0,0)
        this.enviarMensagemSucesso(response.mensagem)
      },
      error: (erro)=> {
        if(erro.status == 403) {
          this.enviarMensagem("Sem pemissão para excluir frases", 'danger')
          return
        }
        this.enviarMensagemErro(erro.message)
      }
    })
  }

  selecionaAlterarFrase(frase: Frase)  {
    this.validadorForm(frase)
    this.idArtistaAlteracao = frase.artista.idArtista!
    this.idFraseAlteracao   = frase.idFrase!
  }

  alterarFrase() {
    if(this.formulario.invalid) {
      return
    }
    this.prepararFraseAlteracao()
    this.fraseService.alterarFrase(this.fraseSelecionada).subscribe({
      next: (response)=> {
        this.enviarMensagemSucesso(response.mensagem)
      },
      error: (erro)=> {
        if(erro.status == 403) {
          this.enviarMensagem("Sem pemissão para alterar frases", 'danger')
          return
        }
        this.enviarMensagemErro(erro.message)
      }
    })

  }

  prepararFraseAlteracao() {
    this.fraseSelecionada.idFrase           = this.idFraseAlteracao
    this.fraseSelecionada.nome_musica       = this.formulario.get('nome_musica')?.value
    this.fraseSelecionada.link_video        = this.formulario.get('link_video')?.value
    this.fraseSelecionada.texto             = this.formulario.get('texto')?.value
    this.fraseSelecionada.artista.idArtista = this.idArtistaAlteracao
    this.fraseSelecionada.artista.nome      = this.formulario.get('nome')?.value
  }

  enviarMensagemEmit(msg: any) {
    this.mensagem.msg = msg.msg
    this.mensagem.tipo = msg.tipo
    this.mensagemEmit.emit(this.mensagem)
  }

  enviarMensagemSucesso(msg:string) {
    this.enviarMensagem(msg, 'success')
  }

  enviarMensagemErro(msg:string) {
    this.enviarMensagem(msg, 'danger')
  }

  enviarMensagem(msg:string, tipo:string) {
    this.mensagem.msg = msg
    this.mensagem.tipo = tipo
    this.mensagemEmit.emit(this.mensagem)
  }
}

