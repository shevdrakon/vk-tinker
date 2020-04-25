import qs from 'qs'
import fetch from 'isomorphic-fetch';

import config from '../../config';
import logger from '../../lib/logger';
import VkApiRequestError from './VkApiRequestError';

const vkApiBaseUrl = `https://api.vk.com/method`;

interface IOptions {
  accessToken: string;
}

class VkApiService {
  private options: IOptions;

  constructor(options: IOptions) {
    if (!options.accessToken)
      throw new Error(`Access token has not specified.`);

    this.options = options;
  }

  async request(url: string, method: string, headers: Dictionary<any>, data: any): Promise<Response> {
    const options = {
      method,
      headers: headers || {},
      body: data
    }

    try {
      return await fetch(url, options);
    } catch (error) {
      logger.log('Error', error);
      throw error
    }
  }

  async json(url: string, method: string, data = undefined) {
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    const body = JSON.stringify(data);
    const response = await this.request(url, method, headers, body);

    return response.json();
  }

  post(url: string, data: any) {
    return this.json(url, 'POST', data)
  }

  get(url: string) {
    return this.json(url, 'GET')
  }

  async execute(method: string, payload: any) {
    const p = {
      ...payload,
      access_token: this.options.accessToken,
      v: config.vkApi.version,
    };

    const query = qs.stringify(p, {skipNulls: true});
    const url = `${vkApiBaseUrl}/${method}?${query}`;

    const response = await this.get(url);

    if (response.error) throw this.buildError(response);

    return response.response;
  }

  private buildError(response: any): Error {
    const {error_msg, error_code} = response.error;
    const message = `${error_msg} (code: ${error_code})`;

    return new VkApiRequestError(message, error_code);
  }
}

export default VkApiService;
