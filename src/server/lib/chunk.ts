export const rangeToChunks = (from: number, to: number, chunkSize: number): { from: number; count: number }[] => {
  const result = [];

  while (from < to) {
    const count = Math.min(to - from, chunkSize);
    result.push({from, count});

    from += count;
  }

  return result;
};
