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

import { ProductAssets } from '../models/ProductAssets';
import { ProductLocalizedText } from '../models/ProductLocalizedText';
import { ProductMediaGallery } from '../models/ProductMediaGallery';
import { ProductProductVariant } from '../models/ProductProductVariant';
import { ProtobufAny } from '../models/ProtobufAny';
import { HttpFile } from '../http/http';

export class ProductProductEntity {
    'tenantId'?: string;
    'grn'?: string;
    'entityType'?: string;
    'entityCode'?: string;
    'id'?: string;
    'code'?: string;
    'variantAttributes'?: Array<string>;
    'isConfigurable'?: boolean;
    'isVirtual'?: boolean;
    'isGiftcard'?: boolean;
    'hasConfigurator'?: boolean;
    'urlKey'?: ProductLocalizedText;
    'mediaVariantAttributes'?: Array<string>;
    'attributes'?: { [key: string]: ProtobufAny; };
    'variants'?: { [key: string]: ProductProductVariant; };
    'mediaGallery'?: ProductMediaGallery;
    'maxSaleableQuantity'?: number;
    'assets'?: ProductAssets;
    'createdAt'?: string;
    'updatedAt'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "tenantId",
            "baseName": "tenantId",
            "type": "string",
            "format": ""
        },
        {
            "name": "grn",
            "baseName": "grn",
            "type": "string",
            "format": ""
        },
        {
            "name": "entityType",
            "baseName": "entityType",
            "type": "string",
            "format": ""
        },
        {
            "name": "entityCode",
            "baseName": "entityCode",
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
            "name": "variantAttributes",
            "baseName": "variantAttributes",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "isConfigurable",
            "baseName": "isConfigurable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isVirtual",
            "baseName": "isVirtual",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isGiftcard",
            "baseName": "isGiftcard",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "hasConfigurator",
            "baseName": "hasConfigurator",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "urlKey",
            "baseName": "urlKey",
            "type": "ProductLocalizedText",
            "format": ""
        },
        {
            "name": "mediaVariantAttributes",
            "baseName": "mediaVariantAttributes",
            "type": "Array<string>",
            "format": ""
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
            "name": "mediaGallery",
            "baseName": "mediaGallery",
            "type": "ProductMediaGallery",
            "format": ""
        },
        {
            "name": "maxSaleableQuantity",
            "baseName": "maxSaleableQuantity",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "assets",
            "baseName": "assets",
            "type": "ProductAssets",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "string",
            "format": "int64"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "string",
            "format": "int64"
        }    ];

    static getAttributeTypeMap() {
        return ProductProductEntity.attributeTypeMap;
    }

    public constructor() {
    }
}

