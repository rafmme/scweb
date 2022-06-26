import HTTPRequest from '.';

/**
 * @class HTTPRequestBuilder
 * @classdesc
 */
export default class HTTPRequestBuilder {
  readonly request: HTTPRequest;

  /**
   * @constructor
   * @description
   */
  constructor() {
    this.request = new HTTPRequest();
  }

  /**
   * @method
   * @param {*} url
   * @returns
   */
  withURL(url: string): HTTPRequestBuilder {
    this.request.url = url;
    return this;
  }

  /**
   * @method
   * @param {*} method
   * @returns
   */
  method(method: string): HTTPRequestBuilder {
    this.request.method = method;
    return this;
  }

  /**
   * @method
   * @param {*} headers
   * @returns
   */
  headers(headers: any): HTTPRequestBuilder {
    this.request.headers = headers;
    return this;
  }

  /**
   * @method
   * @param {*} qs
   * @returns
   */
  queryParams(qs: any): HTTPRequestBuilder {
    this.request.params = qs;
    return this;
  }

  /**
   * @method
   * @param {*} data
   * @returns
   */
  data(data: any): HTTPRequestBuilder {
    this.request.data = data;
    return this;
  }

  /**
   * @method
   * @returns
   */
  build(): HTTPRequest {
    return this.request;
  }
}
