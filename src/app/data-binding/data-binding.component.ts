import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  //styleUrls: ['./data-binding.component.css']
  styles: [
    `
    .highlight {
      background-color: yellow;
      font-weight: bold;
  }
    `
  ]
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://google.com.br';
  urlImagem = 'http://lorempixel.com/400/200/nature/';

  cursoAngular: boolean = true;
  valorAtual: string = '';
  valorSalvo = '';
  isMouseOver: boolean = false;
  nome: string = 'abc';
  nomeDoCurso: string = 'Angular';
  valorInicial = 15;

  pessoa: any = {
    nome: 'def',
    idade: 12
  }

  getValor(){
     return 1;
  }

  getCurtirCurso(){
      return true;
  }

  botaoClicado(){
    alert('Botão clicado!');
  }

  onKeyUp(event: KeyboardEvent){
     console.log((<HTMLInputElement>event.target).value);
     this.valorAtual = (<HTMLInputElement>event.target).value;
  }

  salvarValor(valor){
     this.valorSalvo = valor;
  }

  onMouseOverOut(){
     this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento){
     console.log(evento);
     console.log(evento.novoValor);
  }

  constructor() { }

  ngOnInit() {
  }

}
