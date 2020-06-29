import {createAsyncThunk} from '../utils/createAsyncThunk';
import {GetSpammersResponse} from '../../../server/api/violations/types';

const strToRuDate = (date: string): Date => {
  const parts = date.split('.').map(Number);

  return new Date(parts[2], parts[1] - 1, parts[0]);
}

export const fetchSpam = createAsyncThunk<{ date: string }, GetSpammersResponse>(
  'SPAM/FETCH',
  async (args, {extra}) => {
    const {api: {violationsService}} = extra;
    const targetDate = args.date ? strToRuDate(args.date) : new Date();

    try {
      const payload = {
        start_date: new Date(targetDate.getFullYear(), targetDate.getMonth(), targetDate.getDate()),
        end_date: new Date(targetDate.getFullYear(), targetDate.getMonth(), targetDate.getDate() + 1),
      };

      return await violationsService.getSpammers(payload);
    } catch {
      throw `Unable to fetch spammers. Please try again.`;
    }
  }
);
