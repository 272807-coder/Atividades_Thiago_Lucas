import { Component } from '@angular/core';

@Component({
  selector: 'app-ex4',
  standalone: false,
  templateUrl: './ex4.html',
  styleUrl: './ex4.css',
})
export class Ex4 {
  nomeProduto = 'Teclado';
  estoque = 5;

  adicionar(): void {
    this.estoque++;
  }

  remover(): void {
    if(this.estoque > 0){
      this.estoque--;
    }
  }

}