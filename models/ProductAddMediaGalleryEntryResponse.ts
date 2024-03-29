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

import { ProductMediaGalleryEntry } from '../models/ProductMediaGalleryEntry';
import { HttpFile } from '../http/http';

export class ProductAddMediaGalleryEntryResponse {
    'mediaGalleryEntry'?: ProductMediaGalleryEntry;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "mediaGalleryEntry",
            "baseName": "mediaGalleryEntry",
            "type": "ProductMediaGalleryEntry",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ProductAddMediaGalleryEntryResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

