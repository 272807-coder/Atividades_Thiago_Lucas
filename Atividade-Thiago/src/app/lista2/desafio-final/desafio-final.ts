import { Component } from '@angular/core';

interface Projeto {
  id: number;
  titulo: string;
  equipe: string;
  nota: number | null;
  status: 'planejamento' | 'desenvolvimento' | 'testes' | 'concluido';
  entregue: boolean;
}

@Component({
  selector: 'app-desafio-final',
  standalone: false,
  templateUrl: './desafio-final.html',
  styleUrl: './desafio-final.css',
})
export class DesafioFinal {
  projetos: Projeto[] = [
    { id: 1, titulo: 'Sistema de Estoque', equipe: 'Equipe A', nota: null, status: 'desenvolvimento', entregue: false },
    { id: 2, titulo: 'App de Tarefas', equipe: 'Equipe B', nota: 5.2, status: 'testes', entregue: false },
    { id: 3, titulo: 'Adote+', equipe: 'Equipe C', nota: 10.00, status: 'concluido', entregue: true },
    { id: 4, titulo: 'Loja Virtual', equipe: 'Equipe D', nota: 9.0, status: 'concluido', entregue: true },
    { id: 5, titulo: 'Chat Corporativo', equipe: 'Equipe E', nota: null, status: 'planejamento', entregue: false },
  ];

  mostrarConcluidos = true;

  totalProjetos = this.projetos.length;
  totalConcluidos = this.projetos.filter(p => p.status === 'concluido').length;

  alternarExibicaoConcluidos(): void {
    this.mostrarConcluidos = !this.mostrarConcluidos;
  }

  alterarStatus(projeto: Projeto, novoStatus: Projeto['status']): void {
    projeto.status = novoStatus;
    this.totalConcluidos = this.projetos.filter(p => p.status === 'concluido').length;
  }
}