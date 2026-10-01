import { ComandaItem, Produto } from '../models/index.js';
import { BaseRepository } from './BaseRepository.js';

class ComandaItemRepository extends BaseRepository {
  findByComanda(comandaId) {
    return this.model.findAll({
      where: { comanda_id: comandaId },
      include: [{ model: Produto, as: 'produto' }],
    });
  }

  findByComandaAndItem(comandaId, itemId) {
    return this.model.findOne({
      where: { id: itemId, comanda_id: comandaId },
      include: [{ model: Produto, as: 'produto' }],
    });
  }

  async updateByComandaAndItem(comandaId, itemId, data) {
    const item = await this.findByComandaAndItem(comandaId, itemId);
    if (!item) return null;
    return item.update(data);
  }

  async deleteByComandaAndItem(comandaId, itemId) {
    const item = await this.findByComandaAndItem(comandaId, itemId);
    if (!item) return null;
    await item.destroy();
    return item;
  }
}

export const comandaItemRepository = new ComandaItemRepository(ComandaItem);
