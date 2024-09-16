import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})
export class ModalLoginComponent implements OnInit{

  mensagemErro :string = ''
  formulario! : FormGroup
  rotaAdmin: boolean = false

  TOKEN_JWT = sessionStorage.getItem('token')
  URL_ADM = environment.URL_ADM_1

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    ){}

  ngOnInit(): void {
    this.rotaAdmin = this.activatedRoute.snapshot.url[0].path.includes('admin')

    this.formulario = this.formBuilder.group({
      login: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
      ])],
      senha: ['', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(30),
      ])]

    })
  }

  logar() {
    if(this.formulario.valid) {
      this.loginService.logar(this.formatarDadosUsuario()).subscribe({
        next: (response)=> {
          sessionStorage.setItem('token', response.token)
          this.router.navigate([this.URL_ADM], { skipLocationChange: true })
        },
        error: (erro)=> {
          if(erro.status == 403) {
            this.mensagemErro = "Dados de login incorretos"
            return
          }
        }
      })
    }
  }

  formatarDadosUsuario() {
    let login = this.formulario.get('login')?.value
    let senha = this.formulario.get('senha')?.value
    let usuario = `{"login": "${login}", "senha": "${senha}"}`
    return JSON.parse(usuario)
  }

  direcionarAdm() {
    this.router.navigate([this.URL_ADM], { skipLocationChange: true })
  }

  limparMsgErro() {
    this.mensagemErro = ''
  }

}
