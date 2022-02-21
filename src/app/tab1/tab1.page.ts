import { Component, OnInit } from '@angular/core';
import * as CLIENTS from '../../data/mock.json';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page implements OnInit {

  saudacao = 'Bom dia';

  limiteUtilizado = 12132.4;
  proximasFaturas = 432.4;
  limiteDisponivel = 7233.4;
  total: number;

  clients = CLIENTS;
  compras = this.clients.compraRecente;
  cartao = this.clients.cartoes;
  lancamento = this.clients.lancamentos;

  constructor() {
    console.log(this.clients.compraRecente.estabelecimento);
    console.log(this.clients.cartoes);
    console.log(this.clients.lancamentos);
  }

  ngOnInit(): void {
    this.total = this.limiteDisponivel + this.limiteUtilizado + this.proximasFaturas;
  }


}
