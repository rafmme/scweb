import axios from 'axios';


/**
 * @class Util
 * @classdesc
 */
export default class Util {
  /**
   * @static
   * @description
   * @param {*} requestObject
   */
   static async makeHTTPRequest(requestObject) {
    const { method, url, params, data, headers } = requestObject;

    try {
      const response = await axios({
        method,
        url,
        params,
        data,
        headers,
      });

      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  /**
  * @static
  * @description
  * @param {Object} product
  */
  static validateProductInput({
    sku,
    price,
    name,
    width,
    height,
    length,
    size,
    weight,
    productType,
  }) {
    const errors: any[] = [];
    
    if (sku === '') {
      errors.push('sku');
    }

    if (!Number.parseFloat(price) || price < 1) {
      errors.push('price');
    }

    if (name === '') {
      errors.push('name');
    }
    
    if (productType === 'Furniture' && ((!Number.parseFloat(width)) || width < 1)) {
      errors.push('width');
    }    
    
    if (productType === 'Furniture' && ((!Number.parseFloat(height)) || height < 1)) {
      errors.push('height');
    }    
    
    if (productType === 'Book' && ((!Number.parseFloat(weight)) || weight < 1)) {
      errors.push('weight');
    }    
    
    if (productType === 'Furniture' && ((!Number.parseFloat(length)) || length < 1)) {
      errors.push('length');
    }

    if (productType === 'DVD' && ((!Number.parseFloat(size)) || size < 1)) {
      errors.push('size');
    }

    if (productType === '#' || productType === '') {
      errors.push('productType');
    }

    return errors
  }
}


