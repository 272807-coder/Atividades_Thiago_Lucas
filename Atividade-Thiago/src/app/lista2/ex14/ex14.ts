import { Component } from '@angular/core';

@Component({
  selector: 'app-ex14',
  standalone: false,
  templateUrl: './ex14.html',
  styleUrl: './ex14.css',
})
export class Ex14 {
  mensagemVisivel = true;
  usuarioLogado = true;
  idade = 0;

  alternarMensagem(): void {
    this.mensagemVisivel = !this.mensagemVisivel;
  }

  alternarLogin(): void {
    this.usuarioLogado = !this.usuarioLogado;
  }

  aumentarIdade(): void {
    this.idade++;
  }

  diminuirIdade(): void {
    if (this.idade > 0) {
      this.idade--;
    }
  }
}