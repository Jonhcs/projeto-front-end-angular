import { ProfissaoService } from './../../../service/profissao.service';
import { Observable } from 'rxjs';
import { Profissao } from '../../../model/Profissao';
import { TelefoneService } from './../../../service/telefone.service';
import { Usuario } from './../../../model/usuario';
import { UserService } from './../../../service/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Telefone } from 'src/app/model/telefone';


@Component({
  selector: 'app-root',
  templateUrl: './usuarioadd.component.html',
  styleUrls: ['./usuarioadd.component.css']
})
export class UsuarioaddComponent implements OnInit {

  usuario = new Usuario();
  telefone = new Telefone();
  profissoes: Array<Profissao>
  data: Date;

  constructor(private actived: ActivatedRoute,
    private userService: UserService,
    private telefoneService: TelefoneService,
    private router: Router,
    private profissaoService: ProfissaoService) {

  }

  ngOnInit(): void {
    this.listarProfissoes()
    let id = this.actived.snapshot.paramMap.get('id');
    if (id != null) {
      this.userService.getUsuario(id).subscribe(data => {
        this.usuario = data;
      })
    } 
  }

  listarProfissoes() {
    
    this.profissaoService.getTodos().subscribe(data => {
      console.log(data)
      this.profissoes = data;
    })
  }
  salvar() {

    if (this.usuario.id != null && this.usuario.id.toString().trim() != null) {

      var date = new Date(this.data)
      let v = ( ( date.getDate() < 10 ? "0"+date.getDate() : date.getDate()) + "/" + this.convert((date.getMonth() + 1)) + "/" + date.getFullYear());
      this.usuario.dataNascimento = v;
      console.log(this.usuario.dataNascimento)
  
      this.userService.atualizarUsuario(this.usuario).subscribe(data => {
        console.log("atualizando cadastro")
        this.router.navigate(['usuarios']);
      })

    } else {
      var date = new Date(this.data)
      let v = ( ( date.getDate() < 10 ? "0"+date.getDate() : date.getDate()) + "/" + this.convert((date.getMonth() + 1)) + "/" + date.getFullYear());
      this.usuario.dataNascimento = v;
      console.log(this.usuario.dataNascimento)
  
      this.userService.salvarUsuario(this.usuario).subscribe(data => {
        console.log("novo cadastro")
        this.router.navigate(['usuarios']);
      })
    }
  }

  convert(str) {
    if (str >= 1 && str <= 9) {
      return "0" + str;
    } 
    return str;
  }

  onValueChange(value: Date): void {
    
    this.data = value;

  }


  novo() {
    this.usuario = new Usuario;
    this.telefone = new Telefone();
  }

  deletarTelefone(id, i) {

    if (id == null) {
      this.usuario.telefones.splice(i, 1);
      return;
    }

    if (id != null && confirm("Deseja Realmente Remover Esse Telefone? ")) {

      this.usuario.telefones.splice(i, 1);
      if (id != null) {
        this.telefoneService.deleteTelefone(id).subscribe(data => {
          //Armazenar uma mensagem de sucesso aqui
        })
      }
    }

  }


  addFone() {
    if (this.usuario.telefones === undefined) {
      this.usuario.telefones = new Array<Telefone>();
    }

    this.usuario.telefones.push(this.telefone);
    this.telefone = new Telefone();
  }



}
