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

import { ProductAssetsEntryMetadata } from '../models/ProductAssetsEntryMetadata';
import { ProductLocalizedAsset } from '../models/ProductLocalizedAsset';
import { HttpFile } from '../http/http';

export class ProductAssetData {
    'assetGrn'?: string;
    'localizedAssetGrn'?: ProductLocalizedAsset;
    'position'?: number;
    'metadata'?: Array<ProductAssetsEntryMetadata>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "assetGrn",
            "baseName": "assetGrn",
            "type": "string",
            "format": ""
        },
        {
            "name": "localizedAssetGrn",
            "baseName": "localizedAssetGrn",
            "type": "ProductLocalizedAsset",
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
            "type": "Array<ProductAssetsEntryMetadata>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ProductAssetData.attributeTypeMap;
    }

    public constructor() {
    }
}

