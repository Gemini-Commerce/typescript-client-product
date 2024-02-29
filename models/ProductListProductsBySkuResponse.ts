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

import { ProductProductEntity } from '../models/ProductProductEntity';
import { HttpFile } from '../http/http';

export class ProductListProductsBySkuResponse {
    'products'?: Array<ProductProductEntity>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "products",
            "baseName": "products",
            "type": "Array<ProductProductEntity>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ProductListProductsBySkuResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

