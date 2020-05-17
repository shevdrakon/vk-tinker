import {useSelector} from 'react-redux';
import {IAppState} from '../store/types/store.types';

const useAppStateSelector = <TSelected = unknown>(selector: (state: IAppState) => TSelected): TSelected => {
  return useSelector<IAppState, TSelected>(selector);
};

export default useAppStateSelector;
