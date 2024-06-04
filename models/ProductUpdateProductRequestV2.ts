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

import { ProductFieldMask } from '../models/ProductFieldMask';
import { ProductLocalizedText } from '../models/ProductLocalizedText';
import { ProductProductVariant } from '../models/ProductProductVariant';
import { ProtobufAny } from '../models/ProtobufAny';
import { HttpFile } from '../http/http';

export class ProductUpdateProductRequestV2 {
    'tenantId'?: string;
    'id'?: string;
    'code'?: string;
    'attributesMask'?: ProductFieldMask;
    'urlKey'?: ProductLocalizedText;
    'maxSaleableQuantity'?: number;
    'attributes'?: { [key: string]: ProtobufAny; };
    'variants'?: { [key: string]: ProductProductVariant; };
    'mediaVariantAttributes'?: Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "tenantId",
            "baseName": "tenantId",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "code",
            "baseName": "code",
            "type": "string",
            "format": ""
        },
        {
            "name": "attributesMask",
            "baseName": "attributesMask",
            "type": "ProductFieldMask",
            "format": ""
        },
        {
            "name": "urlKey",
            "baseName": "urlKey",
            "type": "ProductLocalizedText",
            "format": ""
        },
        {
            "name": "maxSaleableQuantity",
            "baseName": "maxSaleableQuantity",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "{ [key: string]: ProtobufAny; }",
            "format": ""
        },
        {
            "name": "variants",
            "baseName": "variants",
            "type": "{ [key: string]: ProductProductVariant; }",
            "format": ""
        },
        {
            "name": "mediaVariantAttributes",
            "baseName": "mediaVariantAttributes",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ProductUpdateProductRequestV2.attributeTypeMap;
    }

    public constructor() {
    }
}

