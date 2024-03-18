import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Artista } from 'src/app/models/Artista';
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
  artista: Artista = {
    idArtista: 0,
    nome: 'Artista'
  }

  frasesArtistaSelecionado: Frase[] = []
  @Output() atualizarFrasesArtista = new EventEmitter();

  ngOnInit(): void {
    this.buscarArtistas();
  }

  buscarArtistas() {
    this.artistaService.buscarArtistas().subscribe({
      next: (artistas)=> {
        this.artistas = artistas.body
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
    this.fraseService.buscarArtistaSelecionado(this.artista.idArtista).subscribe({
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


}
