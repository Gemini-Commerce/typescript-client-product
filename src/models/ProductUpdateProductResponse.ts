/* tslint:disable */
/* eslint-disable */
/**
 * Product Service
 * API for managing products
 *
 * The version of the OpenAPI document: v1
 * Contact: info@gemini-commerce.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * 
 * @export
 * @interface ProductUpdateProductResponse
 */
export interface ProductUpdateProductResponse {
    /**
     * 
     * @type {boolean}
     * @memberof ProductUpdateProductResponse
     */
    'success'?: boolean;
    /**
     * 
     * @type {Array<ProductProductResponseError>}
     * @memberof ProductUpdateProductResponse
     */
    'productErrors'?: Array<ProductProductResponseError>;
    /**
     * 
     * @type {Array<ProductAttributeResponseError>}
     * @memberof ProductUpdateProductResponse
     */
    'attributeErrors'?: Array<ProductAttributeResponseError>;
}
