import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  titulo = "Tela de Produtos";

  produto = {
    descricao: "Playstation",
    preco: 4500,
    quantidade:1,
    imagem: "https://s2.glbimg.com/D8n1cOH9oCm2XHhy81_B_zOgTDo=/0x0:695x442/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/F/t/9e8syyQoyrADp4vVrJyw/2016-11-10-29536240375-1eeb76fd86-z.jpg"
  };

  constructor() { }

  ngOnInit(): void {
    console.log("teste1");
  }

  precoComDesconto(preco: number){
    return preco*0.90
  }

  obterPrecoDesconto(){
    this.produto.preco = this.precoComDesconto(this.produto.preco)  }

  comprar(){
    alert("Produto Comprado com Sucesso!")
  }

  clicouTag(){
    alert("Você clicou em uma tag")
  }

  passouMouse(){
    alert("Você passou o mouse em cima de uma tag")
  }

  pressionouTecla(inputEvent: any){
    console.log(inputEvent.target.value)
  }

}
