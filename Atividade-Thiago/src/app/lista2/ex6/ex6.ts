import { Component } from '@angular/core';

@Component({
  selector: 'app-ex6',
  standalone: false,
  templateUrl: './ex6.html',
  styleUrl: './ex6.css',
})
export class Ex6 {
  nomesIn = ['Diego', ' João', ' Fernando', ' Isabely', ' Elisa'];
  nomes = [...this.nomesIn];

  removerUlt(): void {
    this.nomes.pop();
  }

  limparList(): void {
    this.nomes = [];
  }

  restaurar(): void {
    this.nomes = [...this.nomesIn];
  }
}