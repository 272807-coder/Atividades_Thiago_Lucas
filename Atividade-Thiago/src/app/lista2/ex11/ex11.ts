import { Component } from '@angular/core';

interface Produto {
  id: number;
  nome: string;
  qtd: number;
}

@Component({
  selector: 'app-ex11',
  standalone: false,
  templateUrl: './ex11.html',
  styleUrl: './ex11.css',
})
export class Ex11 {
  somenteDisponiveis = false;

  produtos: Produto[] = [
    { id: 1, nome: 'Teclado', qtd: 3},
    { id: 2, nome: 'Mouse', qtd: 0},
    { id: 3, nome: 'Monitor', qtd: 2},
    { id: 4, nome: 'Headset', qtd: 0},
    { id: 5, nome: 'Webcam', qtd: 8}
  ]

  filtraProduto(): void {
    this.somenteDisponiveis = !this.somenteDisponiveis;
  }
}