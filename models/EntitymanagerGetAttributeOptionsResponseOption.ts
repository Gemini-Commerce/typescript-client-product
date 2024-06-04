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

import { EntitymanagerAttributeOption } from '../models/EntitymanagerAttributeOption';
import { HttpFile } from '../http/http';

export class EntitymanagerGetAttributeOptionsResponseOption {
    'listCode'?: string;
    'option'?: EntitymanagerAttributeOption;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "listCode",
            "baseName": "listCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "option",
            "baseName": "option",
            "type": "EntitymanagerAttributeOption",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return EntitymanagerGetAttributeOptionsResponseOption.attributeTypeMap;
    }

    public constructor() {
    }
}

