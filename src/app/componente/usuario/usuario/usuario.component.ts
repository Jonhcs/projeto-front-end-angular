import { Router } from '@angular/router';
import { Usuario } from './../../../model/usuario';
import { Observable } from 'rxjs';
import { UserService } from './../../../service/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuarios: Array<Usuario[]>
  nome: string;
  total: number;
  pagina: number;
  p: number;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.listarTodos();
  }

  listarTodos() {
    this.userService.getListUsuario().subscribe(dados => {
      console.log("Chamei o listarTodos")
      this.usuarios = dados.content;
      this.total = dados.totalElements;
    })
  }

  deletar(userId: number, i) {

    if (confirm("Deseja Deletar isso mesmo")) {
      this.userService.deleteUsuario(userId).subscribe(data => {
        this.usuarios.splice(i, 1);
      })
    }

  }

  

  pesquisarPorNome(nome: string) {
    console.log(nome)

    if (nome === '') {
      this.listarTodos();
    }
    this.userService.getUsuarioPesquisado(nome, (this.pagina - 1)).subscribe(data => {
      this.usuarios = data.content;
      this.total = data.totalElements;
    })
  }

  carregarPagina(pagina) {
    this.pagina = pagina;

    this.userService.getListUsuarioPage(pagina - 1).subscribe(dados => {
      this.usuarios = dados.content;
      this.total = dados.totalElements;
      
    })
  }

  

}
