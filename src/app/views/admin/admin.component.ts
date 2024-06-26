import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{

  mensagem = {
    msg: '',
    tipo: ''
  }

  operacao:string = ''

  constructor(
    private route: ActivatedRoute
    ){}

  ngOnInit(): void {
    this.operacao = this.route.snapshot.paramMap.get('operacao') || 'cadastro'
  }

  mostraMensagem(msg: any) {
    this.mensagem.msg = msg.msg
    this.mensagem.tipo = msg.tipo
  }

  operacaoCadastrar() {
    this.operacao = 'cadastro'
  }

  operacaoExcluirAlterar() {
    this.operacao = 'alteraExclui'
  }

}
