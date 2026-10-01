import { AppError } from '../utils/AppError.js';

export class BaseService {
  constructor(repository, options = {}) {
    this.repository = repository;
    this.resourceName = options.resourceName || 'Registro';
    this.validateCreate = options.validateCreate || (() => {});
    this.validateUpdate = options.validateUpdate || (() => {});
    this.findOptions = options.findOptions || {};
  }

  list() {
    return this.repository.findAll(this.findOptions);
  }

  async findById(id) {
    const item = await this.repository.findById(id, this.findOptions);
    if (!item) throw new AppError(`${this.resourceName} não encontrado`, 404);
    return item;
  }

  async create(data) {
    await this.validateCreate(data);
    return this.repository.create(data);
  }

  async update(id, data) {
    await this.findById(id);
    await this.validateUpdate(data, id);
    const item = await this.repository.update(id, data);
    return item;
  }

  async delete(id) {
    const item = await this.repository.delete(id);
    if (!item) throw new AppError(`${this.resourceName} não encontrado`, 404);
    return item;
  }
}
