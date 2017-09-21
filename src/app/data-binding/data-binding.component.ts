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
  valorSalvo
  isMouseOver: boolean = false;

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

  constructor() { }

  ngOnInit() {
  }

}
