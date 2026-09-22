import { Component } from '@angular/core';

@Component({
  selector: 'app-ex3',
  standalone: false,
  templateUrl: './ex3.html',
  styleUrl: './ex3.css',
})
export class Ex3 {
  idade = 0;
  
  aumentar(): void {
    this.idade++;
  }

  diminuir(): void {
    if(this.idade > 0){
      this.idade--;
    }
  }
}