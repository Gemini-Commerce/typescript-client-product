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

import { ProductentitymanagerLocalizedText } from '../models/ProductentitymanagerLocalizedText';
import { HttpFile } from '../http/http';

export class EntitymanagerUpdateAttributeGroupRequestPayload {
    'label'?: ProductentitymanagerLocalizedText;
    'sort'?: number;
    'visibility'?: Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "label",
            "baseName": "label",
            "type": "ProductentitymanagerLocalizedText",
            "format": ""
        },
        {
            "name": "sort",
            "baseName": "sort",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "visibility",
            "baseName": "visibility",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return EntitymanagerUpdateAttributeGroupRequestPayload.attributeTypeMap;
    }

    public constructor() {
    }
}

