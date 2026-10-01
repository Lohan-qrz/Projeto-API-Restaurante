import { PedidoItem, Produto } from '../models/index.js';
import { BaseRepository } from './BaseRepository.js';

class PedidoItemRepository extends BaseRepository {
  findByPedido(pedidoId) {
    return this.model.findAll({
      where: { pedido_id: pedidoId },
      include: [{ model: Produto, as: 'produto' }],
    });
  }

  findByPedidoAndItem(pedidoId, itemId) {
    return this.model.findOne({
      where: { id: itemId, pedido_id: pedidoId },
      include: [{ model: Produto, as: 'produto' }],
    });
  }

  async updateByPedidoAndItem(pedidoId, itemId, data) {
    const item = await this.findByPedidoAndItem(pedidoId, itemId);
    if (!item) return null;
    return item.update(data);
  }

  async deleteByPedidoAndItem(pedidoId, itemId) {
    const item = await this.findByPedidoAndItem(pedidoId, itemId);
    if (!item) return null;
    await item.destroy();
    return item;
  }
}

export const pedidoItemRepository = new PedidoItemRepository(PedidoItem);
