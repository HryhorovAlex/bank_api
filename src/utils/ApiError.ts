export class ApiError {
  protected readonly code: number;

  protected readonly msg: string;

  constructor(code: number, msg: string) {
    this.code = code;
    this.msg = msg;
  }

  static badRequest(msg: string) {
    return new ApiError(400, msg);
  }

  static internal(msg: string) {
    return new ApiError(500, msg);
  }
}
