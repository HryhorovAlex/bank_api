import { Department } from '../entity/department.entity';
import { DepartmentService, IDepartmentService } from '../Services';
import { BaseController } from './base.controller';

export class DepartmentController extends BaseController<Department> {
  protected readonly departmentService: IDepartmentService;
  constructor(departmentService: DepartmentService) {
    super({ service: departmentService })
  }
}
