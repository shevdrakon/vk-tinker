import qs from 'querystring';
import createGateway from './createGateway';
import {GetSpammersResponse} from '../../server/api/violations/types';

export interface IViolationService {
  getSpammers: (payload: { start_date: Date, end_date: Date }) => Promise<GetSpammersResponse>;
}

const createViolationsService = (config: IAppConfig): IViolationService => {
  const gateway = createGateway({baseUrl: config.baseUrl});

  const getSpammers = (payload: { start_date: Date, end_date: Date }) => {
    const {start_date, end_date} = payload;
    const query = qs.stringify({
      from: start_date.getTime() / 1000,
      to: end_date.getTime() / 1000,
    });

    return gateway.get(`/violations/spam?${query}`);
  }

  return {
    getSpammers,
  };
};

export default createViolationsService;
