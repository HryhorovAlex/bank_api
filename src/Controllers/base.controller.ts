import { NextFunction, Request, Response } from 'express';
import { BaseService } from "../Services/base.service";
import { ApiError } from '../utils/ApiError';
import { isNumber } from '../utils/isNumber';


interface IBaseControllerParams<E> {
  service: BaseService<E>;
  routeName?: string
}
export class BaseController<E> {

  protected readonly service: BaseService<E>
  protected readonly routeName: string;

  constructor({ service, routeName }: IBaseControllerParams<E>) {
    this.service = service;
    this.routeName = routeName || this.getServiceName(service.constructor.name)
  }

  public getOne = async ({ params: { id } }: Request, res: Response, next: NextFunction) => {
    try {
      const idToNumber = isNumber(id);
      const record = await this.isRecordExist(idToNumber)
      res.status(200).json(record);
    } catch (error) {
      next(error);
    }
  }

  public getAll = async (_: Request, res: Response, next: NextFunction) => {
    try {
      const record = await this.service.getAll();
      res.status(200).json(record);
    } catch (error) {
      next(error);
    }
  }

  public create = async ({ body }: Request, res: Response, next: NextFunction) => {
    try {
      const newRecord = await this.service.create(body);
      res.status(201).json(newRecord);
    } catch (error) {
      next(error);
    }
  }

  public update = async ({ params: { id }, body }: Request, res: Response, next: NextFunction) => {
    try {
      const idToNumber = isNumber(id);
      await this.isRecordExist(idToNumber);
      const updatedRecord = await this.service.update(idToNumber, body)
      res.status(200).json(updatedRecord);
    } catch (error) {
      next(error);
    }
  }

  public delete = async ({ params: { id } }: Request, res: Response, next: NextFunction) => {
    try {
      const idToNumber = isNumber(id);
      const record = await this.isRecordExist(idToNumber);
      await this.service.delete(idToNumber)
      res.status(200).json(record);
    } catch (error) {
      next(error);
    }
  }

  private isRecordExist = async (id: number): Promise<E> => {
    const record: E | void = await this.service.getOne(id);
    if (!record) {
      throw ApiError.notExist(`${this.routeName} with id ${id} doesn't exist`)
    }
    return record
  }

  private getServiceName = (serviceName: string): string => {
    return serviceName.substring(0, serviceName.search("Service"));
  }
}