import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-lateral-adm',
  templateUrl: './menu-lateral-adm.component.html',
  styleUrls: ['./menu-lateral-adm.component.css']
})
export class MenuLateralAdmComponent implements OnInit{

  constructor(
    private router: Router
    ){}

  ngOnInit(): void {
  }

  cadastrarFrase() {
    this.router.navigate(["/admin/cadastro"])
  }

  alterarExcluirFrase() {
    this.router.navigate(["/admin/alteraExclui"])
  }

}
