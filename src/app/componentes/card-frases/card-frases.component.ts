import { Component, OnInit } from '@angular/core';
import { Frase } from 'src/app/models/Frase';
import { FraseService } from 'src/app/services/frase.service';

@Component({
  selector: 'app-card-frases',
  templateUrl: './card-frases.component.html',
  styleUrls: ['./card-frases.component.css']
})
export class CardFrasesComponent implements OnInit{

  frases: Frase[] = []

  constructor(private fraseService: FraseService){}

  ngOnInit(): void {
    this.buscarFrases();
  }

  buscarFrases() {
    this.fraseService.buscarFrases().subscribe({
      next: (frases)=> {
        this.frases = frases.body
      },
      error: (erro)=> {
        console.log(erro)

      }
    })
  }
}


