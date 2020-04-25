export interface IVkApiRequestError {
  message: string;
  code: number;
  status: number;
}

class VkApiRequestError implements IVkApiRequestError {
  code: number;
  status: number;
  message: string;
  name: string;

  constructor(message: string, code: number) {
    this.message = message;
    this.code = code;
    this.status = code === 5 ? 401 : 500;
  }
}

export default VkApiRequestError;
