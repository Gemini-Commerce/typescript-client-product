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

import { EntitymanagerRenderAs } from '../models/EntitymanagerRenderAs';
import { EntitymanagerTypes } from '../models/EntitymanagerTypes';
import { HttpFile } from '../http/http';

export class EntitymanagerAttribute {
    'entityId'?: string;
    'code'?: string;
    'label'?: string;
    'type'?: EntitymanagerTypes;
    'optionList'?: string;
    'entity'?: string;
    '_default'?: string;
    'isRequired'?: boolean;
    'isSystem'?: boolean;
    'isRepeated'?: boolean;
    'sort'?: number;
    'groupCode'?: string;
    'title'?: { [key: string]: string; };
    'renderAs'?: EntitymanagerRenderAs;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
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
        },
        {
            "name": "label",
            "baseName": "label",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "EntitymanagerTypes",
            "format": ""
        },
        {
            "name": "optionList",
            "baseName": "optionList",
            "type": "string",
            "format": ""
        },
        {
            "name": "entity",
            "baseName": "entity",
            "type": "string",
            "format": ""
        },
        {
            "name": "_default",
            "baseName": "default",
            "type": "string",
            "format": ""
        },
        {
            "name": "isRequired",
            "baseName": "isRequired",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isSystem",
            "baseName": "isSystem",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isRepeated",
            "baseName": "isRepeated",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "sort",
            "baseName": "sort",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "groupCode",
            "baseName": "groupCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "renderAs",
            "baseName": "renderAs",
            "type": "EntitymanagerRenderAs",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return EntitymanagerAttribute.attributeTypeMap;
    }

    public constructor() {
    }
}



