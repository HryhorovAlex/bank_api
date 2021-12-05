import { Repository } from 'typeorm';
import { Employee } from '../entity/employee.entity';
import { BaseService } from './base.service';

export interface IEmployeeService extends BaseService<Employee> { }

export class EmployeeService extends BaseService<Employee> implements IEmployeeService {
  constructor(repository: Repository<Employee>) {
    super(repository);
  }
}
