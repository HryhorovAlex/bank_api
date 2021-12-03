import { Repository } from 'typeorm';
import { Department } from '../entity/department.entity';
import { BaseService } from './base.service';

export interface IDepartmentService extends BaseService<Department> { }

export class DepartmentService extends BaseService<Department> implements IDepartmentService {
  constructor(repository: Repository<Department>) {
    super(repository);
  }
}
