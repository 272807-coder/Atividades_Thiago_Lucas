import { Component } from '@angular/core';

interface Produto {
  id: number;
  nome: string;
  preco: number;
  qtd: number;
}

@Component({
  selector: 'app-ex9',
  standalone: false,
  templateUrl: './ex9.html',
  styleUrl: './ex9.css',
})
export class Ex9 {
  produtos: Produto[] = [
    { id: 1, nome: 'Teclado', preco: 150, qtd: 3 },
    { id: 2, nome: 'Mouse', preco: 80, qtd: 5 },
    { id: 3, nome: 'Monitor', preco: 900, qtd: 2 },
    { id: 4, nome: 'Headset', preco: 200, qtd: 0 },
    { id: 5, nome: 'Webcam', preco: 250, qtd: 8 },
  ];
}