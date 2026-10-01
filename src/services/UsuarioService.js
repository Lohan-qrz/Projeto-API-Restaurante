import { BaseService } from './BaseService.js';
import { usuarioRepository } from '../repositories/UsuarioRepository.js';
import { requireFields, assertIn } from '../utils/validation.js';

const funcoes = ['ADMIN', 'GERENTE', 'GARCOM', 'CAIXA', 'COZINHEIRO'];

export const usuarioService = new BaseService(usuarioRepository, {
  resourceName: 'Usuário',
  validateCreate: (data) => {
    requireFields(data, ['nome', 'email', 'senha_hash', 'funcao']);
    assertIn(data.funcao, funcoes, 'funcao');
  },
  validateUpdate: (data) => {
    assertIn(data.funcao, funcoes, 'funcao');
  },
});
