import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})
export class ModalLoginComponent implements OnInit{

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
