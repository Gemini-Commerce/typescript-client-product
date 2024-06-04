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
import { ObservableProductApi } from './ObservableAPI';

import { ProductApiRequestFactory, ProductApiResponseProcessor} from "../apis/ProductApi";
export class PromiseProductApi {
    private api: ObservableProductApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ProductApiRequestFactory,
        responseProcessor?: ProductApiResponseProcessor
    ) {
        this.api = new ObservableProductApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * The AddMediaGalleryEntry endpoint allows users to add a new media entry to the gallery of a specific product. To make a request to this endpoint, users need to provide the necessary information in the specified format. The request includes the tenant_id to specify the relevant tenant, the product_id to identify the target product, and the asset_grn which represents the globally unique identifier for the media asset being added. Additionally, the position field indicates the desired position of the media entry within the gallery, allowing users to control the order in which the media items are displayed. The metadata field, which is a repeated field, provides the option to include additional metadata associated with the media entry.
     * Add Media Gallery Entry
     * @param body 
     */
    public addMediaGalleryEntryWithHttpInfo(body: ProductAddMediaGalleryEntryRequest, _options?: Configuration): Promise<HttpInfo<ProductAddMediaGalleryEntryResponse>> {
        const result = this.api.addMediaGalleryEntryWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * The AddMediaGalleryEntry endpoint allows users to add a new media entry to the gallery of a specific product. To make a request to this endpoint, users need to provide the necessary information in the specified format. The request includes the tenant_id to specify the relevant tenant, the product_id to identify the target product, and the asset_grn which represents the globally unique identifier for the media asset being added. Additionally, the position field indicates the desired position of the media entry within the gallery, allowing users to control the order in which the media items are displayed. The metadata field, which is a repeated field, provides the option to include additional metadata associated with the media entry.
     * Add Media Gallery Entry
     * @param body 
     */
    public addMediaGalleryEntry(body: ProductAddMediaGalleryEntryRequest, _options?: Configuration): Promise<ProductAddMediaGalleryEntryResponse> {
        const result = this.api.addMediaGalleryEntry(body, _options);
        return result.toPromise();
    }

    /**
     * Version 2 of bulk updates for product attributes with enhanced payload structure and response format.
     * Bulk Update Products
     * @param body 
     */
    public bulkUpdateV2WithHttpInfo(body: ProductBulkUpdateRequestV2, _options?: Configuration): Promise<HttpInfo<ProductBulkUpdateResponse>> {
        const result = this.api.bulkUpdateV2WithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Version 2 of bulk updates for product attributes with enhanced payload structure and response format.
     * Bulk Update Products
     * @param body 
     */
    public bulkUpdateV2(body: ProductBulkUpdateRequestV2, _options?: Configuration): Promise<ProductBulkUpdateResponse> {
        const result = this.api.bulkUpdateV2(body, _options);
        return result.toPromise();
    }

    /**
     * Create attribute options with specified codes, values, and swatches. Returns created options and any associated errors.
     * Create Attribute Options
     * @param body 
     */
    public createAttributeOptionsWithHttpInfo(body: EntitymanagerCreateAttributeOptionsRequest, _options?: Configuration): Promise<HttpInfo<EntitymanagerCreateAttributeOptionsResponse>> {
        const result = this.api.createAttributeOptionsWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Create attribute options with specified codes, values, and swatches. Returns created options and any associated errors.
     * Create Attribute Options
     * @param body 
     */
    public createAttributeOptions(body: EntitymanagerCreateAttributeOptionsRequest, _options?: Configuration): Promise<EntitymanagerCreateAttributeOptionsResponse> {
        const result = this.api.createAttributeOptions(body, _options);
        return result.toPromise();
    }

    /**
     * The CreateEntity endpoint allows users to define and create a new entity with custom attributes, providing a flexible way to represent and manage different data structures within the system. By making a request to this endpoint, users can create a new entity that serves as an abstraction of a product or any other domain-specific object. This endpoint empowers users to define the specific attributes that compose the entity, such as color, composition, technical details, or any other relevant properties. Utilize the CreateEntity endpoint to dynamically extend and adapt your system\'s data model to accommodate diverse business requirements and efficiently manage various types of entities.
     * Create Entity
     * @param body 
     */
    public createEntityWithHttpInfo(body: EntitymanagerEntity, _options?: Configuration): Promise<HttpInfo<EntitymanagerCreateEntityResponse>> {
        const result = this.api.createEntityWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * The CreateEntity endpoint allows users to define and create a new entity with custom attributes, providing a flexible way to represent and manage different data structures within the system. By making a request to this endpoint, users can create a new entity that serves as an abstraction of a product or any other domain-specific object. This endpoint empowers users to define the specific attributes that compose the entity, such as color, composition, technical details, or any other relevant properties. Utilize the CreateEntity endpoint to dynamically extend and adapt your system\'s data model to accommodate diverse business requirements and efficiently manage various types of entities.
     * Create Entity
     * @param body 
     */
    public createEntity(body: EntitymanagerEntity, _options?: Configuration): Promise<EntitymanagerCreateEntityResponse> {
        const result = this.api.createEntity(body, _options);
        return result.toPromise();
    }

    /**
     * The CreateOptionsList endpoint allows users to create an OptionList, which represents a list of predefined options for assigning to an attribute. By making a request to this endpoint with the provided request format, users can create a new OptionList by specifying the relevant tenant ID and providing the OptionList object containing the predefined options. This functionality facilitates efficient management and assignment of predefined attribute values, ensuring consistency and flexibility within the system.
     * Create Options List
     * @param body 
     */
    public createOptionsListWithHttpInfo(body: EntitymanagerCreateOptionsListRequest, _options?: Configuration): Promise<HttpInfo<EntitymanagerCreateOptionsListResponse>> {
        const result = this.api.createOptionsListWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * The CreateOptionsList endpoint allows users to create an OptionList, which represents a list of predefined options for assigning to an attribute. By making a request to this endpoint with the provided request format, users can create a new OptionList by specifying the relevant tenant ID and providing the OptionList object containing the predefined options. This functionality facilitates efficient management and assignment of predefined attribute values, ensuring consistency and flexibility within the system.
     * Create Options List
     * @param body 
     */
    public createOptionsList(body: EntitymanagerCreateOptionsListRequest, _options?: Configuration): Promise<EntitymanagerCreateOptionsListResponse> {
        const result = this.api.createOptionsList(body, _options);
        return result.toPromise();
    }

    /**
     * Retrieve attribute option details by providing the tenant ID, list code, and option ID. Returns the specified attribute option.
     * Get Attribute Option
     * @param body 
     */
    public getAttributeOptionWithHttpInfo(body: EntitymanagerGetAttributeOptionRequest, _options?: Configuration): Promise<HttpInfo<EntitymanagerGetAttributeOptionResponse>> {
        const result = this.api.getAttributeOptionWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Retrieve attribute option details by providing the tenant ID, list code, and option ID. Returns the specified attribute option.
     * Get Attribute Option
     * @param body 
     */
    public getAttributeOption(body: EntitymanagerGetAttributeOptionRequest, _options?: Configuration): Promise<EntitymanagerGetAttributeOptionResponse> {
        const result = this.api.getAttributeOption(body, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a list of attribute options based on the provided tenant ID and list code.
     * Get Attribute Options
     * @param body 
     */
    public getAttributeOptionsWithHttpInfo(body: EntitymanagerGetAttributeOptionsRequest, _options?: Configuration): Promise<HttpInfo<EntitymanagerGetAttributeOptionsResponse>> {
        const result = this.api.getAttributeOptionsWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a list of attribute options based on the provided tenant ID and list code.
     * Get Attribute Options
     * @param body 
     */
    public getAttributeOptions(body: EntitymanagerGetAttributeOptionsRequest, _options?: Configuration): Promise<EntitymanagerGetAttributeOptionsResponse> {
        const result = this.api.getAttributeOptions(body, _options);
        return result.toPromise();
    }

    /**
     * Retrieve details of an entity by providing the tenant ID and either entity data or entity ID. Returns information including ID, type, code, label, relationships, and attributes.
     * Get Entity Details
     * @param body 
     */
    public getEntityWithHttpInfo(body: EntitymanagerEntityRequest, _options?: Configuration): Promise<HttpInfo<EntitymanagerEntity>> {
        const result = this.api.getEntityWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Retrieve details of an entity by providing the tenant ID and either entity data or entity ID. Returns information including ID, type, code, label, relationships, and attributes.
     * Get Entity Details
     * @param body 
     */
    public getEntity(body: EntitymanagerEntityRequest, _options?: Configuration): Promise<EntitymanagerEntity> {
        const result = this.api.getEntity(body, _options);
        return result.toPromise();
    }

    /**
     * Retrieve option lists.
     * Get Options List
     * @param body 
     */
    public getOptionsListWithHttpInfo(body: EntitymanagerGetOptionsListRequest, _options?: Configuration): Promise<HttpInfo<EntitymanagerGetOptionsListResponse>> {
        const result = this.api.getOptionsListWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Retrieve option lists.
     * Get Options List
     * @param body 
     */
    public getOptionsList(body: EntitymanagerGetOptionsListRequest, _options?: Configuration): Promise<EntitymanagerGetOptionsListResponse> {
        const result = this.api.getOptionsList(body, _options);
        return result.toPromise();
    }

    /**
     * The GetProduct endpoint enables users to retrieve a product from the system. By sending a request to this endpoint, users can retrieve a product by providing its unique identifier.
     * Get Product
     * @param body 
     */
    public getProductWithHttpInfo(body: ProductGetProductRequest, _options?: Configuration): Promise<HttpInfo<ProductGetProductResponse>> {
        const result = this.api.getProductWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * The GetProduct endpoint enables users to retrieve a product from the system. By sending a request to this endpoint, users can retrieve a product by providing its unique identifier.
     * Get Product
     * @param body 
     */
    public getProduct(body: ProductGetProductRequest, _options?: Configuration): Promise<ProductGetProductResponse> {
        const result = this.api.getProduct(body, _options);
        return result.toPromise();
    }

    /**
     * The GetProductByCode endpoint enables users to retrieve a product from the system. By sending a request to this endpoint, users can retrieve a product by providing its unique code.
     * Get Product By Code
     * @param body 
     */
    public getProductByCodeWithHttpInfo(body: ProductGetProductByCodeRequest, _options?: Configuration): Promise<HttpInfo<ProductGetProductByCodeResponse>> {
        const result = this.api.getProductByCodeWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * The GetProductByCode endpoint enables users to retrieve a product from the system. By sending a request to this endpoint, users can retrieve a product by providing its unique code.
     * Get Product By Code
     * @param body 
     */
    public getProductByCode(body: ProductGetProductByCodeRequest, _options?: Configuration): Promise<ProductGetProductByCodeResponse> {
        const result = this.api.getProductByCode(body, _options);
        return result.toPromise();
    }

    /**
     * The GetProductByUrlKey endpoint enables users to retrieve a product from the system. By sending a request to this endpoint, users can retrieve a product by providing its unique url key.
     * Get Product By Url Key
     * @param body 
     */
    public getProductByUrlKeyWithHttpInfo(body: ProductGetProductByUrlKeyRequest, _options?: Configuration): Promise<HttpInfo<ProductGetProductByUrlKeyResponse>> {
        const result = this.api.getProductByUrlKeyWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * The GetProductByUrlKey endpoint enables users to retrieve a product from the system. By sending a request to this endpoint, users can retrieve a product by providing its unique url key.
     * Get Product By Url Key
     * @param body 
     */
    public getProductByUrlKey(body: ProductGetProductByUrlKeyRequest, _options?: Configuration): Promise<ProductGetProductByUrlKeyResponse> {
        const result = this.api.getProductByUrlKey(body, _options);
        return result.toPromise();
    }

    /**
     * List Attribute Options
     * @param body 
     */
    public listAttributeOptionsWithHttpInfo(body: EntitymanagerListAttributeOptionsRequest, _options?: Configuration): Promise<HttpInfo<EntitymanagerListAttributeOptionsResponse>> {
        const result = this.api.listAttributeOptionsWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * List Attribute Options
     * @param body 
     */
    public listAttributeOptions(body: EntitymanagerListAttributeOptionsRequest, _options?: Configuration): Promise<EntitymanagerListAttributeOptionsResponse> {
        const result = this.api.listAttributeOptions(body, _options);
        return result.toPromise();
    }

    /**
     * List Entities
     * @param body 
     */
    public listEntitiesWithHttpInfo(body: EntitymanagerListEntitiesRequest, _options?: Configuration): Promise<HttpInfo<EntitymanagerListEntitiesResponse>> {
        const result = this.api.listEntitiesWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * List Entities
     * @param body 
     */
    public listEntities(body: EntitymanagerListEntitiesRequest, _options?: Configuration): Promise<EntitymanagerListEntitiesResponse> {
        const result = this.api.listEntities(body, _options);
        return result.toPromise();
    }

    /**
     * The ListOptionsLists endpoint allows users to retrieve a list of OptionLists available in the system. By making a request to this endpoint with the provided request format, users can obtain all the OptionLists associated with the specified tenant. This functionality enables users to access and manage the predefined options available for various attributes within the system. Utilizing the ListOptionsLists endpoint provides a convenient way to retrieve and work with OptionLists, facilitating efficient management of attribute options and ensuring consistency in attribute values throughout the system.
     * List Options Lists
     * @param body 
     */
    public listOptionsListsWithHttpInfo(body: EntitymanagerListOptionsListsRequest, _options?: Configuration): Promise<HttpInfo<EntitymanagerListOptionsListsResponse>> {
        const result = this.api.listOptionsListsWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * The ListOptionsLists endpoint allows users to retrieve a list of OptionLists available in the system. By making a request to this endpoint with the provided request format, users can obtain all the OptionLists associated with the specified tenant. This functionality enables users to access and manage the predefined options available for various attributes within the system. Utilizing the ListOptionsLists endpoint provides a convenient way to retrieve and work with OptionLists, facilitating efficient management of attribute options and ensuring consistency in attribute values throughout the system.
     * List Options Lists
     * @param body 
     */
    public listOptionsLists(body: EntitymanagerListOptionsListsRequest, _options?: Configuration): Promise<EntitymanagerListOptionsListsResponse> {
        const result = this.api.listOptionsLists(body, _options);
        return result.toPromise();
    }

    /**
     * The ListProducts endpoint provides users with the ability to retrieve a filtered list of products based on specific criteria. By including filter parameters in the request, users can customize the response to only include products that meet certain conditions, such as price range, category, availability, or any other relevant attributes. This endpoint empowers users to efficiently narrow down the product selection and retrieve tailored results.
     * List Products
     * @param body 
     */
    public listProductsWithHttpInfo(body: ProductListProductsRequest, _options?: Configuration): Promise<HttpInfo<ProductListProductsResponse>> {
        const result = this.api.listProductsWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * The ListProducts endpoint provides users with the ability to retrieve a filtered list of products based on specific criteria. By including filter parameters in the request, users can customize the response to only include products that meet certain conditions, such as price range, category, availability, or any other relevant attributes. This endpoint empowers users to efficiently narrow down the product selection and retrieve tailored results.
     * List Products
     * @param body 
     */
    public listProducts(body: ProductListProductsRequest, _options?: Configuration): Promise<ProductListProductsResponse> {
        const result = this.api.listProducts(body, _options);
        return result.toPromise();
    }

    /**
     * The ListProductsByIds endpoint allows users to retrieve a list of products based on provided IDs. By making a request to this endpoint and specifying a set of product IDs, users can retrieve detailed information about the corresponding products. This endpoint facilitates efficient retrieval of specific products, enabling applications to display accurate and targeted product information to users.
     * List Products By Ids
     * @param body 
     */
    public listProductsByIdsWithHttpInfo(body: ProductListProductsByIdsRequest, _options?: Configuration): Promise<HttpInfo<ProductListProductsByIdsResponse>> {
        const result = this.api.listProductsByIdsWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * The ListProductsByIds endpoint allows users to retrieve a list of products based on provided IDs. By making a request to this endpoint and specifying a set of product IDs, users can retrieve detailed information about the corresponding products. This endpoint facilitates efficient retrieval of specific products, enabling applications to display accurate and targeted product information to users.
     * List Products By Ids
     * @param body 
     */
    public listProductsByIds(body: ProductListProductsByIdsRequest, _options?: Configuration): Promise<ProductListProductsByIdsResponse> {
        const result = this.api.listProductsByIds(body, _options);
        return result.toPromise();
    }

    /**
     * List Products By Sku
     * @param body 
     */
    public listProductsBySkuWithHttpInfo(body: ProductListProductsBySkuRequest, _options?: Configuration): Promise<HttpInfo<ProductListProductsBySkuResponse>> {
        const result = this.api.listProductsBySkuWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * List Products By Sku
     * @param body 
     */
    public listProductsBySku(body: ProductListProductsBySkuRequest, _options?: Configuration): Promise<ProductListProductsBySkuResponse> {
        const result = this.api.listProductsBySku(body, _options);
        return result.toPromise();
    }

    /**
     * List Product Variants By Sku
     * @param body 
     */
    public listVariantsBySkuWithHttpInfo(body: ProductListVariantsBySkuRequest, _options?: Configuration): Promise<HttpInfo<ProductListVariantsBySkuResponse>> {
        const result = this.api.listVariantsBySkuWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * List Product Variants By Sku
     * @param body 
     */
    public listVariantsBySku(body: ProductListVariantsBySkuRequest, _options?: Configuration): Promise<ProductListVariantsBySkuResponse> {
        const result = this.api.listVariantsBySku(body, _options);
        return result.toPromise();
    }

    /**
     * Assets endpoints
     * @param body 
     */
    public productBulkAddAssetsEntriesWithHttpInfo(body: ProductBulkAddAssetsEntriesRequest, _options?: Configuration): Promise<HttpInfo<ProductBulkAddAssetsEntriesResponse>> {
        const result = this.api.productBulkAddAssetsEntriesWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Assets endpoints
     * @param body 
     */
    public productBulkAddAssetsEntries(body: ProductBulkAddAssetsEntriesRequest, _options?: Configuration): Promise<ProductBulkAddAssetsEntriesResponse> {
        const result = this.api.productBulkAddAssetsEntries(body, _options);
        return result.toPromise();
    }

    /**
     * Allow creation of multiple attributes. If any attribute is invalid, an error will be returned with more details, and in the response body, the attributes created will be returned.
     * @param body 
     */
    public productBulkCreateAttributeWithHttpInfo(body: EntitymanagerBulkCreateAttributeRequest, _options?: Configuration): Promise<HttpInfo<EntitymanagerBulkCreateAttributeResponse>> {
        const result = this.api.productBulkCreateAttributeWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Allow creation of multiple attributes. If any attribute is invalid, an error will be returned with more details, and in the response body, the attributes created will be returned.
     * @param body 
     */
    public productBulkCreateAttribute(body: EntitymanagerBulkCreateAttributeRequest, _options?: Configuration): Promise<EntitymanagerBulkCreateAttributeResponse> {
        const result = this.api.productBulkCreateAttribute(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public productBulkDeleteProductsWithHttpInfo(body: ProductBulkDeleteProductsRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.productBulkDeleteProductsWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public productBulkDeleteProducts(body: ProductBulkDeleteProductsRequest, _options?: Configuration): Promise<any> {
        const result = this.api.productBulkDeleteProducts(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public productBulkRemoveAssetsEntriesWithHttpInfo(body: ProductBulkRemoveAssetsEntriesRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.productBulkRemoveAssetsEntriesWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public productBulkRemoveAssetsEntries(body: ProductBulkRemoveAssetsEntriesRequest, _options?: Configuration): Promise<any> {
        const result = this.api.productBulkRemoveAssetsEntries(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public productBulkUpdateWithHttpInfo(body: ProductBulkUpdateRequest, _options?: Configuration): Promise<HttpInfo<ProductBulkUpdateResponse>> {
        const result = this.api.productBulkUpdateWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public productBulkUpdate(body: ProductBulkUpdateRequest, _options?: Configuration): Promise<ProductBulkUpdateResponse> {
        const result = this.api.productBulkUpdate(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public productBulkUpdateAssetsEntriesWithHttpInfo(body: ProductBulkUpdateAssetsEntriesRequest, _options?: Configuration): Promise<HttpInfo<ProductBulkUpdateAssetsEntriesResponse>> {
        const result = this.api.productBulkUpdateAssetsEntriesWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public productBulkUpdateAssetsEntries(body: ProductBulkUpdateAssetsEntriesRequest, _options?: Configuration): Promise<ProductBulkUpdateAssetsEntriesResponse> {
        const result = this.api.productBulkUpdateAssetsEntries(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public productCreateAttributeGroupWithHttpInfo(body: EntitymanagerCreateAttributeGroupRequest, _options?: Configuration): Promise<HttpInfo<EntitymanagerAttributeGroup>> {
        const result = this.api.productCreateAttributeGroupWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public productCreateAttributeGroup(body: EntitymanagerCreateAttributeGroupRequest, _options?: Configuration): Promise<EntitymanagerAttributeGroup> {
        const result = this.api.productCreateAttributeGroup(body, _options);
        return result.toPromise();
    }

    /**
     * @param body The CreateProductRequest message is used to create a new product within the system. It contains various fields that allow specifying the details and attributes of the product.
     */
    public productCreateProductWithHttpInfo(body: ProductCreateProductRequest, _options?: Configuration): Promise<HttpInfo<ProductCreateProductResponse>> {
        const result = this.api.productCreateProductWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body The CreateProductRequest message is used to create a new product within the system. It contains various fields that allow specifying the details and attributes of the product.
     */
    public productCreateProduct(body: ProductCreateProductRequest, _options?: Configuration): Promise<ProductCreateProductResponse> {
        const result = this.api.productCreateProduct(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public productCreateProductV2WithHttpInfo(body: ProductCreateProductRequestV2, _options?: Configuration): Promise<HttpInfo<ProductCreateProductResponseV2>> {
        const result = this.api.productCreateProductV2WithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public productCreateProductV2(body: ProductCreateProductRequestV2, _options?: Configuration): Promise<ProductCreateProductResponseV2> {
        const result = this.api.productCreateProductV2(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public productDeleteWithHttpInfo(body: ProductDeleteRequest, _options?: Configuration): Promise<HttpInfo<ProductDeleteResponse>> {
        const result = this.api.productDeleteWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public productDelete(body: ProductDeleteRequest, _options?: Configuration): Promise<ProductDeleteResponse> {
        const result = this.api.productDelete(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public productDeleteAttributeWithHttpInfo(body: EntitymanagerDeleteAttributeRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.productDeleteAttributeWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public productDeleteAttribute(body: EntitymanagerDeleteAttributeRequest, _options?: Configuration): Promise<any> {
        const result = this.api.productDeleteAttribute(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public productDeleteProductWithHttpInfo(body: ProductDeleteProductRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.productDeleteProductWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public productDeleteProduct(body: ProductDeleteProductRequest, _options?: Configuration): Promise<any> {
        const result = this.api.productDeleteProduct(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public productGetAttributeGroupWithHttpInfo(body: EntitymanagerGetAttributeGroupRequest, _options?: Configuration): Promise<HttpInfo<EntitymanagerAttributeGroup>> {
        const result = this.api.productGetAttributeGroupWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public productGetAttributeGroup(body: EntitymanagerGetAttributeGroupRequest, _options?: Configuration): Promise<EntitymanagerAttributeGroup> {
        const result = this.api.productGetAttributeGroup(body, _options);
        return result.toPromise();
    }

    /**
     * Attribute Groups endpoints
     * @param body 
     */
    public productListAttributeGroupsWithHttpInfo(body: EntitymanagerListAttributeGroupsRequest, _options?: Configuration): Promise<HttpInfo<EntitymanagerListAttributeGroupsResponse>> {
        const result = this.api.productListAttributeGroupsWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Attribute Groups endpoints
     * @param body 
     */
    public productListAttributeGroups(body: EntitymanagerListAttributeGroupsRequest, _options?: Configuration): Promise<EntitymanagerListAttributeGroupsResponse> {
        const result = this.api.productListAttributeGroups(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public productUpdateAttributeWithHttpInfo(body: EntitymanagerUpdateAttributeRequest, _options?: Configuration): Promise<HttpInfo<EntitymanagerAttribute>> {
        const result = this.api.productUpdateAttributeWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public productUpdateAttribute(body: EntitymanagerUpdateAttributeRequest, _options?: Configuration): Promise<EntitymanagerAttribute> {
        const result = this.api.productUpdateAttribute(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public productUpdateAttributeGroupWithHttpInfo(body: EntitymanagerUpdateAttributeGroupRequest, _options?: Configuration): Promise<HttpInfo<EntitymanagerAttributeGroup>> {
        const result = this.api.productUpdateAttributeGroupWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public productUpdateAttributeGroup(body: EntitymanagerUpdateAttributeGroupRequest, _options?: Configuration): Promise<EntitymanagerAttributeGroup> {
        const result = this.api.productUpdateAttributeGroup(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public productUpdateProductWithHttpInfo(body: ProductUpdateProductRequest, _options?: Configuration): Promise<HttpInfo<ProductUpdateProductResponse>> {
        const result = this.api.productUpdateProductWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public productUpdateProduct(body: ProductUpdateProductRequest, _options?: Configuration): Promise<ProductUpdateProductResponse> {
        const result = this.api.productUpdateProduct(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public productUpdateProductV2WithHttpInfo(body: ProductUpdateProductRequestV2, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.productUpdateProductV2WithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public productUpdateProductV2(body: ProductUpdateProductRequestV2, _options?: Configuration): Promise<any> {
        const result = this.api.productUpdateProductV2(body, _options);
        return result.toPromise();
    }

    /**
     * The RemoveMediaGalleryEntry endpoint allows users to remove a specific media entry from a product\'s gallery. By making a request to this endpoint and providing the tenant ID, product ID, and the unique identifier of the media entry, users can easily manage and update the visual content of a product\'s gallery. 
     * Remove Media Gallery Entry
     * @param body 
     */
    public removeMediaGalleryEntryWithHttpInfo(body: ProductRemoveMediaGalleryEntryRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.removeMediaGalleryEntryWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * The RemoveMediaGalleryEntry endpoint allows users to remove a specific media entry from a product\'s gallery. By making a request to this endpoint and providing the tenant ID, product ID, and the unique identifier of the media entry, users can easily manage and update the visual content of a product\'s gallery. 
     * Remove Media Gallery Entry
     * @param body 
     */
    public removeMediaGalleryEntry(body: ProductRemoveMediaGalleryEntryRequest, _options?: Configuration): Promise<any> {
        const result = this.api.removeMediaGalleryEntry(body, _options);
        return result.toPromise();
    }

    /**
     * Update Attribute Options
     * @param body 
     */
    public updateAttributeOptionsWithHttpInfo(body: EntitymanagerUpdateAttributeOptionsRequest, _options?: Configuration): Promise<HttpInfo<EntitymanagerUpdateAttributeOptionsResponse>> {
        const result = this.api.updateAttributeOptionsWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Update Attribute Options
     * @param body 
     */
    public updateAttributeOptions(body: EntitymanagerUpdateAttributeOptionsRequest, _options?: Configuration): Promise<EntitymanagerUpdateAttributeOptionsResponse> {
        const result = this.api.updateAttributeOptions(body, _options);
        return result.toPromise();
    }

    /**
     * The UpdateMediaGalleryEntry endpoint allows users to modify and update a specific media entry within a product\'s gallery. By sending a request to this endpoint and providing the necessary information, users can efficiently update the media asset, position, and metadata associated with the entry.
     * Update Media Gallery Entry
     * @param body 
     */
    public updateMediaGalleryEntryWithHttpInfo(body: ProductUpdateMediaGalleryEntryRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.updateMediaGalleryEntryWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * The UpdateMediaGalleryEntry endpoint allows users to modify and update a specific media entry within a product\'s gallery. By sending a request to this endpoint and providing the necessary information, users can efficiently update the media asset, position, and metadata associated with the entry.
     * Update Media Gallery Entry
     * @param body 
     */
    public updateMediaGalleryEntry(body: ProductUpdateMediaGalleryEntryRequest, _options?: Configuration): Promise<any> {
        const result = this.api.updateMediaGalleryEntry(body, _options);
        return result.toPromise();
    }

    /**
     * Update Options List
     * @param body 
     */
    public updateOptionsListWithHttpInfo(body: EntitymanagerUpdateOptionsListRequest, _options?: Configuration): Promise<HttpInfo<EntitymanagerUpdateOptionsListResponse>> {
        const result = this.api.updateOptionsListWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Update Options List
     * @param body 
     */
    public updateOptionsList(body: EntitymanagerUpdateOptionsListRequest, _options?: Configuration): Promise<EntitymanagerUpdateOptionsListResponse> {
        const result = this.api.updateOptionsList(body, _options);
        return result.toPromise();
    }


}



