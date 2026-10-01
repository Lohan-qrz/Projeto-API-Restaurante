import { AppError } from './AppError.js';

export const requireFields = (data, fields) => {
  for (const field of fields) {
    if (
      data[field] === undefined ||
      data[field] === null ||
      data[field] === ''
    ) {
      throw new AppError(`Campo obrigatório: ${field}`, 400);
    }
  }
};

export const assertPositive = (value, field) => {
  if (Number(value) <= 0) {
    throw new AppError(`${field} deve ser maior que zero`, 422);
  }
};

export const assertNonNegative = (value, field) => {
  if (Number(value) < 0) {
    throw new AppError(`${field} não pode ser negativo`, 422);
  }
};

export const assertIn = (value, allowed, field) => {
  if (value !== undefined && !allowed.includes(value)) {
    throw new AppError(
      `${field} inválido. Valores aceitos: ${allowed.join(', ')}`,
      422
    );
  }
};

export const assertExists = async (repository, id, resourceName) => {
  const item = await repository.findById(id);
  if (!item) {
    throw new AppError(`${resourceName} não encontrado`, 404);
  }
  return item;
};
