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
    { id: 1, titulo: 'App de Lanches', equipe: 'Equipe 1', nota: 4.2, status: 'concluido', entregue: true },
    { id: 2, titulo: 'Sistema de Clinica Veterinaria', equipe: 'Equipe 2', nota: null, status: 'testes', entregue: false },
    { id: 3, titulo: 'Plataforma de Academia', equipe: 'Equipe 3', nota: 7.0, status: 'concluido', entregue: true },
    { id: 4, titulo: 'Loja de Perifericos', equipe: 'Equipe 4', nota: null, status: 'desenvolvimento', entregue: false },
    { id: 5, titulo: 'Aplicativo de Encontros', equipe: 'Equipe 5', nota: null, status: 'planejamento', entregue: false },
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