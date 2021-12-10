import { FixtureFactory } from 'class-fixtures-factory';
import { getRepository, MigrationInterface, QueryRunner } from 'typeorm';
import { sample } from 'lodash';

import { Account } from '../entity/account.entity';
import { Branch } from '../entity/branch.entity';
import { Business } from '../entity/business.entity';
import { Customer } from '../entity/customer.entity';
import { Department } from '../entity/department.entity';
import { Employee } from '../entity/employee.entity';
import { Individual } from '../entity/individual.entity';
import { Officer } from '../entity/officer.entity';
import { Product } from '../entity/product.entity';
import { Transaction } from '../entity/transaction.entity';
import {
  IBranch,
  IBusiness,
  ICustomer,
  IDepartment,
  IIndividuals,
  INewCustomer,
  INewDepartment,
  INewEmployee,
  INewProduct,
  IOfficer,
} from '../Interfaces';

export class SeedBranches1638809695977 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const factory = new FixtureFactory();

    factory.register([Branch, Account, Transaction, Customer]);

    //-------------------- Get repositories ----------------
    const branchRepository = getRepository(Branch);
    const departmentRepository = getRepository(Department);
    const productRepository = getRepository(Product);
    const customerRepository = getRepository(Customer);
    const businessRepository = getRepository(Business);
    const individualsRepository = getRepository(Individual);
    const officerRepository = getRepository(Officer);
    const employeesRepository = getRepository(Employee);

    // ------------------ Set branches ---------------------
    const newBranches = factory.make(Branch).many(8);
    await branchRepository.save(newBranches);

    // ------------------ Set departments ------------------
    const mewDepartments: INewDepartment[] = [
      { name: 'Operations' },
      { name: 'Loans' },
      { name: 'Administration' },
    ];
    await departmentRepository.save(mewDepartments);

    // ------------------ Set products ------------------
    const products: INewProduct[] = [
      { name: 'Deposit' },
      { name: 'Credit' },
      { name: 'Settlement and cash services' },
      { name: 'Investment' },
      { name: 'Foreign exchange' },
      { name: 'Trusts' },
      { name: 'Information and consulting' },
    ];
    productRepository.save(products);

    // ---------------- Set customers --------------------
    const newCustomers: INewCustomer[] = factory.make(Customer).many(120);
    await customerRepository.save(newCustomers);

    // --------------- Set business ---------------------
    const customers: ICustomer[] = await customerRepository.find();
    const business: IBusiness[] = customers.map(
      (customer: ICustomer): IBusiness => ({
        customerId: customer.id,
        name: fakerStatic.name.firstName(),
        state: fakerStatic.address.state(),
        incorporationDate: fakerStatic.date.past(2020),
      })
    );
    await businessRepository.save(business);

    // ------------- Set individuals -------------------
    const individuals: IIndividuals[] = customers.map(
      (customer: ICustomer): IIndividuals => ({
        customerId: customer.id,
        firstName: fakerStatic.name.findName(),
        lastName: fakerStatic.name.lastName(),
        birthDate: fakerStatic.date.past(1980).toString(),
      })
    );
    await individualsRepository.save(individuals);

    // ------------- Set officers ----------------------
    const officers: IOfficer[] = customers.map(
      (customer: ICustomer): IOfficer => ({
        customerId: customer.id,
        firstName: fakerStatic.name.findName(),
        lastName: fakerStatic.name.lastName(),
        title: fakerStatic.name.title(),
        startDate: fakerStatic.date.past(210),
        endDate: null,
      })
    );
    await officerRepository.save(officers);

    // ------------ Set employees ------------------
    const branches: IBranch[] = await branchRepository.find();
    const departments: IDepartment[] = await departmentRepository.find();
    const employees: INewEmployee[] = new Array(200).map(
      (): INewEmployee => ({
        firstName: fakerStatic.name.findName(),
        lastName: fakerStatic.name.lastName(),
        title: fakerStatic.name.title(),
        stateDate: fakerStatic.date.past(210),
        endDate: null!,
        superiorEmp: null!,
        assignedBranch: sample(branches)!.id,
        dept: sample(departments)!.id,
      })
    );
    employeesRepository.save(employees);

    // ------------ Set accounts ---------------
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
