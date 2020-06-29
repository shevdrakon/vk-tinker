import React from 'react';
import useQuery from './useQuery';

const useQueryPaging = () => {
  const query = useQuery();

  return React.useMemo(() => {
    const start = query.get('start') ? Number(query.get('start')) : null;
    const page = Number(query.get('page') || 1);

    return {start, page};
  }, [query]);
};

export default useQueryPaging;
