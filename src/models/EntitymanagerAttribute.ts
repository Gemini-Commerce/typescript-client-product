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
 * @interface EntitymanagerAttribute
 */
export interface EntitymanagerAttribute {
    /**
     * 
     * @type {string}
     * @memberof EntitymanagerAttribute
     */
    'entityId'?: string;
    /**
     * 
     * @type {string}
     * @memberof EntitymanagerAttribute
     */
    'code'?: string;
    /**
     * 
     * @type {string}
     * @memberof EntitymanagerAttribute
     */
    'label'?: string;
    /**
     * 
     * @type {EntitymanagerTypes}
     * @memberof EntitymanagerAttribute
     */
    'type'?: EntitymanagerTypes;
    /**
     * 
     * @type {string}
     * @memberof EntitymanagerAttribute
     */
    'optionList'?: string;
    /**
     * 
     * @type {string}
     * @memberof EntitymanagerAttribute
     */
    'entity'?: string;
    /**
     * 
     * @type {string}
     * @memberof EntitymanagerAttribute
     */
    'default'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof EntitymanagerAttribute
     */
    'isRequired'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof EntitymanagerAttribute
     */
    'isSystem'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof EntitymanagerAttribute
     */
    'isRepeated'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof EntitymanagerAttribute
     */
    'sort'?: number;
    /**
     * 
     * @type {string}
     * @memberof EntitymanagerAttribute
     */
    'groupCode'?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof EntitymanagerAttribute
     */
    'title'?: { [key: string]: string; };
    /**
     * 
     * @type {EntitymanagerRenderAs}
     * @memberof EntitymanagerAttribute
     */
    'renderAs'?: EntitymanagerRenderAs;
}
