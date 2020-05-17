const createPartialMock = <T>(props: Partial<T>): T => {
  return props as T;
};

export default createPartialMock;
