import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Users } from '../Models/Users.model';
import { DadosCadastraisService } from '../services/dados-cadastrais.service';

@Component({
  selector: 'app-dados-cadastrais',
  templateUrl: './dados-cadastrais.component.html',
  styleUrls: ['./dados-cadastrais.component.css']
})
export class DadosCadastraisComponent implements OnInit {

  user = {} as Users;
  users: Users[];

  constructor(private dadosCadastraisService: DadosCadastraisService) { }

  ngOnInit(): void {
    this.getUsers();
  }

    // Chama o serviço para obtém todos os usuários
    getUsers() {
      this.dadosCadastraisService.getUsers().subscribe((users: Users[]) => {
        this.users = users ;
        
        console.log(this.users);
      });
    }

    // defini se um usuátio será criado ou atualizado
    saveUser(form: NgForm) {
      if (this.user.id !== undefined) {
        this.dadosCadastraisService.updateUser(this.user).subscribe(() => {
          this.cleanForm(form);
        });
      } else {
        this.dadosCadastraisService.saveUser(this.user).subscribe(() => {
          this.cleanForm(form);
        });
      }
    }
     // copia o usuário para ser editado.
     editUser(user: Users) {
      this.user = { ...user };
    }

     // limpa o formulario
    cleanForm(form: NgForm) {
      this.getUsers();
      form.resetForm();
      // user = {} as Users;
    }

    // deleta um usuário
    deleteUser(user: Users) {
      this.dadosCadastraisService.deleteUser(user).subscribe(() => {
        this.getUsers();
      });
    }



}
