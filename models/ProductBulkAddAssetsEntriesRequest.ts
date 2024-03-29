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

import { ProductAssetData } from '../models/ProductAssetData';
import { HttpFile } from '../http/http';

export class ProductBulkAddAssetsEntriesRequest {
    'tenantId'?: string;
    'productId'?: string;
    'assets'?: Array<ProductAssetData>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "tenantId",
            "baseName": "tenantId",
            "type": "string",
            "format": ""
        },
        {
            "name": "productId",
            "baseName": "productId",
            "type": "string",
            "format": ""
        },
        {
            "name": "assets",
            "baseName": "assets",
            "type": "Array<ProductAssetData>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ProductBulkAddAssetsEntriesRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

