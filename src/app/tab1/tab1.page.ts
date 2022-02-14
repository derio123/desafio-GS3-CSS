import { Component, OnInit } from '@angular/core';

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

  constructor() {}

  ngOnInit(): void {
    this.total = this.limiteDisponivel + this.limiteUtilizado + this.proximasFaturas;
  }

}
