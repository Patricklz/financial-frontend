import { Component } from '@angular/core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css'],
})
export class LancamentosPesquisaComponent {
  faEdit = faEdit;
  faTrash = faTrash;

  lancamentos = [
    {
      tipo: 'DESPESA',
      descricao: 'Compra de pão',
      dataVencimento: '30/06/2017',
      dataPagamento: null,
      valor: 4.55,
      pessoa: 'Padaria do José',
    },
    {
      tipo: 'RECEITA',
      descricao: 'Compra de pão',
      dataVencimento: '30/06/2017',
      dataPagamento: '31/06/2020',
      valor: 4.55,
      pessoa: 'Mercado do José',
    },
  ];
}
