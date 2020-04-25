import fetch from 'isomorphic-fetch';

const createGateway = ({baseUrl}) => {
  const errorHandler = (url: string): (reason: any) => Response => {
    return error => {
      // showToastr(error.status, url, undefined);
      throw error;
    };
  }

  return {
    fetch(url: string, method: string, data: unknown, headers) {
      const fetchOptions = buildFetchOptions(method, data, headers);

      return fetch(`${baseUrl}${url}`, fetchOptions)
        .catch(errorHandler(url))
        .then(response => response.clone())
        .then(response => handleResponse(response));
    },
    post(url, data, headers = {}) {
      return this.fetch(url, 'POST', data, headers);
    },
    get(url, headers) {
      return this.fetch(url, 'GET', null, headers);
    },
    put(url, data, headers) {
      return this.fetch(url, 'PUT', data, headers);
    },
    patch(url, data, headers) {
      return this.fetch(url, 'PATCH', data, headers);
    },
    delete(url, headers) {
      return this.fetch(url, 'DELETE', null, headers);
    },
  };
};

const buildFetchOptions = (method: string, data: unknown, headers: { [key: string]: string | undefined }): RequestInit => {
  const getHeader = (headerName: string): string | undefined => {
    const header = Object.entries(headers).find(([key]) => key.toLowerCase() === headerName.toLowerCase());
    return header ? header[1] : undefined;
  };

  const contentType = getHeader('Content-Type');
  if (typeof data === 'object' && (!contentType || contentType.match(/^application\/json/))) {
    data = JSON.stringify(data);

    if (!contentType) {
      headers['Content-Type'] = 'application/json';
    }
  }

  return {
    method,
    headers: {
      ['accept']: 'application/json',
      ...headers,
    },
    body: data as string,
    // ...(!!data && {body: data}),
  };
}

const handleResponse = (response: Response) => {
  const contentType = response.headers.get('Content-Type') || '';

  return (contentType.includes('application/json') ? response.json() : response.text()).then(data => {
    if (response.status < 400) {
      // if (fullResponse) {
      //   return {
      //     body: data,
      //     headers: response.headers,
      //     status: response.status,
      //     statusText: response.statusText,
      //   };
      // } else {
      return data;
      // }
    } else {
      // responseErrorHandler(response.status, response, data);
      return Promise.reject(data);
      // {
      //   body: data,
      //   headers: response.headers,
      //   status: response.status,
      //   statusText: response.statusText,
      // });
    }
  });
}

export default createGateway;
