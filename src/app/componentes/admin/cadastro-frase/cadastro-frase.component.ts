import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  mensagem = {
    msg: '',
    tipo: ''
  }

  @Output() mensagemEmit = new EventEmitter()

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
      // link_video: ['', Validators.compose([
      //   Validators.required,
      //   Validators.minLength(10),
      //   Validators.maxLength(60),
      // ])],
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
    const frase = this.comporFrase()

    if(this.formulario.valid) {
      this.fraseSerivce.cadastrarFrase(frase).subscribe({
        next: (frase)=> {
          this.enviarMensagem(frase.mensagem, 'success')
        },
        error: (erro)=> {
          console.log(erro)
          if(erro.status == 403) {
            this.enviarMensagem("Sem pemissão para cadastrar frases", 'danger')
            return
          }
          this.enviarMensagem(erro.message, 'danger')
        }
      })

    }
  }

  comporFrase() {
    return {
      texto : this.formulario.get('texto')?.value,
      nome_musica: this.formulario.get('nome_musica')?.value,
      link_video: this.formulario.get('link_video')?.value,
      artista: {
        nome: this.formulario.get('nome')?.value
      }
    }
  }

  enviarMensagem(msg:string, tipo:string) {
    this.mensagem.msg = msg
    this.mensagem.tipo = tipo
    this.mensagemEmit.emit(this.mensagem)
  }

}
