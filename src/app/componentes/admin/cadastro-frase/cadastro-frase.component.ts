import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FraseService } from 'src/app/services/frase.service';

@Component({
  selector: 'app-cadastro-frase',
  templateUrl: './cadastro-frase.component.html',
  styleUrls: ['./cadastro-frase.component.css']
})
export class CadastroFraseComponent implements OnInit{

  formulario!: FormGroup

  @Output() mensagem = new EventEmitter()

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private fraseSerivce: FraseService
  ) {}

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

  voltarHome() {
    this.router.navigate(['/home'])
  }

  cadastrarFrase() {
    const frase = {
      texto : this.formulario.get('texto')?.value,
      nome_musica: this.formulario.get('nome_musica')?.value,
      link_video: this.formulario.get('link_video')?.value,
      artista: {
        nome: this.formulario.get('nome')?.value
      }
    }

    if(this.formulario.valid) {
      this.fraseSerivce.cadastrarFrase(frase).subscribe({
        next: (frase)=> {
          console.log(frase)
          this.mensagem.emit('Frase cadastrada com sucesso')
        },
        error: (erro)=> {
          console.log(erro)
        }
      })

    }

  }

}
