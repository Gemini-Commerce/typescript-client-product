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

import { ProductBulkUpdateRequestV2Payload } from '../models/ProductBulkUpdateRequestV2Payload';
import { HttpFile } from '../http/http';

export class ProductBulkUpdateRequestV2 {
    'tenantId'?: string;
    'productIds'?: Array<string>;
    'payload'?: ProductBulkUpdateRequestV2Payload;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "tenantId",
            "baseName": "tenantId",
            "type": "string",
            "format": ""
        },
        {
            "name": "productIds",
            "baseName": "productIds",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "payload",
            "baseName": "payload",
            "type": "ProductBulkUpdateRequestV2Payload",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ProductBulkUpdateRequestV2.attributeTypeMap;
    }

    public constructor() {
    }
}

