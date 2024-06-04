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

import { ProductMediaGalleryEntryMetadata } from '../models/ProductMediaGalleryEntryMetadata';
import { HttpFile } from '../http/http';

export class ProductAddMediaGalleryEntryRequest {
    'tenantId'?: string;
    'productId'?: string;
    'assetGrn'?: string;
    'position'?: number;
    'metadata'?: Array<ProductMediaGalleryEntryMetadata>;

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
            "name": "assetGrn",
            "baseName": "assetGrn",
            "type": "string",
            "format": ""
        },
        {
            "name": "position",
            "baseName": "position",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "Array<ProductMediaGalleryEntryMetadata>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ProductAddMediaGalleryEntryRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

