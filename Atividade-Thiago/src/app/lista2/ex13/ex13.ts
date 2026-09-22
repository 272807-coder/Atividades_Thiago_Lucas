import { Component } from '@angular/core';

interface Tarefa{
  id: number;
  titulo: string;
  responsavel: string;
  prioridade: 'baixa' | 'media' | 'alta';
  concluida: boolean;
}

@Component({
  selector: 'app-ex13',
  standalone: false,
  templateUrl: './ex13.html',
  styleUrl: './ex13.css',
})
export class Ex13 {

  tarefas: Tarefa[] = [
    {id: 1, titulo: 'Lavar Banheiro', responsavel: 'Maria', prioridade: 'media', concluida: false},
    {id: 2, titulo: 'Fazer o Jantar', responsavel: 'Gabriel', prioridade: 'alta', concluida: true},
    {id: 3, titulo: 'Levar o Bob no PetShop', responsavel: 'Ana', prioridade: 'baixa', concluida: false},
    {id: 4, titulo: 'Levar o Carro na oficina', responsavel: 'Fernando', prioridade: 'alta', concluida: true},
    {id: 5, titulo: 'Consertar a cama', responsavel: 'Makeyla', prioridade: 'alta', concluida: false },
    {id: 6, titulo: 'Documentar artigo', responsavel: 'Diego', prioridade: 'baixa', concluida: false },
  ];

  totalTarefas = this.tarefas.length;
  tarefasConcluidas = this.tarefas.filter(t => t.concluida).length;
  tarefasPendentes = this.tarefas.filter(t => !t.concluida).length;

  alternarConclusao(tarefa: Tarefa): void {
    tarefa.concluida = !tarefa.concluida;

    this.tarefasConcluidas = this.tarefas.filter(t => t.concluida).length;
    this.tarefasPendentes = this.tarefas.filter(t => !t.concluida).length;
  }

  
}