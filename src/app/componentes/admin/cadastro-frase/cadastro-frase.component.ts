import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-frase',
  templateUrl: './cadastro-frase.component.html',
  styleUrls: ['./cadastro-frase.component.css']
})
export class CadastroFraseComponent implements OnInit{

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  voltarHome() {
    this.router.navigate(['/home'])
  }

}
