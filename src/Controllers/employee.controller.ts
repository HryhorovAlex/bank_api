import { Employee } from '../entity/employee.entity';
import { IEmployeeService } from '../Services';
import { BaseController } from './base.controller';

export class EmployeeController extends BaseController<Employee> {
  protected readonly employeeService: IEmployeeService;
  constructor(employeeService: IEmployeeService) {
    super({ service: employeeService });
  }
}
