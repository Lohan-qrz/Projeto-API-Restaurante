import {
  sequelize,
  Pagamento,
  Pedido,
  PedidoItem,
  Produto,
  Usuario,
} from '../models/index.js';

export const relatorioService = {
  async vendas() {
    const totalPedidos = await Pedido.count();
    const totalVendas = await Pedido.sum('total');

    return {
      total_pedidos: totalPedidos,
      valor_total: Number(totalVendas || 0),
    };
  },

  async faturamento() {
    const totalFaturado = await Pagamento.sum('valor', {
      where: { status: 'PAGO' },
    });

    return {
      faturamento_total: Number(totalFaturado || 0),
    };
  },

  async produtosMaisVendidos() {
    const itens = await PedidoItem.findAll({
      attributes: [
        'produto_id',
        [sequelize.fn('SUM', sequelize.col('quantidade')), 'quantidade'],
      ],
      group: ['produto_id', 'produto.id'],
      include: [{ model: Produto, as: 'produto', attributes: ['nome'] }],
    });

    return itens.map((item) => ({
      produto: item.produto?.nome || 'Desconhecido',
      quantidade: Number(item.get('quantidade') || 0),
    }));
  },

  async vendasPorFuncionario() {
    const pedidos = await Pedido.findAll({
      attributes: [
        'usuario_id',
        [sequelize.fn('SUM', sequelize.col('total')), 'total_vendas'],
      ],
      group: ['usuario_id', 'usuario.id'],
      include: [{ model: Usuario, as: 'usuario', attributes: ['nome'] }],
    });

    return pedidos.map((pedido) => ({
      funcionario: pedido.usuario?.nome || 'Desconhecido',
      total_vendas: Number(pedido.get('total_vendas') || 0),
    }));
  },
};
