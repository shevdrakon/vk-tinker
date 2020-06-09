import {createAsyncThunk} from '../utils/createAsyncThunk';
import {GetSpammersResponse} from '../../../server/api/violations/types';

export const fetchSpam = createAsyncThunk<void, GetSpammersResponse>(
  'SPAM/FETCH',
  async (_, {extra}) => {
    const {api: {violationsService}} = extra;

    try {
      const now = new Date();
      const payload = {
        start_date: new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1),
        end_date: new Date(now.getFullYear(), now.getMonth(), now.getDate()),
      };

      return await violationsService.getSpammers(payload);
    } catch {
      throw `Unable to fetch spammers. Please try again.`;
    }
  }
);
