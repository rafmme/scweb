import Util from '..';

/**
 * @class HTTPRequest
 * @classdesc
 */
export default class HTTPRequest {
  url: string;
  method: string;
  params: any;
  headers: any;
  data: any;

  /**
   * @constructor
   * @description
   * @param {*} object
   */
  constructor() {
    this.url = '';
    this.params = {};
    this.method = '';
    this.data = {};
    this.headers = {};
  }

  /**
   * @description
   * @method
   */
  async send() {
    return await Util.makeHTTPRequest(this);
  }
}
