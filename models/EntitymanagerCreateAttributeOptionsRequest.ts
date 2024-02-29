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

export class EntitymanagerCreateAttributeOptionsRequest {
    'tenantId'?: string;
    'listCode'?: string;
    'options'?: Array<EntitymanagerAttributeOption>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "tenantId",
            "baseName": "tenantId",
            "type": "string",
            "format": ""
        },
        {
            "name": "listCode",
            "baseName": "listCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "options",
            "baseName": "options",
            "type": "Array<EntitymanagerAttributeOption>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return EntitymanagerCreateAttributeOptionsRequest.attributeTypeMap;
    }

    public constructor() {
    }
}
