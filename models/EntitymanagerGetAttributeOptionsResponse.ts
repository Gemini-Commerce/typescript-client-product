/**
 * Product Service
 * API for managing products
 *
 * OpenAPI spec version: v1
 * Contact: info@gemini-commerce.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { EntitymanagerGetAttributeOptionsResponseOption } from '../models/EntitymanagerGetAttributeOptionsResponseOption';
import { HttpFile } from '../http/http';

export class EntitymanagerGetAttributeOptionsResponse {
    'options'?: Array<EntitymanagerGetAttributeOptionsResponseOption>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "options",
            "baseName": "options",
            "type": "Array<EntitymanagerGetAttributeOptionsResponseOption>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return EntitymanagerGetAttributeOptionsResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

