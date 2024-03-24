import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menu-lateral-adm',
  templateUrl: './menu-lateral-adm.component.html',
  styleUrls: ['./menu-lateral-adm.component.css']
})
export class MenuLateralAdmComponent implements OnInit{

  rotaAdmin: boolean = false

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
    ){}

  ngOnInit(): void {
    this.rotaAdmin = this.activatedRoute.snapshot.url[0].path.includes('admin')
  }

  cadastrarFrase() {
    this.router.navigate(["/admin/cadastro"])
  }

  alterarExcluirFrase() {
    this.router.navigate(["/admin/alteraExclui"])
  }

}
