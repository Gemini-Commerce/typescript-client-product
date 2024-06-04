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
 * @interface EntitymanagerUpdateAttributeOptionsRequest
 */
export interface EntitymanagerUpdateAttributeOptionsRequest {
    /**
     * 
     * @type {string}
     * @memberof EntitymanagerUpdateAttributeOptionsRequest
     */
    'tenantId'?: string;
    /**
     * 
     * @type {string}
     * @memberof EntitymanagerUpdateAttributeOptionsRequest
     */
    'listCode'?: string;
    /**
     * 
     * @type {Array<EntitymanagerAttributeOption>}
     * @memberof EntitymanagerUpdateAttributeOptionsRequest
     */
    'options'?: Array<EntitymanagerAttributeOption>;
}