import { Artista } from './../../models/Artista';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Frase } from 'src/app/models/Frase';
import { ArtistaService } from 'src/app/services/artista.service';
import { FraseService } from 'src/app/services/frase.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit{

  constructor(
    private artistaService: ArtistaService,
    private fraseService: FraseService
  ){}

  artistas: Artista[] = []
  artista: Artista = {idArtista: 0, nome: 'TODOS ARTISTAS'}
  fragmentoFrase: string = ''

  mensagem = {
    msg: '',
    tipo: ''
  }
  @Output() mensagemEmit = new EventEmitter();
  frasesArtistaSelecionado: Frase[] = []
  @Output() atualizarFrasesArtista = new EventEmitter();

  ngOnInit(): void {
    this.buscarArtistas();
  }

  buscarArtistas() {
    this.artistaService.buscarArtistas().subscribe({
      next: (artistas)=> {
        this.artistas = artistas.body
        this.artistas.unshift(this.artista)
      },
      error: (erro)=> {
        console.log(erro)
      }
    })
  }

  buscarFrases() {
    if(!this.artista.idArtista) {
      this.buscarFrasesTodosArtistas()
    } else {
      this.buscarArtistaSelecionado()
    }
  }

  buscarFrasesTodosArtistas() {
    this.fraseService.buscarFrases().subscribe({
      next: (frases)=> {
        this.frasesArtistaSelecionado = frases.body
        this.atualizarFrasesArtista.emit(this.frasesArtistaSelecionado)
      },
      error: (erro)=> {
        console.log(erro)
      }
    })
  }

  buscarArtistaSelecionado() {
    this.fraseService.buscarArtistaSelecionado(this.artista.idArtista!).subscribe({
      next:(frases)=> {
        console.log(frases.body)
        this.frasesArtistaSelecionado = frases.body
        this.atualizarFrasesArtista.emit(this.frasesArtistaSelecionado)
      },
      error:(erro)=> {
        console.log(erro)
      }
    })
  }

  buscarFrasePorFragmento() {
    if(!this.fragmentoFrase || this.fragmentoFrase.length < 2) {
      this.enviarMensagem('Ops, digite um texto com pelo menos 2 caracteres para realizar a busca!', 'danger')
      return
    }
    this.fraseService.buscarFrasePorFragmento(this.fragmentoFrase).subscribe({
      next:(frases)=> {
        this.frasesArtistaSelecionado = frases.body
        if(this.frasesArtistaSelecionado.length == 0) {
          this.enviarMensagem(`Ops, não foram encontradas frases com esse termo: ${this.fragmentoFrase}`, 'danger')
        }
        this.atualizarFrasesArtista.emit(this.frasesArtistaSelecionado)
      },
      error:(erro)=> {
        console.log(erro)
      }
    })

  }

  enviarMensagem(msg:string, tipo:string) {
    this.mensagem.msg = msg
    this.mensagem.tipo = tipo
    this.mensagemEmit.emit(this.mensagem)
  }


}
