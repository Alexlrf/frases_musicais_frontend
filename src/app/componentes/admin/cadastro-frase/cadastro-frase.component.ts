import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-frase',
  templateUrl: './cadastro-frase.component.html',
  styleUrls: ['./cadastro-frase.component.css']
})
export class CadastroFraseComponent implements OnInit{

  formulario!: FormGroup

  constructor(
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      texto: ['', Validators.compose([
        Validators.required,
        Validators.min(10),
        Validators.max(250),
      ])],
      nome_musica: ['', Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(100),
      ])],
      link_video: ['', Validators.compose([
        Validators.required,
      ])],
      nome: ['', Validators.compose([
        Validators.required,
        Validators.min(2),
        Validators.max(100),
      ])],
    })

  }

  voltarHome() {
    this.router.navigate(['/home'])
  }

  cadastrarFrase() {
    if(this.formulario.valid) {

    }

  }

}
