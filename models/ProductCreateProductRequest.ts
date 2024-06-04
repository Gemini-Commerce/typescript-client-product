/**
 * Product Service
 * Introducing our revolutionary Product Management Service! Designed to streamline your product inventory and elevate customer experiences, our cutting-edge protobuf service is a game-changer in the world of efficient product management.  With our service, you can effortlessly create new products, allowing you to quickly bring your ideas to life and expand your catalog. Retrieve product information in a snap, providing accurate and personalized details to your customers based on their specific needs and preferences.  Stay ahead of the competition by easily updating product information, ensuring your catalog is always up-to-date and optimized. Seamlessly remove products from your inventory when needed, maintaining a clean and relevant product selection.  Enhance the visual appeal of your products with our advanced media gallery functionalities. Effortlessly add and update captivating images and videos to showcase your products in the best possible light, engaging your customers and driving conversions.  Personalization is key in today\'s market, and our service enables you to offer unique options to your customers. Easily create and manage lists of customizable options for your products, providing flexibility and tailoring to individual preferences.  Attributes play a vital role in defining products, and our service empowers you to effectively manage them. From bulk attribute creation to listing and retrieving attribute options, our service ensures your product information is rich and comprehensive.  Our service extends its capabilities to entity management, allowing you to effortlessly handle different entities and create customized options lists associated with them. This provides further flexibility and customization options for your product offerings.  When it comes to bulk updates, our service has you covered. Effortlessly update multiple products simultaneously, saving you time and streamlining your operations.  Finding specific products and variants is a breeze with our service. Quickly locate products based on their unique stock keeping unit (SKU) values, ensuring efficient inventory management and smooth order fulfillment.  Experience a new level of efficiency and productivity with our Product Management Service. Unlock the full potential of streamlined product management and empower your business to thrive in today\'s competitive market. Try our service today and elevate your product management to new heights!
 *
 * OpenAPI spec version: v1
 * Contact: info@gemini-commerce.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ProductLocalizedText } from '../models/ProductLocalizedText';
import { ProductProductVariant } from '../models/ProductProductVariant';
import { ProtobufAny } from '../models/ProtobufAny';
import { HttpFile } from '../http/http';

/**
* The CreateProductRequest message is used to create a new product within the system. It contains various fields that allow specifying the details and attributes of the product.
*/
export class ProductCreateProductRequest {
    /**
    * Represents the ID of the tenant associated with the product.
    */
    'tenantId'?: string;
    /**
    * Specifies the type of entity for the product.
    */
    'entityType'?: string;
    /**
    * Indicates the code of the entity associated with the product.
    */
    'entityCode'?: string;
    /**
    * Represents the unique code or identifier for the product.
    */
    'code'?: string;
    /**
    * Specifies whether the product has variants or not.
    */
    'isConfigurable'?: boolean;
    /**
    * Contains a list of attributes specific to the product variants.
    */
    'variantAttributes'?: Array<string>;
    /**
    * Indicates whether the product is virtual or not.
    */
    'isVirtual'?: boolean;
    /**
    * Specifies whether the product is a gift card or not.
    */
    'isGiftcard'?: boolean;
    'hasConfigurator'?: boolean;
    'urlKey'?: ProductLocalizedText;
    /**
    * Specifies the maximum quantity that can be sold for the product in each order.
    */
    'maxSaleableQuantity'?: number;
    'mediaVariantAttributes'?: Array<string>;
    /**
    * Contains a map of additional attributes associated with the product, where the key is the attribute name and the value is any type of value.
    */
    'attributes'?: { [key: string]: ProtobufAny; };
    /**
    * Represents a map of product variants associated with the product, where the key is the variant ID or code, and the value is a ProductVariant message.
    */
    'variants'?: { [key: string]: ProductProductVariant; };

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "tenantId",
            "baseName": "tenantId",
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
            "name": "code",
            "baseName": "code",
            "type": "string",
            "format": ""
        },
        {
            "name": "isConfigurable",
            "baseName": "isConfigurable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "variantAttributes",
            "baseName": "variantAttributes",
            "type": "Array<string>",
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
            "name": "maxSaleableQuantity",
            "baseName": "maxSaleableQuantity",
            "type": "number",
            "format": "int64"
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
        }    ];

    static getAttributeTypeMap() {
        return ProductCreateProductRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

