import { AppError } from '../utils/AppError.js';
import {
  ifoodPedidoFindOptions,
  ifoodPedidoRepository,
} from '../repositories/IfoodPedidoRepository.js';

export const ifoodPedidoService = {
  list() {
    return ifoodPedidoRepository.findAll(ifoodPedidoFindOptions);
  },

  async findById(id) {
    const item = await ifoodPedidoRepository.findById(
      id,
      ifoodPedidoFindOptions
    );
    if (!item) throw new AppError('Pedido do iFood não encontrado', 404);
    return item;
  },

  async receiveWebhook(payload) {
    if (!payload || !payload.id) {
      throw new AppError('Payload inválido', 400);
    }

    const data = await ifoodPedidoRepository.create({
      pedido_id: null,
      ifood_order_id: payload.id,
      payload_json: payload,
      status_ifood: 'RECEBIDO',
      sincronizado_em: new Date(),
    });

    return {
      message: 'Webhook recebido com sucesso',
      data,
    };
  },
};
