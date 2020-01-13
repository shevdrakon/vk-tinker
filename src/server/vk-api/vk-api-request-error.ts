class VkApiRequestError extends Error {
  code: number;
  status: number;

  constructor(message: string, code: number) {
    super(message);

    this.code = code;
    this.status = code === 5 ? 401 : 500;
  }
}

export default VkApiRequestError;
