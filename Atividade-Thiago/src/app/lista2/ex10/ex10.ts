import { Component } from '@angular/core';

interface Produto {
  id: number;
  nome: string;
  preco: number;
  qtd: number;
  promo: boolean;
}

@Component({
  selector: 'app-ex10',
  standalone: false,
  templateUrl: './ex10.html',
  styleUrl: './ex10.css',
})
export class Ex10 {

  produtos: Produto[] = [
    { id: 1, nome: 'Teclado', preco: 150, qtd: 3, promo: true},
    { id: 2, nome: 'Mouse', preco: 80, qtd: 5, promo: false},
    { id: 3, nome: 'Monitor', preco: 900, qtd: 2, promo: true},
    { id: 4, nome: 'Headset', preco: 200, qtd: 0, promo: true},
    { id: 5, nome: 'Webcam', preco: 250, qtd: 8, promo: false},
  ]

  alternarPromo(produto : Produto): void{
    produto.promo = !produto.promo;
  }
}