import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { BulkUpdateAssetsEntriesRequestUpdateEntity } from '../models/BulkUpdateAssetsEntriesRequestUpdateEntity';
import { EntitymanagerAttribute } from '../models/EntitymanagerAttribute';
import { EntitymanagerAttributeGroup } from '../models/EntitymanagerAttributeGroup';
import { EntitymanagerAttributeOption } from '../models/EntitymanagerAttributeOption';
import { EntitymanagerAttributeOptionErrors } from '../models/EntitymanagerAttributeOptionErrors';
import { EntitymanagerAttributeOptionSwatch } from '../models/EntitymanagerAttributeOptionSwatch';
import { EntitymanagerAttributeWriteError } from '../models/EntitymanagerAttributeWriteError';
import { EntitymanagerAttributeWriteErrors } from '../models/EntitymanagerAttributeWriteErrors';
import { EntitymanagerBulkCreateAttributeRequest } from '../models/EntitymanagerBulkCreateAttributeRequest';
import { EntitymanagerBulkCreateAttributeResponse } from '../models/EntitymanagerBulkCreateAttributeResponse';
import { EntitymanagerCreateAttributeGroupRequest } from '../models/EntitymanagerCreateAttributeGroupRequest';
import { EntitymanagerCreateAttributeOptionsRequest } from '../models/EntitymanagerCreateAttributeOptionsRequest';
import { EntitymanagerCreateAttributeOptionsResponse } from '../models/EntitymanagerCreateAttributeOptionsResponse';
import { EntitymanagerCreateEntityResponse } from '../models/EntitymanagerCreateEntityResponse';
import { EntitymanagerCreateOptionsListRequest } from '../models/EntitymanagerCreateOptionsListRequest';
import { EntitymanagerCreateOptionsListResponse } from '../models/EntitymanagerCreateOptionsListResponse';
import { EntitymanagerDeleteAttributeRequest } from '../models/EntitymanagerDeleteAttributeRequest';
import { EntitymanagerEntity } from '../models/EntitymanagerEntity';
import { EntitymanagerEntityIdentifier } from '../models/EntitymanagerEntityIdentifier';
import { EntitymanagerEntityRequest } from '../models/EntitymanagerEntityRequest';
import { EntitymanagerGetAttributeGroupRequest } from '../models/EntitymanagerGetAttributeGroupRequest';
import { EntitymanagerGetAttributeOptionRequest } from '../models/EntitymanagerGetAttributeOptionRequest';
import { EntitymanagerGetAttributeOptionResponse } from '../models/EntitymanagerGetAttributeOptionResponse';
import { EntitymanagerGetAttributeOptionsRequest } from '../models/EntitymanagerGetAttributeOptionsRequest';
import { EntitymanagerGetAttributeOptionsRequestOption } from '../models/EntitymanagerGetAttributeOptionsRequestOption';
import { EntitymanagerGetAttributeOptionsResponse } from '../models/EntitymanagerGetAttributeOptionsResponse';
import { EntitymanagerGetAttributeOptionsResponseOption } from '../models/EntitymanagerGetAttributeOptionsResponseOption';
import { EntitymanagerGetOptionsListRequest } from '../models/EntitymanagerGetOptionsListRequest';
import { EntitymanagerGetOptionsListResponse } from '../models/EntitymanagerGetOptionsListResponse';
import { EntitymanagerListAttributeGroupsRequest } from '../models/EntitymanagerListAttributeGroupsRequest';
import { EntitymanagerListAttributeGroupsResponse } from '../models/EntitymanagerListAttributeGroupsResponse';
import { EntitymanagerListAttributeOptionsRequest } from '../models/EntitymanagerListAttributeOptionsRequest';
import { EntitymanagerListAttributeOptionsResponse } from '../models/EntitymanagerListAttributeOptionsResponse';
import { EntitymanagerListEntitiesRequest } from '../models/EntitymanagerListEntitiesRequest';
import { EntitymanagerListEntitiesResponse } from '../models/EntitymanagerListEntitiesResponse';
import { EntitymanagerListOptionsListsRequest } from '../models/EntitymanagerListOptionsListsRequest';
import { EntitymanagerListOptionsListsResponse } from '../models/EntitymanagerListOptionsListsResponse';
import { EntitymanagerOptionsList } from '../models/EntitymanagerOptionsList';
import { EntitymanagerRenderAs } from '../models/EntitymanagerRenderAs';
import { EntitymanagerTypes } from '../models/EntitymanagerTypes';
import { EntitymanagerUpdateAttributeGroupRequest } from '../models/EntitymanagerUpdateAttributeGroupRequest';
import { EntitymanagerUpdateAttributeGroupRequestPayload } from '../models/EntitymanagerUpdateAttributeGroupRequestPayload';
import { EntitymanagerUpdateAttributeOptionsRequest } from '../models/EntitymanagerUpdateAttributeOptionsRequest';
import { EntitymanagerUpdateAttributeOptionsResponse } from '../models/EntitymanagerUpdateAttributeOptionsResponse';
import { EntitymanagerUpdateAttributeRequest } from '../models/EntitymanagerUpdateAttributeRequest';
import { EntitymanagerUpdateAttributeRequestPayload } from '../models/EntitymanagerUpdateAttributeRequestPayload';
import { EntitymanagerUpdateOptionsListRequest } from '../models/EntitymanagerUpdateOptionsListRequest';
import { EntitymanagerUpdateOptionsListResponse } from '../models/EntitymanagerUpdateOptionsListResponse';
import { ListProductsRequestFilter } from '../models/ListProductsRequestFilter';
import { ProductAddMediaGalleryEntryRequest } from '../models/ProductAddMediaGalleryEntryRequest';
import { ProductAddMediaGalleryEntryResponse } from '../models/ProductAddMediaGalleryEntryResponse';
import { ProductAssetData } from '../models/ProductAssetData';
import { ProductAssets } from '../models/ProductAssets';
import { ProductAssetsEntry } from '../models/ProductAssetsEntry';
import { ProductAssetsEntryMetadata } from '../models/ProductAssetsEntryMetadata';
import { ProductAttributeResponseError } from '../models/ProductAttributeResponseError';
import { ProductBulkAddAssetsEntriesRequest } from '../models/ProductBulkAddAssetsEntriesRequest';
import { ProductBulkAddAssetsEntriesResponse } from '../models/ProductBulkAddAssetsEntriesResponse';
import { ProductBulkDeleteProductsRequest } from '../models/ProductBulkDeleteProductsRequest';
import { ProductBulkRemoveAssetsEntriesRequest } from '../models/ProductBulkRemoveAssetsEntriesRequest';
import { ProductBulkUpdateAssetsEntriesRequest } from '../models/ProductBulkUpdateAssetsEntriesRequest';
import { ProductBulkUpdateAssetsEntriesResponse } from '../models/ProductBulkUpdateAssetsEntriesResponse';
import { ProductBulkUpdateRequest } from '../models/ProductBulkUpdateRequest';
import { ProductBulkUpdateRequestPayload } from '../models/ProductBulkUpdateRequestPayload';
import { ProductBulkUpdateRequestV2 } from '../models/ProductBulkUpdateRequestV2';
import { ProductBulkUpdateRequestV2Payload } from '../models/ProductBulkUpdateRequestV2Payload';
import { ProductBulkUpdateResponse } from '../models/ProductBulkUpdateResponse';
import { ProductBulkUpdateResponseResponse } from '../models/ProductBulkUpdateResponseResponse';
import { ProductBulkUpdateResponseV2 } from '../models/ProductBulkUpdateResponseV2';
import { ProductBulkUpdateResponseV2Response } from '../models/ProductBulkUpdateResponseV2Response';
import { ProductCreateProductRequest } from '../models/ProductCreateProductRequest';
import { ProductCreateProductRequestV2 } from '../models/ProductCreateProductRequestV2';
import { ProductCreateProductResponse } from '../models/ProductCreateProductResponse';
import { ProductCreateProductResponseV2 } from '../models/ProductCreateProductResponseV2';
import { ProductDeleteProductRequest } from '../models/ProductDeleteProductRequest';
import { ProductDeleteRequest } from '../models/ProductDeleteRequest';
import { ProductDeleteResponse } from '../models/ProductDeleteResponse';
import { ProductFieldMask } from '../models/ProductFieldMask';
import { ProductGetProductByCodeRequest } from '../models/ProductGetProductByCodeRequest';
import { ProductGetProductByCodeResponse } from '../models/ProductGetProductByCodeResponse';
import { ProductGetProductByUrlKeyRequest } from '../models/ProductGetProductByUrlKeyRequest';
import { ProductGetProductByUrlKeyResponse } from '../models/ProductGetProductByUrlKeyResponse';
import { ProductGetProductRequest } from '../models/ProductGetProductRequest';
import { ProductGetProductResponse } from '../models/ProductGetProductResponse';
import { ProductListProductsByIdsRequest } from '../models/ProductListProductsByIdsRequest';
import { ProductListProductsByIdsResponse } from '../models/ProductListProductsByIdsResponse';
import { ProductListProductsBySkuRequest } from '../models/ProductListProductsBySkuRequest';
import { ProductListProductsBySkuResponse } from '../models/ProductListProductsBySkuResponse';
import { ProductListProductsRequest } from '../models/ProductListProductsRequest';
import { ProductListProductsResponse } from '../models/ProductListProductsResponse';
import { ProductListVariantsBySkuRequest } from '../models/ProductListVariantsBySkuRequest';
import { ProductListVariantsBySkuResponse } from '../models/ProductListVariantsBySkuResponse';
import { ProductLocalizedAsset } from '../models/ProductLocalizedAsset';
import { ProductLocalizedText } from '../models/ProductLocalizedText';
import { ProductMediaGallery } from '../models/ProductMediaGallery';
import { ProductMediaGalleryEntry } from '../models/ProductMediaGalleryEntry';
import { ProductMediaGalleryEntryMetadata } from '../models/ProductMediaGalleryEntryMetadata';
import { ProductProductEntity } from '../models/ProductProductEntity';
import { ProductProductResponseError } from '../models/ProductProductResponseError';
import { ProductProductVariant } from '../models/ProductProductVariant';
import { ProductRemoveMediaGalleryEntryRequest } from '../models/ProductRemoveMediaGalleryEntryRequest';
import { ProductUpdateAssetEntryPayload } from '../models/ProductUpdateAssetEntryPayload';
import { ProductUpdateMediaGalleryEntryRequest } from '../models/ProductUpdateMediaGalleryEntryRequest';
import { ProductUpdateProductRequest } from '../models/ProductUpdateProductRequest';
import { ProductUpdateProductRequestV2 } from '../models/ProductUpdateProductRequestV2';
import { ProductUpdateProductResponse } from '../models/ProductUpdateProductResponse';
import { ProductentitymanagerLocalizedText } from '../models/ProductentitymanagerLocalizedText';
import { ProtobufAny } from '../models/ProtobufAny';
import { RpcStatus } from '../models/RpcStatus';

import { ObservableProductApi } from "./ObservableAPI";
import { ProductApiRequestFactory, ProductApiResponseProcessor} from "../apis/ProductApi";

export interface ProductApiAddMediaGalleryEntryRequest {
    /**
     * 
     * @type ProductAddMediaGalleryEntryRequest
     * @memberof ProductApiaddMediaGalleryEntry
     */
    body: ProductAddMediaGalleryEntryRequest
}

export interface ProductApiBulkUpdateV2Request {
    /**
     * 
     * @type ProductBulkUpdateRequestV2
     * @memberof ProductApibulkUpdateV2
     */
    body: ProductBulkUpdateRequestV2
}

export interface ProductApiCreateAttributeOptionsRequest {
    /**
     * 
     * @type EntitymanagerCreateAttributeOptionsRequest
     * @memberof ProductApicreateAttributeOptions
     */
    body: EntitymanagerCreateAttributeOptionsRequest
}

export interface ProductApiCreateEntityRequest {
    /**
     * 
     * @type EntitymanagerEntity
     * @memberof ProductApicreateEntity
     */
    body: EntitymanagerEntity
}

export interface ProductApiCreateOptionsListRequest {
    /**
     * 
     * @type EntitymanagerCreateOptionsListRequest
     * @memberof ProductApicreateOptionsList
     */
    body: EntitymanagerCreateOptionsListRequest
}

export interface ProductApiGetAttributeOptionRequest {
    /**
     * 
     * @type EntitymanagerGetAttributeOptionRequest
     * @memberof ProductApigetAttributeOption
     */
    body: EntitymanagerGetAttributeOptionRequest
}

export interface ProductApiGetAttributeOptionsRequest {
    /**
     * 
     * @type EntitymanagerGetAttributeOptionsRequest
     * @memberof ProductApigetAttributeOptions
     */
    body: EntitymanagerGetAttributeOptionsRequest
}

export interface ProductApiGetEntityRequest {
    /**
     * 
     * @type EntitymanagerEntityRequest
     * @memberof ProductApigetEntity
     */
    body: EntitymanagerEntityRequest
}

export interface ProductApiGetOptionsListRequest {
    /**
     * 
     * @type EntitymanagerGetOptionsListRequest
     * @memberof ProductApigetOptionsList
     */
    body: EntitymanagerGetOptionsListRequest
}

export interface ProductApiGetProductRequest {
    /**
     * 
     * @type ProductGetProductRequest
     * @memberof ProductApigetProduct
     */
    body: ProductGetProductRequest
}

export interface ProductApiGetProductByCodeRequest {
    /**
     * 
     * @type ProductGetProductByCodeRequest
     * @memberof ProductApigetProductByCode
     */
    body: ProductGetProductByCodeRequest
}

export interface ProductApiGetProductByUrlKeyRequest {
    /**
     * 
     * @type ProductGetProductByUrlKeyRequest
     * @memberof ProductApigetProductByUrlKey
     */
    body: ProductGetProductByUrlKeyRequest
}

export interface ProductApiListAttributeOptionsRequest {
    /**
     * 
     * @type EntitymanagerListAttributeOptionsRequest
     * @memberof ProductApilistAttributeOptions
     */
    body: EntitymanagerListAttributeOptionsRequest
}

export interface ProductApiListEntitiesRequest {
    /**
     * 
     * @type EntitymanagerListEntitiesRequest
     * @memberof ProductApilistEntities
     */
    body: EntitymanagerListEntitiesRequest
}

export interface ProductApiListOptionsListsRequest {
    /**
     * 
     * @type EntitymanagerListOptionsListsRequest
     * @memberof ProductApilistOptionsLists
     */
    body: EntitymanagerListOptionsListsRequest
}

export interface ProductApiListProductsRequest {
    /**
     * 
     * @type ProductListProductsRequest
     * @memberof ProductApilistProducts
     */
    body: ProductListProductsRequest
}

export interface ProductApiListProductsByIdsRequest {
    /**
     * 
     * @type ProductListProductsByIdsRequest
     * @memberof ProductApilistProductsByIds
     */
    body: ProductListProductsByIdsRequest
}

export interface ProductApiListProductsBySkuRequest {
    /**
     * 
     * @type ProductListProductsBySkuRequest
     * @memberof ProductApilistProductsBySku
     */
    body: ProductListProductsBySkuRequest
}

export interface ProductApiListVariantsBySkuRequest {
    /**
     * 
     * @type ProductListVariantsBySkuRequest
     * @memberof ProductApilistVariantsBySku
     */
    body: ProductListVariantsBySkuRequest
}

export interface ProductApiProductBulkAddAssetsEntriesRequest {
    /**
     * 
     * @type ProductBulkAddAssetsEntriesRequest
     * @memberof ProductApiproductBulkAddAssetsEntries
     */
    body: ProductBulkAddAssetsEntriesRequest
}

export interface ProductApiProductBulkCreateAttributeRequest {
    /**
     * 
     * @type EntitymanagerBulkCreateAttributeRequest
     * @memberof ProductApiproductBulkCreateAttribute
     */
    body: EntitymanagerBulkCreateAttributeRequest
}

export interface ProductApiProductBulkDeleteProductsRequest {
    /**
     * 
     * @type ProductBulkDeleteProductsRequest
     * @memberof ProductApiproductBulkDeleteProducts
     */
    body: ProductBulkDeleteProductsRequest
}

export interface ProductApiProductBulkRemoveAssetsEntriesRequest {
    /**
     * 
     * @type ProductBulkRemoveAssetsEntriesRequest
     * @memberof ProductApiproductBulkRemoveAssetsEntries
     */
    body: ProductBulkRemoveAssetsEntriesRequest
}

export interface ProductApiProductBulkUpdateRequest {
    /**
     * 
     * @type ProductBulkUpdateRequest
     * @memberof ProductApiproductBulkUpdate
     */
    body: ProductBulkUpdateRequest
}

export interface ProductApiProductBulkUpdateAssetsEntriesRequest {
    /**
     * 
     * @type ProductBulkUpdateAssetsEntriesRequest
     * @memberof ProductApiproductBulkUpdateAssetsEntries
     */
    body: ProductBulkUpdateAssetsEntriesRequest
}

export interface ProductApiProductCreateAttributeGroupRequest {
    /**
     * 
     * @type EntitymanagerCreateAttributeGroupRequest
     * @memberof ProductApiproductCreateAttributeGroup
     */
    body: EntitymanagerCreateAttributeGroupRequest
}

export interface ProductApiProductCreateProductRequest {
    /**
     * The CreateProductRequest message is used to create a new product within the system. It contains various fields that allow specifying the details and attributes of the product.
     * @type ProductCreateProductRequest
     * @memberof ProductApiproductCreateProduct
     */
    body: ProductCreateProductRequest
}

export interface ProductApiProductCreateProductV2Request {
    /**
     * 
     * @type ProductCreateProductRequestV2
     * @memberof ProductApiproductCreateProductV2
     */
    body: ProductCreateProductRequestV2
}

export interface ProductApiProductDeleteRequest {
    /**
     * 
     * @type ProductDeleteRequest
     * @memberof ProductApiproductDelete
     */
    body: ProductDeleteRequest
}

export interface ProductApiProductDeleteAttributeRequest {
    /**
     * 
     * @type EntitymanagerDeleteAttributeRequest
     * @memberof ProductApiproductDeleteAttribute
     */
    body: EntitymanagerDeleteAttributeRequest
}

export interface ProductApiProductDeleteProductRequest {
    /**
     * 
     * @type ProductDeleteProductRequest
     * @memberof ProductApiproductDeleteProduct
     */
    body: ProductDeleteProductRequest
}

export interface ProductApiProductGetAttributeGroupRequest {
    /**
     * 
     * @type EntitymanagerGetAttributeGroupRequest
     * @memberof ProductApiproductGetAttributeGroup
     */
    body: EntitymanagerGetAttributeGroupRequest
}

export interface ProductApiProductListAttributeGroupsRequest {
    /**
     * 
     * @type EntitymanagerListAttributeGroupsRequest
     * @memberof ProductApiproductListAttributeGroups
     */
    body: EntitymanagerListAttributeGroupsRequest
}

export interface ProductApiProductUpdateAttributeRequest {
    /**
     * 
     * @type EntitymanagerUpdateAttributeRequest
     * @memberof ProductApiproductUpdateAttribute
     */
    body: EntitymanagerUpdateAttributeRequest
}

export interface ProductApiProductUpdateAttributeGroupRequest {
    /**
     * 
     * @type EntitymanagerUpdateAttributeGroupRequest
     * @memberof ProductApiproductUpdateAttributeGroup
     */
    body: EntitymanagerUpdateAttributeGroupRequest
}

export interface ProductApiProductUpdateProductRequest {
    /**
     * 
     * @type ProductUpdateProductRequest
     * @memberof ProductApiproductUpdateProduct
     */
    body: ProductUpdateProductRequest
}

export interface ProductApiProductUpdateProductV2Request {
    /**
     * 
     * @type ProductUpdateProductRequestV2
     * @memberof ProductApiproductUpdateProductV2
     */
    body: ProductUpdateProductRequestV2
}

export interface ProductApiRemoveMediaGalleryEntryRequest {
    /**
     * 
     * @type ProductRemoveMediaGalleryEntryRequest
     * @memberof ProductApiremoveMediaGalleryEntry
     */
    body: ProductRemoveMediaGalleryEntryRequest
}

export interface ProductApiUpdateAttributeOptionsRequest {
    /**
     * 
     * @type EntitymanagerUpdateAttributeOptionsRequest
     * @memberof ProductApiupdateAttributeOptions
     */
    body: EntitymanagerUpdateAttributeOptionsRequest
}

export interface ProductApiUpdateMediaGalleryEntryRequest {
    /**
     * 
     * @type ProductUpdateMediaGalleryEntryRequest
     * @memberof ProductApiupdateMediaGalleryEntry
     */
    body: ProductUpdateMediaGalleryEntryRequest
}

export interface ProductApiUpdateOptionsListRequest {
    /**
     * 
     * @type EntitymanagerUpdateOptionsListRequest
     * @memberof ProductApiupdateOptionsList
     */
    body: EntitymanagerUpdateOptionsListRequest
}

export class ObjectProductApi {
    private api: ObservableProductApi

    public constructor(configuration: Configuration, requestFactory?: ProductApiRequestFactory, responseProcessor?: ProductApiResponseProcessor) {
        this.api = new ObservableProductApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * The AddMediaGalleryEntry endpoint allows users to add a new media entry to the gallery of a specific product. To make a request to this endpoint, users need to provide the necessary information in the specified format. The request includes the tenant_id to specify the relevant tenant, the product_id to identify the target product, and the asset_grn which represents the globally unique identifier for the media asset being added. Additionally, the position field indicates the desired position of the media entry within the gallery, allowing users to control the order in which the media items are displayed. The metadata field, which is a repeated field, provides the option to include additional metadata associated with the media entry.
     * Add Media Gallery Entry
     * @param param the request object
     */
    public addMediaGalleryEntryWithHttpInfo(param: ProductApiAddMediaGalleryEntryRequest, options?: Configuration): Promise<HttpInfo<ProductAddMediaGalleryEntryResponse>> {
        return this.api.addMediaGalleryEntryWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * The AddMediaGalleryEntry endpoint allows users to add a new media entry to the gallery of a specific product. To make a request to this endpoint, users need to provide the necessary information in the specified format. The request includes the tenant_id to specify the relevant tenant, the product_id to identify the target product, and the asset_grn which represents the globally unique identifier for the media asset being added. Additionally, the position field indicates the desired position of the media entry within the gallery, allowing users to control the order in which the media items are displayed. The metadata field, which is a repeated field, provides the option to include additional metadata associated with the media entry.
     * Add Media Gallery Entry
     * @param param the request object
     */
    public addMediaGalleryEntry(param: ProductApiAddMediaGalleryEntryRequest, options?: Configuration): Promise<ProductAddMediaGalleryEntryResponse> {
        return this.api.addMediaGalleryEntry(param.body,  options).toPromise();
    }

    /**
     * Version 2 of bulk updates for product attributes with enhanced payload structure and response format.
     * Bulk Update Products
     * @param param the request object
     */
    public bulkUpdateV2WithHttpInfo(param: ProductApiBulkUpdateV2Request, options?: Configuration): Promise<HttpInfo<ProductBulkUpdateResponse>> {
        return this.api.bulkUpdateV2WithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Version 2 of bulk updates for product attributes with enhanced payload structure and response format.
     * Bulk Update Products
     * @param param the request object
     */
    public bulkUpdateV2(param: ProductApiBulkUpdateV2Request, options?: Configuration): Promise<ProductBulkUpdateResponse> {
        return this.api.bulkUpdateV2(param.body,  options).toPromise();
    }

    /**
     * Create attribute options with specified codes, values, and swatches. Returns created options and any associated errors.
     * Create Attribute Options
     * @param param the request object
     */
    public createAttributeOptionsWithHttpInfo(param: ProductApiCreateAttributeOptionsRequest, options?: Configuration): Promise<HttpInfo<EntitymanagerCreateAttributeOptionsResponse>> {
        return this.api.createAttributeOptionsWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Create attribute options with specified codes, values, and swatches. Returns created options and any associated errors.
     * Create Attribute Options
     * @param param the request object
     */
    public createAttributeOptions(param: ProductApiCreateAttributeOptionsRequest, options?: Configuration): Promise<EntitymanagerCreateAttributeOptionsResponse> {
        return this.api.createAttributeOptions(param.body,  options).toPromise();
    }

    /**
     * The CreateEntity endpoint allows users to define and create a new entity with custom attributes, providing a flexible way to represent and manage different data structures within the system. By making a request to this endpoint, users can create a new entity that serves as an abstraction of a product or any other domain-specific object. This endpoint empowers users to define the specific attributes that compose the entity, such as color, composition, technical details, or any other relevant properties. Utilize the CreateEntity endpoint to dynamically extend and adapt your system\'s data model to accommodate diverse business requirements and efficiently manage various types of entities.
     * Create Entity
     * @param param the request object
     */
    public createEntityWithHttpInfo(param: ProductApiCreateEntityRequest, options?: Configuration): Promise<HttpInfo<EntitymanagerCreateEntityResponse>> {
        return this.api.createEntityWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * The CreateEntity endpoint allows users to define and create a new entity with custom attributes, providing a flexible way to represent and manage different data structures within the system. By making a request to this endpoint, users can create a new entity that serves as an abstraction of a product or any other domain-specific object. This endpoint empowers users to define the specific attributes that compose the entity, such as color, composition, technical details, or any other relevant properties. Utilize the CreateEntity endpoint to dynamically extend and adapt your system\'s data model to accommodate diverse business requirements and efficiently manage various types of entities.
     * Create Entity
     * @param param the request object
     */
    public createEntity(param: ProductApiCreateEntityRequest, options?: Configuration): Promise<EntitymanagerCreateEntityResponse> {
        return this.api.createEntity(param.body,  options).toPromise();
    }

    /**
     * The CreateOptionsList endpoint allows users to create an OptionList, which represents a list of predefined options for assigning to an attribute. By making a request to this endpoint with the provided request format, users can create a new OptionList by specifying the relevant tenant ID and providing the OptionList object containing the predefined options. This functionality facilitates efficient management and assignment of predefined attribute values, ensuring consistency and flexibility within the system.
     * Create Options List
     * @param param the request object
     */
    public createOptionsListWithHttpInfo(param: ProductApiCreateOptionsListRequest, options?: Configuration): Promise<HttpInfo<EntitymanagerCreateOptionsListResponse>> {
        return this.api.createOptionsListWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * The CreateOptionsList endpoint allows users to create an OptionList, which represents a list of predefined options for assigning to an attribute. By making a request to this endpoint with the provided request format, users can create a new OptionList by specifying the relevant tenant ID and providing the OptionList object containing the predefined options. This functionality facilitates efficient management and assignment of predefined attribute values, ensuring consistency and flexibility within the system.
     * Create Options List
     * @param param the request object
     */
    public createOptionsList(param: ProductApiCreateOptionsListRequest, options?: Configuration): Promise<EntitymanagerCreateOptionsListResponse> {
        return this.api.createOptionsList(param.body,  options).toPromise();
    }

    /**
     * Retrieve attribute option details by providing the tenant ID, list code, and option ID. Returns the specified attribute option.
     * Get Attribute Option
     * @param param the request object
     */
    public getAttributeOptionWithHttpInfo(param: ProductApiGetAttributeOptionRequest, options?: Configuration): Promise<HttpInfo<EntitymanagerGetAttributeOptionResponse>> {
        return this.api.getAttributeOptionWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Retrieve attribute option details by providing the tenant ID, list code, and option ID. Returns the specified attribute option.
     * Get Attribute Option
     * @param param the request object
     */
    public getAttributeOption(param: ProductApiGetAttributeOptionRequest, options?: Configuration): Promise<EntitymanagerGetAttributeOptionResponse> {
        return this.api.getAttributeOption(param.body,  options).toPromise();
    }

    /**
     * Retrieve a list of attribute options based on the provided tenant ID and list code.
     * Get Attribute Options
     * @param param the request object
     */
    public getAttributeOptionsWithHttpInfo(param: ProductApiGetAttributeOptionsRequest, options?: Configuration): Promise<HttpInfo<EntitymanagerGetAttributeOptionsResponse>> {
        return this.api.getAttributeOptionsWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Retrieve a list of attribute options based on the provided tenant ID and list code.
     * Get Attribute Options
     * @param param the request object
     */
    public getAttributeOptions(param: ProductApiGetAttributeOptionsRequest, options?: Configuration): Promise<EntitymanagerGetAttributeOptionsResponse> {
        return this.api.getAttributeOptions(param.body,  options).toPromise();
    }

    /**
     * Retrieve details of an entity by providing the tenant ID and either entity data or entity ID. Returns information including ID, type, code, label, relationships, and attributes.
     * Get Entity Details
     * @param param the request object
     */
    public getEntityWithHttpInfo(param: ProductApiGetEntityRequest, options?: Configuration): Promise<HttpInfo<EntitymanagerEntity>> {
        return this.api.getEntityWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Retrieve details of an entity by providing the tenant ID and either entity data or entity ID. Returns information including ID, type, code, label, relationships, and attributes.
     * Get Entity Details
     * @param param the request object
     */
    public getEntity(param: ProductApiGetEntityRequest, options?: Configuration): Promise<EntitymanagerEntity> {
        return this.api.getEntity(param.body,  options).toPromise();
    }

    /**
     * Retrieve option lists.
     * Get Options List
     * @param param the request object
     */
    public getOptionsListWithHttpInfo(param: ProductApiGetOptionsListRequest, options?: Configuration): Promise<HttpInfo<EntitymanagerGetOptionsListResponse>> {
        return this.api.getOptionsListWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Retrieve option lists.
     * Get Options List
     * @param param the request object
     */
    public getOptionsList(param: ProductApiGetOptionsListRequest, options?: Configuration): Promise<EntitymanagerGetOptionsListResponse> {
        return this.api.getOptionsList(param.body,  options).toPromise();
    }

    /**
     * The GetProduct endpoint enables users to retrieve a product from the system. By sending a request to this endpoint, users can retrieve a product by providing its unique identifier.
     * Get Product
     * @param param the request object
     */
    public getProductWithHttpInfo(param: ProductApiGetProductRequest, options?: Configuration): Promise<HttpInfo<ProductGetProductResponse>> {
        return this.api.getProductWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * The GetProduct endpoint enables users to retrieve a product from the system. By sending a request to this endpoint, users can retrieve a product by providing its unique identifier.
     * Get Product
     * @param param the request object
     */
    public getProduct(param: ProductApiGetProductRequest, options?: Configuration): Promise<ProductGetProductResponse> {
        return this.api.getProduct(param.body,  options).toPromise();
    }

    /**
     * The GetProductByCode endpoint enables users to retrieve a product from the system. By sending a request to this endpoint, users can retrieve a product by providing its unique code.
     * Get Product By Code
     * @param param the request object
     */
    public getProductByCodeWithHttpInfo(param: ProductApiGetProductByCodeRequest, options?: Configuration): Promise<HttpInfo<ProductGetProductByCodeResponse>> {
        return this.api.getProductByCodeWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * The GetProductByCode endpoint enables users to retrieve a product from the system. By sending a request to this endpoint, users can retrieve a product by providing its unique code.
     * Get Product By Code
     * @param param the request object
     */
    public getProductByCode(param: ProductApiGetProductByCodeRequest, options?: Configuration): Promise<ProductGetProductByCodeResponse> {
        return this.api.getProductByCode(param.body,  options).toPromise();
    }

    /**
     * The GetProductByUrlKey endpoint enables users to retrieve a product from the system. By sending a request to this endpoint, users can retrieve a product by providing its unique url key.
     * Get Product By Url Key
     * @param param the request object
     */
    public getProductByUrlKeyWithHttpInfo(param: ProductApiGetProductByUrlKeyRequest, options?: Configuration): Promise<HttpInfo<ProductGetProductByUrlKeyResponse>> {
        return this.api.getProductByUrlKeyWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * The GetProductByUrlKey endpoint enables users to retrieve a product from the system. By sending a request to this endpoint, users can retrieve a product by providing its unique url key.
     * Get Product By Url Key
     * @param param the request object
     */
    public getProductByUrlKey(param: ProductApiGetProductByUrlKeyRequest, options?: Configuration): Promise<ProductGetProductByUrlKeyResponse> {
        return this.api.getProductByUrlKey(param.body,  options).toPromise();
    }

    /**
     * List Attribute Options
     * @param param the request object
     */
    public listAttributeOptionsWithHttpInfo(param: ProductApiListAttributeOptionsRequest, options?: Configuration): Promise<HttpInfo<EntitymanagerListAttributeOptionsResponse>> {
        return this.api.listAttributeOptionsWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * List Attribute Options
     * @param param the request object
     */
    public listAttributeOptions(param: ProductApiListAttributeOptionsRequest, options?: Configuration): Promise<EntitymanagerListAttributeOptionsResponse> {
        return this.api.listAttributeOptions(param.body,  options).toPromise();
    }

    /**
     * List Entities
     * @param param the request object
     */
    public listEntitiesWithHttpInfo(param: ProductApiListEntitiesRequest, options?: Configuration): Promise<HttpInfo<EntitymanagerListEntitiesResponse>> {
        return this.api.listEntitiesWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * List Entities
     * @param param the request object
     */
    public listEntities(param: ProductApiListEntitiesRequest, options?: Configuration): Promise<EntitymanagerListEntitiesResponse> {
        return this.api.listEntities(param.body,  options).toPromise();
    }

    /**
     * The ListOptionsLists endpoint allows users to retrieve a list of OptionLists available in the system. By making a request to this endpoint with the provided request format, users can obtain all the OptionLists associated with the specified tenant. This functionality enables users to access and manage the predefined options available for various attributes within the system. Utilizing the ListOptionsLists endpoint provides a convenient way to retrieve and work with OptionLists, facilitating efficient management of attribute options and ensuring consistency in attribute values throughout the system.
     * List Options Lists
     * @param param the request object
     */
    public listOptionsListsWithHttpInfo(param: ProductApiListOptionsListsRequest, options?: Configuration): Promise<HttpInfo<EntitymanagerListOptionsListsResponse>> {
        return this.api.listOptionsListsWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * The ListOptionsLists endpoint allows users to retrieve a list of OptionLists available in the system. By making a request to this endpoint with the provided request format, users can obtain all the OptionLists associated with the specified tenant. This functionality enables users to access and manage the predefined options available for various attributes within the system. Utilizing the ListOptionsLists endpoint provides a convenient way to retrieve and work with OptionLists, facilitating efficient management of attribute options and ensuring consistency in attribute values throughout the system.
     * List Options Lists
     * @param param the request object
     */
    public listOptionsLists(param: ProductApiListOptionsListsRequest, options?: Configuration): Promise<EntitymanagerListOptionsListsResponse> {
        return this.api.listOptionsLists(param.body,  options).toPromise();
    }

    /**
     * The ListProducts endpoint provides users with the ability to retrieve a filtered list of products based on specific criteria. By including filter parameters in the request, users can customize the response to only include products that meet certain conditions, such as price range, category, availability, or any other relevant attributes. This endpoint empowers users to efficiently narrow down the product selection and retrieve tailored results.
     * List Products
     * @param param the request object
     */
    public listProductsWithHttpInfo(param: ProductApiListProductsRequest, options?: Configuration): Promise<HttpInfo<ProductListProductsResponse>> {
        return this.api.listProductsWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * The ListProducts endpoint provides users with the ability to retrieve a filtered list of products based on specific criteria. By including filter parameters in the request, users can customize the response to only include products that meet certain conditions, such as price range, category, availability, or any other relevant attributes. This endpoint empowers users to efficiently narrow down the product selection and retrieve tailored results.
     * List Products
     * @param param the request object
     */
    public listProducts(param: ProductApiListProductsRequest, options?: Configuration): Promise<ProductListProductsResponse> {
        return this.api.listProducts(param.body,  options).toPromise();
    }

    /**
     * The ListProductsByIds endpoint allows users to retrieve a list of products based on provided IDs. By making a request to this endpoint and specifying a set of product IDs, users can retrieve detailed information about the corresponding products. This endpoint facilitates efficient retrieval of specific products, enabling applications to display accurate and targeted product information to users.
     * List Products By Ids
     * @param param the request object
     */
    public listProductsByIdsWithHttpInfo(param: ProductApiListProductsByIdsRequest, options?: Configuration): Promise<HttpInfo<ProductListProductsByIdsResponse>> {
        return this.api.listProductsByIdsWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * The ListProductsByIds endpoint allows users to retrieve a list of products based on provided IDs. By making a request to this endpoint and specifying a set of product IDs, users can retrieve detailed information about the corresponding products. This endpoint facilitates efficient retrieval of specific products, enabling applications to display accurate and targeted product information to users.
     * List Products By Ids
     * @param param the request object
     */
    public listProductsByIds(param: ProductApiListProductsByIdsRequest, options?: Configuration): Promise<ProductListProductsByIdsResponse> {
        return this.api.listProductsByIds(param.body,  options).toPromise();
    }

    /**
     * List Products By Sku
     * @param param the request object
     */
    public listProductsBySkuWithHttpInfo(param: ProductApiListProductsBySkuRequest, options?: Configuration): Promise<HttpInfo<ProductListProductsBySkuResponse>> {
        return this.api.listProductsBySkuWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * List Products By Sku
     * @param param the request object
     */
    public listProductsBySku(param: ProductApiListProductsBySkuRequest, options?: Configuration): Promise<ProductListProductsBySkuResponse> {
        return this.api.listProductsBySku(param.body,  options).toPromise();
    }

    /**
     * List Product Variants By Sku
     * @param param the request object
     */
    public listVariantsBySkuWithHttpInfo(param: ProductApiListVariantsBySkuRequest, options?: Configuration): Promise<HttpInfo<ProductListVariantsBySkuResponse>> {
        return this.api.listVariantsBySkuWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * List Product Variants By Sku
     * @param param the request object
     */
    public listVariantsBySku(param: ProductApiListVariantsBySkuRequest, options?: Configuration): Promise<ProductListVariantsBySkuResponse> {
        return this.api.listVariantsBySku(param.body,  options).toPromise();
    }

    /**
     * Assets endpoints
     * @param param the request object
     */
    public productBulkAddAssetsEntriesWithHttpInfo(param: ProductApiProductBulkAddAssetsEntriesRequest, options?: Configuration): Promise<HttpInfo<ProductBulkAddAssetsEntriesResponse>> {
        return this.api.productBulkAddAssetsEntriesWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Assets endpoints
     * @param param the request object
     */
    public productBulkAddAssetsEntries(param: ProductApiProductBulkAddAssetsEntriesRequest, options?: Configuration): Promise<ProductBulkAddAssetsEntriesResponse> {
        return this.api.productBulkAddAssetsEntries(param.body,  options).toPromise();
    }

    /**
     * Allow creation of multiple attributes. If any attribute is invalid, an error will be returned with more details, and in the response body, the attributes created will be returned.
     * @param param the request object
     */
    public productBulkCreateAttributeWithHttpInfo(param: ProductApiProductBulkCreateAttributeRequest, options?: Configuration): Promise<HttpInfo<EntitymanagerBulkCreateAttributeResponse>> {
        return this.api.productBulkCreateAttributeWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Allow creation of multiple attributes. If any attribute is invalid, an error will be returned with more details, and in the response body, the attributes created will be returned.
     * @param param the request object
     */
    public productBulkCreateAttribute(param: ProductApiProductBulkCreateAttributeRequest, options?: Configuration): Promise<EntitymanagerBulkCreateAttributeResponse> {
        return this.api.productBulkCreateAttribute(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productBulkDeleteProductsWithHttpInfo(param: ProductApiProductBulkDeleteProductsRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.productBulkDeleteProductsWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productBulkDeleteProducts(param: ProductApiProductBulkDeleteProductsRequest, options?: Configuration): Promise<any> {
        return this.api.productBulkDeleteProducts(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productBulkRemoveAssetsEntriesWithHttpInfo(param: ProductApiProductBulkRemoveAssetsEntriesRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.productBulkRemoveAssetsEntriesWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productBulkRemoveAssetsEntries(param: ProductApiProductBulkRemoveAssetsEntriesRequest, options?: Configuration): Promise<any> {
        return this.api.productBulkRemoveAssetsEntries(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productBulkUpdateWithHttpInfo(param: ProductApiProductBulkUpdateRequest, options?: Configuration): Promise<HttpInfo<ProductBulkUpdateResponse>> {
        return this.api.productBulkUpdateWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productBulkUpdate(param: ProductApiProductBulkUpdateRequest, options?: Configuration): Promise<ProductBulkUpdateResponse> {
        return this.api.productBulkUpdate(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productBulkUpdateAssetsEntriesWithHttpInfo(param: ProductApiProductBulkUpdateAssetsEntriesRequest, options?: Configuration): Promise<HttpInfo<ProductBulkUpdateAssetsEntriesResponse>> {
        return this.api.productBulkUpdateAssetsEntriesWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productBulkUpdateAssetsEntries(param: ProductApiProductBulkUpdateAssetsEntriesRequest, options?: Configuration): Promise<ProductBulkUpdateAssetsEntriesResponse> {
        return this.api.productBulkUpdateAssetsEntries(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productCreateAttributeGroupWithHttpInfo(param: ProductApiProductCreateAttributeGroupRequest, options?: Configuration): Promise<HttpInfo<EntitymanagerAttributeGroup>> {
        return this.api.productCreateAttributeGroupWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productCreateAttributeGroup(param: ProductApiProductCreateAttributeGroupRequest, options?: Configuration): Promise<EntitymanagerAttributeGroup> {
        return this.api.productCreateAttributeGroup(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productCreateProductWithHttpInfo(param: ProductApiProductCreateProductRequest, options?: Configuration): Promise<HttpInfo<ProductCreateProductResponse>> {
        return this.api.productCreateProductWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productCreateProduct(param: ProductApiProductCreateProductRequest, options?: Configuration): Promise<ProductCreateProductResponse> {
        return this.api.productCreateProduct(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productCreateProductV2WithHttpInfo(param: ProductApiProductCreateProductV2Request, options?: Configuration): Promise<HttpInfo<ProductCreateProductResponseV2>> {
        return this.api.productCreateProductV2WithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productCreateProductV2(param: ProductApiProductCreateProductV2Request, options?: Configuration): Promise<ProductCreateProductResponseV2> {
        return this.api.productCreateProductV2(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productDeleteWithHttpInfo(param: ProductApiProductDeleteRequest, options?: Configuration): Promise<HttpInfo<ProductDeleteResponse>> {
        return this.api.productDeleteWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productDelete(param: ProductApiProductDeleteRequest, options?: Configuration): Promise<ProductDeleteResponse> {
        return this.api.productDelete(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productDeleteAttributeWithHttpInfo(param: ProductApiProductDeleteAttributeRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.productDeleteAttributeWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productDeleteAttribute(param: ProductApiProductDeleteAttributeRequest, options?: Configuration): Promise<any> {
        return this.api.productDeleteAttribute(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productDeleteProductWithHttpInfo(param: ProductApiProductDeleteProductRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.productDeleteProductWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productDeleteProduct(param: ProductApiProductDeleteProductRequest, options?: Configuration): Promise<any> {
        return this.api.productDeleteProduct(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productGetAttributeGroupWithHttpInfo(param: ProductApiProductGetAttributeGroupRequest, options?: Configuration): Promise<HttpInfo<EntitymanagerAttributeGroup>> {
        return this.api.productGetAttributeGroupWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productGetAttributeGroup(param: ProductApiProductGetAttributeGroupRequest, options?: Configuration): Promise<EntitymanagerAttributeGroup> {
        return this.api.productGetAttributeGroup(param.body,  options).toPromise();
    }

    /**
     * Attribute Groups endpoints
     * @param param the request object
     */
    public productListAttributeGroupsWithHttpInfo(param: ProductApiProductListAttributeGroupsRequest, options?: Configuration): Promise<HttpInfo<EntitymanagerListAttributeGroupsResponse>> {
        return this.api.productListAttributeGroupsWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Attribute Groups endpoints
     * @param param the request object
     */
    public productListAttributeGroups(param: ProductApiProductListAttributeGroupsRequest, options?: Configuration): Promise<EntitymanagerListAttributeGroupsResponse> {
        return this.api.productListAttributeGroups(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productUpdateAttributeWithHttpInfo(param: ProductApiProductUpdateAttributeRequest, options?: Configuration): Promise<HttpInfo<EntitymanagerAttribute>> {
        return this.api.productUpdateAttributeWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productUpdateAttribute(param: ProductApiProductUpdateAttributeRequest, options?: Configuration): Promise<EntitymanagerAttribute> {
        return this.api.productUpdateAttribute(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productUpdateAttributeGroupWithHttpInfo(param: ProductApiProductUpdateAttributeGroupRequest, options?: Configuration): Promise<HttpInfo<EntitymanagerAttributeGroup>> {
        return this.api.productUpdateAttributeGroupWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productUpdateAttributeGroup(param: ProductApiProductUpdateAttributeGroupRequest, options?: Configuration): Promise<EntitymanagerAttributeGroup> {
        return this.api.productUpdateAttributeGroup(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productUpdateProductWithHttpInfo(param: ProductApiProductUpdateProductRequest, options?: Configuration): Promise<HttpInfo<ProductUpdateProductResponse>> {
        return this.api.productUpdateProductWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productUpdateProduct(param: ProductApiProductUpdateProductRequest, options?: Configuration): Promise<ProductUpdateProductResponse> {
        return this.api.productUpdateProduct(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productUpdateProductV2WithHttpInfo(param: ProductApiProductUpdateProductV2Request, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.productUpdateProductV2WithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productUpdateProductV2(param: ProductApiProductUpdateProductV2Request, options?: Configuration): Promise<any> {
        return this.api.productUpdateProductV2(param.body,  options).toPromise();
    }

    /**
     * The RemoveMediaGalleryEntry endpoint allows users to remove a specific media entry from a product\'s gallery. By making a request to this endpoint and providing the tenant ID, product ID, and the unique identifier of the media entry, users can easily manage and update the visual content of a product\'s gallery. 
     * Remove Media Gallery Entry
     * @param param the request object
     */
    public removeMediaGalleryEntryWithHttpInfo(param: ProductApiRemoveMediaGalleryEntryRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.removeMediaGalleryEntryWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * The RemoveMediaGalleryEntry endpoint allows users to remove a specific media entry from a product\'s gallery. By making a request to this endpoint and providing the tenant ID, product ID, and the unique identifier of the media entry, users can easily manage and update the visual content of a product\'s gallery. 
     * Remove Media Gallery Entry
     * @param param the request object
     */
    public removeMediaGalleryEntry(param: ProductApiRemoveMediaGalleryEntryRequest, options?: Configuration): Promise<any> {
        return this.api.removeMediaGalleryEntry(param.body,  options).toPromise();
    }

    /**
     * Update Attribute Options
     * @param param the request object
     */
    public updateAttributeOptionsWithHttpInfo(param: ProductApiUpdateAttributeOptionsRequest, options?: Configuration): Promise<HttpInfo<EntitymanagerUpdateAttributeOptionsResponse>> {
        return this.api.updateAttributeOptionsWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Update Attribute Options
     * @param param the request object
     */
    public updateAttributeOptions(param: ProductApiUpdateAttributeOptionsRequest, options?: Configuration): Promise<EntitymanagerUpdateAttributeOptionsResponse> {
        return this.api.updateAttributeOptions(param.body,  options).toPromise();
    }

    /**
     * The UpdateMediaGalleryEntry endpoint allows users to modify and update a specific media entry within a product\'s gallery. By sending a request to this endpoint and providing the necessary information, users can efficiently update the media asset, position, and metadata associated with the entry.
     * Update Media Gallery Entry
     * @param param the request object
     */
    public updateMediaGalleryEntryWithHttpInfo(param: ProductApiUpdateMediaGalleryEntryRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.updateMediaGalleryEntryWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * The UpdateMediaGalleryEntry endpoint allows users to modify and update a specific media entry within a product\'s gallery. By sending a request to this endpoint and providing the necessary information, users can efficiently update the media asset, position, and metadata associated with the entry.
     * Update Media Gallery Entry
     * @param param the request object
     */
    public updateMediaGalleryEntry(param: ProductApiUpdateMediaGalleryEntryRequest, options?: Configuration): Promise<any> {
        return this.api.updateMediaGalleryEntry(param.body,  options).toPromise();
    }

    /**
     * Update Options List
     * @param param the request object
     */
    public updateOptionsListWithHttpInfo(param: ProductApiUpdateOptionsListRequest, options?: Configuration): Promise<HttpInfo<EntitymanagerUpdateOptionsListResponse>> {
        return this.api.updateOptionsListWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Update Options List
     * @param param the request object
     */
    public updateOptionsList(param: ProductApiUpdateOptionsListRequest, options?: Configuration): Promise<EntitymanagerUpdateOptionsListResponse> {
        return this.api.updateOptionsList(param.body,  options).toPromise();
    }

}
