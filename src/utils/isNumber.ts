import { ApiError } from "./ApiError";

export const isNumber = (param: any): number => {
    const result = Number(param);
    if (result) {
      return result
    } else {
      throw ApiError.badRequest(`Param is incorrect - ${param}`);
    }
}