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

import { EntitymanagerEntityIdentifier } from '../models/EntitymanagerEntityIdentifier';
import { HttpFile } from '../http/http';

export class EntitymanagerDeleteAttributeRequest {
    'tenantId'?: string;
    'entityData'?: EntitymanagerEntityIdentifier;
    'entityId'?: string;
    'code'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "tenantId",
            "baseName": "tenantId",
            "type": "string",
            "format": ""
        },
        {
            "name": "entityData",
            "baseName": "entityData",
            "type": "EntitymanagerEntityIdentifier",
            "format": ""
        },
        {
            "name": "entityId",
            "baseName": "entityId",
            "type": "string",
            "format": ""
        },
        {
            "name": "code",
            "baseName": "code",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return EntitymanagerDeleteAttributeRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

