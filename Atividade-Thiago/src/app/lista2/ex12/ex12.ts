import { Component } from '@angular/core';

interface Produto {
  id: number;
  nome: string;
  quantidade: number;
}

@Component({
  selector: 'app-ex12',
  standalone: false,
  templateUrl: './ex12.html',
  styleUrl: './ex12.css',
})
export class Ex12 {
  produtos: Produto[] = [
    { id: 1, nome: 'Teclado', quantidade: 3 },
    { id: 2, nome: 'Mouse', quantidade: 5 },
  ];

  nome = '';
  quantidade = 0;
  mensagemErro = '';
  proximoId = 3;

  cadastrar(): void {
    if (this.nome === '') {
      this.mensagemErro = 'Informe o nome do produto.';
      return;
    }
    if (this.quantidade < 0) {
      this.mensagemErro = 'Quantidade não pode ser negativa.';
      return;
    }

    this.produtos.push({ id: this.proximoId, nome: this.nome, quantidade: this.quantidade });
    this.proximoId++;

    this.nome = '';
    this.quantidade = 0;
    this.mensagemErro = '';
  }

  excluir(id: number): void {
    this.produtos = this.produtos.filter(p => p.id !== id);
  }
}