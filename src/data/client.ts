export interface Client {
	id?: number,
	name: string,
	proximaFatura: string,
	limiteDisponivel: string,
	compraRecente: {
		estabelecimento: string,
		cartao: string,
		valor: number,
		categoria: string,
	},

	cartoes: [{
		disponivel: string,
		imagem: string,
	}],

	lancamentos:[{
		data: string,
		estabelecimento: string,
		valor: number,
		parcelaAtual: number,
		totalParcelas: number,
		cartao: string,
		pontos: number, 
		categoria: string,
	}, {
		data: string,
		estabelecimento: string,
		valor: number,
		cartao: string,
		pontos: number, 
		categoria: string,
	}, {
		data: string,
		estabelecimento: string,
		valor: number,
		cartao: string,
		pontos: number, 
		categoria: string,
	}]
}