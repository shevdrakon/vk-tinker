import React from 'react';
import {useHistory} from 'react-router-dom';
import qs from 'querystring';

import useQueryPaging from '../../hooks/useQueryPaging';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';

const useInfiniteHistoryPaging = (first: { id: number; }): [number, number, boolean] => {
  const history = useHistory();
  const {start: qStart, page: qPage} = useQueryPaging();

  const [paging, setPaging] = React.useState<{ start: number; page: number; initial: boolean }>({
    start: qStart,
    page: qPage,
    initial: true,
  });

  const handleGoToNextPage = () => {
    setPaging(p => ({...p, page: p.page + 1, initial: false,}));
  }

  useInfiniteScroll(handleGoToNextPage);

  React.useEffect(() => {
    if (paging.start !== qStart) {
      setPaging(p => ({...p, start: qStart, page: 1, initial: true}));
    } else if (!qStart && first) {
      setPaging(p => ({...p, start: first.id, initial: false,}));
    }
  }, [first, qStart]);

  React.useEffect(() => {
    if (!paging.start) return;

    const query = qs.stringify({start: paging.start, page: paging.page});
    history.push(`?${query}`);
  }, [paging.start, paging.page]);

  return [paging.start, paging.page, paging.initial];
}

export default useInfiniteHistoryPaging;
