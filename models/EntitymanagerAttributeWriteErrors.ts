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

import { EntitymanagerAttributeWriteError } from '../models/EntitymanagerAttributeWriteError';
import { HttpFile } from '../http/http';

export class EntitymanagerAttributeWriteErrors {
    'attributeWriteErrors'?: Array<EntitymanagerAttributeWriteError>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "attributeWriteErrors",
            "baseName": "attributeWriteErrors",
            "type": "Array<EntitymanagerAttributeWriteError>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return EntitymanagerAttributeWriteErrors.attributeTypeMap;
    }

    public constructor() {
    }
}

