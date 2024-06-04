import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { ProductApiRequestFactory, ProductApiResponseProcessor} from "../apis/ProductApi";
export class ObservableProductApi {
    private requestFactory: ProductApiRequestFactory;
    private responseProcessor: ProductApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ProductApiRequestFactory,
        responseProcessor?: ProductApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ProductApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ProductApiResponseProcessor();
    }

    /**
     * The AddMediaGalleryEntry endpoint allows users to add a new media entry to the gallery of a specific product. To make a request to this endpoint, users need to provide the necessary information in the specified format. The request includes the tenant_id to specify the relevant tenant, the product_id to identify the target product, and the asset_grn which represents the globally unique identifier for the media asset being added. Additionally, the position field indicates the desired position of the media entry within the gallery, allowing users to control the order in which the media items are displayed. The metadata field, which is a repeated field, provides the option to include additional metadata associated with the media entry.
     * Add Media Gallery Entry
     * @param body 
     */
    public addMediaGalleryEntryWithHttpInfo(body: ProductAddMediaGalleryEntryRequest, _options?: Configuration): Observable<HttpInfo<ProductAddMediaGalleryEntryResponse>> {
        const requestContextPromise = this.requestFactory.addMediaGalleryEntry(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addMediaGalleryEntryWithHttpInfo(rsp)));
            }));
    }

    /**
     * The AddMediaGalleryEntry endpoint allows users to add a new media entry to the gallery of a specific product. To make a request to this endpoint, users need to provide the necessary information in the specified format. The request includes the tenant_id to specify the relevant tenant, the product_id to identify the target product, and the asset_grn which represents the globally unique identifier for the media asset being added. Additionally, the position field indicates the desired position of the media entry within the gallery, allowing users to control the order in which the media items are displayed. The metadata field, which is a repeated field, provides the option to include additional metadata associated with the media entry.
     * Add Media Gallery Entry
     * @param body 
     */
    public addMediaGalleryEntry(body: ProductAddMediaGalleryEntryRequest, _options?: Configuration): Observable<ProductAddMediaGalleryEntryResponse> {
        return this.addMediaGalleryEntryWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<ProductAddMediaGalleryEntryResponse>) => apiResponse.data));
    }

    /**
     * Version 2 of bulk updates for product attributes with enhanced payload structure and response format.
     * Bulk Update Products
     * @param body 
     */
    public bulkUpdateV2WithHttpInfo(body: ProductBulkUpdateRequestV2, _options?: Configuration): Observable<HttpInfo<ProductBulkUpdateResponse>> {
        const requestContextPromise = this.requestFactory.bulkUpdateV2(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.bulkUpdateV2WithHttpInfo(rsp)));
            }));
    }

    /**
     * Version 2 of bulk updates for product attributes with enhanced payload structure and response format.
     * Bulk Update Products
     * @param body 
     */
    public bulkUpdateV2(body: ProductBulkUpdateRequestV2, _options?: Configuration): Observable<ProductBulkUpdateResponse> {
        return this.bulkUpdateV2WithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<ProductBulkUpdateResponse>) => apiResponse.data));
    }

    /**
     * Create attribute options with specified codes, values, and swatches. Returns created options and any associated errors.
     * Create Attribute Options
     * @param body 
     */
    public createAttributeOptionsWithHttpInfo(body: EntitymanagerCreateAttributeOptionsRequest, _options?: Configuration): Observable<HttpInfo<EntitymanagerCreateAttributeOptionsResponse>> {
        const requestContextPromise = this.requestFactory.createAttributeOptions(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createAttributeOptionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create attribute options with specified codes, values, and swatches. Returns created options and any associated errors.
     * Create Attribute Options
     * @param body 
     */
    public createAttributeOptions(body: EntitymanagerCreateAttributeOptionsRequest, _options?: Configuration): Observable<EntitymanagerCreateAttributeOptionsResponse> {
        return this.createAttributeOptionsWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<EntitymanagerCreateAttributeOptionsResponse>) => apiResponse.data));
    }

    /**
     * The CreateEntity endpoint allows users to define and create a new entity with custom attributes, providing a flexible way to represent and manage different data structures within the system. By making a request to this endpoint, users can create a new entity that serves as an abstraction of a product or any other domain-specific object. This endpoint empowers users to define the specific attributes that compose the entity, such as color, composition, technical details, or any other relevant properties. Utilize the CreateEntity endpoint to dynamically extend and adapt your system\'s data model to accommodate diverse business requirements and efficiently manage various types of entities.
     * Create Entity
     * @param body 
     */
    public createEntityWithHttpInfo(body: EntitymanagerEntity, _options?: Configuration): Observable<HttpInfo<EntitymanagerCreateEntityResponse>> {
        const requestContextPromise = this.requestFactory.createEntity(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createEntityWithHttpInfo(rsp)));
            }));
    }

    /**
     * The CreateEntity endpoint allows users to define and create a new entity with custom attributes, providing a flexible way to represent and manage different data structures within the system. By making a request to this endpoint, users can create a new entity that serves as an abstraction of a product or any other domain-specific object. This endpoint empowers users to define the specific attributes that compose the entity, such as color, composition, technical details, or any other relevant properties. Utilize the CreateEntity endpoint to dynamically extend and adapt your system\'s data model to accommodate diverse business requirements and efficiently manage various types of entities.
     * Create Entity
     * @param body 
     */
    public createEntity(body: EntitymanagerEntity, _options?: Configuration): Observable<EntitymanagerCreateEntityResponse> {
        return this.createEntityWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<EntitymanagerCreateEntityResponse>) => apiResponse.data));
    }

    /**
     * The CreateOptionsList endpoint allows users to create an OptionList, which represents a list of predefined options for assigning to an attribute. By making a request to this endpoint with the provided request format, users can create a new OptionList by specifying the relevant tenant ID and providing the OptionList object containing the predefined options. This functionality facilitates efficient management and assignment of predefined attribute values, ensuring consistency and flexibility within the system.
     * Create Options List
     * @param body 
     */
    public createOptionsListWithHttpInfo(body: EntitymanagerCreateOptionsListRequest, _options?: Configuration): Observable<HttpInfo<EntitymanagerCreateOptionsListResponse>> {
        const requestContextPromise = this.requestFactory.createOptionsList(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createOptionsListWithHttpInfo(rsp)));
            }));
    }

    /**
     * The CreateOptionsList endpoint allows users to create an OptionList, which represents a list of predefined options for assigning to an attribute. By making a request to this endpoint with the provided request format, users can create a new OptionList by specifying the relevant tenant ID and providing the OptionList object containing the predefined options. This functionality facilitates efficient management and assignment of predefined attribute values, ensuring consistency and flexibility within the system.
     * Create Options List
     * @param body 
     */
    public createOptionsList(body: EntitymanagerCreateOptionsListRequest, _options?: Configuration): Observable<EntitymanagerCreateOptionsListResponse> {
        return this.createOptionsListWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<EntitymanagerCreateOptionsListResponse>) => apiResponse.data));
    }

    /**
     * Retrieve attribute option details by providing the tenant ID, list code, and option ID. Returns the specified attribute option.
     * Get Attribute Option
     * @param body 
     */
    public getAttributeOptionWithHttpInfo(body: EntitymanagerGetAttributeOptionRequest, _options?: Configuration): Observable<HttpInfo<EntitymanagerGetAttributeOptionResponse>> {
        const requestContextPromise = this.requestFactory.getAttributeOption(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAttributeOptionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve attribute option details by providing the tenant ID, list code, and option ID. Returns the specified attribute option.
     * Get Attribute Option
     * @param body 
     */
    public getAttributeOption(body: EntitymanagerGetAttributeOptionRequest, _options?: Configuration): Observable<EntitymanagerGetAttributeOptionResponse> {
        return this.getAttributeOptionWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<EntitymanagerGetAttributeOptionResponse>) => apiResponse.data));
    }

    /**
     * Retrieve a list of attribute options based on the provided tenant ID and list code.
     * Get Attribute Options
     * @param body 
     */
    public getAttributeOptionsWithHttpInfo(body: EntitymanagerGetAttributeOptionsRequest, _options?: Configuration): Observable<HttpInfo<EntitymanagerGetAttributeOptionsResponse>> {
        const requestContextPromise = this.requestFactory.getAttributeOptions(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAttributeOptionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve a list of attribute options based on the provided tenant ID and list code.
     * Get Attribute Options
     * @param body 
     */
    public getAttributeOptions(body: EntitymanagerGetAttributeOptionsRequest, _options?: Configuration): Observable<EntitymanagerGetAttributeOptionsResponse> {
        return this.getAttributeOptionsWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<EntitymanagerGetAttributeOptionsResponse>) => apiResponse.data));
    }

    /**
     * Retrieve details of an entity by providing the tenant ID and either entity data or entity ID. Returns information including ID, type, code, label, relationships, and attributes.
     * Get Entity Details
     * @param body 
     */
    public getEntityWithHttpInfo(body: EntitymanagerEntityRequest, _options?: Configuration): Observable<HttpInfo<EntitymanagerEntity>> {
        const requestContextPromise = this.requestFactory.getEntity(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEntityWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve details of an entity by providing the tenant ID and either entity data or entity ID. Returns information including ID, type, code, label, relationships, and attributes.
     * Get Entity Details
     * @param body 
     */
    public getEntity(body: EntitymanagerEntityRequest, _options?: Configuration): Observable<EntitymanagerEntity> {
        return this.getEntityWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<EntitymanagerEntity>) => apiResponse.data));
    }

    /**
     * Retrieve option lists.
     * Get Options List
     * @param body 
     */
    public getOptionsListWithHttpInfo(body: EntitymanagerGetOptionsListRequest, _options?: Configuration): Observable<HttpInfo<EntitymanagerGetOptionsListResponse>> {
        const requestContextPromise = this.requestFactory.getOptionsList(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOptionsListWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve option lists.
     * Get Options List
     * @param body 
     */
    public getOptionsList(body: EntitymanagerGetOptionsListRequest, _options?: Configuration): Observable<EntitymanagerGetOptionsListResponse> {
        return this.getOptionsListWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<EntitymanagerGetOptionsListResponse>) => apiResponse.data));
    }

    /**
     * The GetProduct endpoint enables users to retrieve a product from the system. By sending a request to this endpoint, users can retrieve a product by providing its unique identifier.
     * Get Product
     * @param body 
     */
    public getProductWithHttpInfo(body: ProductGetProductRequest, _options?: Configuration): Observable<HttpInfo<ProductGetProductResponse>> {
        const requestContextPromise = this.requestFactory.getProduct(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getProductWithHttpInfo(rsp)));
            }));
    }

    /**
     * The GetProduct endpoint enables users to retrieve a product from the system. By sending a request to this endpoint, users can retrieve a product by providing its unique identifier.
     * Get Product
     * @param body 
     */
    public getProduct(body: ProductGetProductRequest, _options?: Configuration): Observable<ProductGetProductResponse> {
        return this.getProductWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<ProductGetProductResponse>) => apiResponse.data));
    }

    /**
     * The GetProductByCode endpoint enables users to retrieve a product from the system. By sending a request to this endpoint, users can retrieve a product by providing its unique code.
     * Get Product By Code
     * @param body 
     */
    public getProductByCodeWithHttpInfo(body: ProductGetProductByCodeRequest, _options?: Configuration): Observable<HttpInfo<ProductGetProductByCodeResponse>> {
        const requestContextPromise = this.requestFactory.getProductByCode(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getProductByCodeWithHttpInfo(rsp)));
            }));
    }

    /**
     * The GetProductByCode endpoint enables users to retrieve a product from the system. By sending a request to this endpoint, users can retrieve a product by providing its unique code.
     * Get Product By Code
     * @param body 
     */
    public getProductByCode(body: ProductGetProductByCodeRequest, _options?: Configuration): Observable<ProductGetProductByCodeResponse> {
        return this.getProductByCodeWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<ProductGetProductByCodeResponse>) => apiResponse.data));
    }

    /**
     * The GetProductByUrlKey endpoint enables users to retrieve a product from the system. By sending a request to this endpoint, users can retrieve a product by providing its unique url key.
     * Get Product By Url Key
     * @param body 
     */
    public getProductByUrlKeyWithHttpInfo(body: ProductGetProductByUrlKeyRequest, _options?: Configuration): Observable<HttpInfo<ProductGetProductByUrlKeyResponse>> {
        const requestContextPromise = this.requestFactory.getProductByUrlKey(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getProductByUrlKeyWithHttpInfo(rsp)));
            }));
    }

    /**
     * The GetProductByUrlKey endpoint enables users to retrieve a product from the system. By sending a request to this endpoint, users can retrieve a product by providing its unique url key.
     * Get Product By Url Key
     * @param body 
     */
    public getProductByUrlKey(body: ProductGetProductByUrlKeyRequest, _options?: Configuration): Observable<ProductGetProductByUrlKeyResponse> {
        return this.getProductByUrlKeyWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<ProductGetProductByUrlKeyResponse>) => apiResponse.data));
    }

    /**
     * List Attribute Options
     * @param body 
     */
    public listAttributeOptionsWithHttpInfo(body: EntitymanagerListAttributeOptionsRequest, _options?: Configuration): Observable<HttpInfo<EntitymanagerListAttributeOptionsResponse>> {
        const requestContextPromise = this.requestFactory.listAttributeOptions(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listAttributeOptionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * List Attribute Options
     * @param body 
     */
    public listAttributeOptions(body: EntitymanagerListAttributeOptionsRequest, _options?: Configuration): Observable<EntitymanagerListAttributeOptionsResponse> {
        return this.listAttributeOptionsWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<EntitymanagerListAttributeOptionsResponse>) => apiResponse.data));
    }

    /**
     * List Entities
     * @param body 
     */
    public listEntitiesWithHttpInfo(body: EntitymanagerListEntitiesRequest, _options?: Configuration): Observable<HttpInfo<EntitymanagerListEntitiesResponse>> {
        const requestContextPromise = this.requestFactory.listEntities(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listEntitiesWithHttpInfo(rsp)));
            }));
    }

    /**
     * List Entities
     * @param body 
     */
    public listEntities(body: EntitymanagerListEntitiesRequest, _options?: Configuration): Observable<EntitymanagerListEntitiesResponse> {
        return this.listEntitiesWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<EntitymanagerListEntitiesResponse>) => apiResponse.data));
    }

    /**
     * The ListOptionsLists endpoint allows users to retrieve a list of OptionLists available in the system. By making a request to this endpoint with the provided request format, users can obtain all the OptionLists associated with the specified tenant. This functionality enables users to access and manage the predefined options available for various attributes within the system. Utilizing the ListOptionsLists endpoint provides a convenient way to retrieve and work with OptionLists, facilitating efficient management of attribute options and ensuring consistency in attribute values throughout the system.
     * List Options Lists
     * @param body 
     */
    public listOptionsListsWithHttpInfo(body: EntitymanagerListOptionsListsRequest, _options?: Configuration): Observable<HttpInfo<EntitymanagerListOptionsListsResponse>> {
        const requestContextPromise = this.requestFactory.listOptionsLists(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listOptionsListsWithHttpInfo(rsp)));
            }));
    }

    /**
     * The ListOptionsLists endpoint allows users to retrieve a list of OptionLists available in the system. By making a request to this endpoint with the provided request format, users can obtain all the OptionLists associated with the specified tenant. This functionality enables users to access and manage the predefined options available for various attributes within the system. Utilizing the ListOptionsLists endpoint provides a convenient way to retrieve and work with OptionLists, facilitating efficient management of attribute options and ensuring consistency in attribute values throughout the system.
     * List Options Lists
     * @param body 
     */
    public listOptionsLists(body: EntitymanagerListOptionsListsRequest, _options?: Configuration): Observable<EntitymanagerListOptionsListsResponse> {
        return this.listOptionsListsWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<EntitymanagerListOptionsListsResponse>) => apiResponse.data));
    }

    /**
     * The ListProducts endpoint provides users with the ability to retrieve a filtered list of products based on specific criteria. By including filter parameters in the request, users can customize the response to only include products that meet certain conditions, such as price range, category, availability, or any other relevant attributes. This endpoint empowers users to efficiently narrow down the product selection and retrieve tailored results.
     * List Products
     * @param body 
     */
    public listProductsWithHttpInfo(body: ProductListProductsRequest, _options?: Configuration): Observable<HttpInfo<ProductListProductsResponse>> {
        const requestContextPromise = this.requestFactory.listProducts(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listProductsWithHttpInfo(rsp)));
            }));
    }

    /**
     * The ListProducts endpoint provides users with the ability to retrieve a filtered list of products based on specific criteria. By including filter parameters in the request, users can customize the response to only include products that meet certain conditions, such as price range, category, availability, or any other relevant attributes. This endpoint empowers users to efficiently narrow down the product selection and retrieve tailored results.
     * List Products
     * @param body 
     */
    public listProducts(body: ProductListProductsRequest, _options?: Configuration): Observable<ProductListProductsResponse> {
        return this.listProductsWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<ProductListProductsResponse>) => apiResponse.data));
    }

    /**
     * The ListProductsByIds endpoint allows users to retrieve a list of products based on provided IDs. By making a request to this endpoint and specifying a set of product IDs, users can retrieve detailed information about the corresponding products. This endpoint facilitates efficient retrieval of specific products, enabling applications to display accurate and targeted product information to users.
     * List Products By Ids
     * @param body 
     */
    public listProductsByIdsWithHttpInfo(body: ProductListProductsByIdsRequest, _options?: Configuration): Observable<HttpInfo<ProductListProductsByIdsResponse>> {
        const requestContextPromise = this.requestFactory.listProductsByIds(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listProductsByIdsWithHttpInfo(rsp)));
            }));
    }

    /**
     * The ListProductsByIds endpoint allows users to retrieve a list of products based on provided IDs. By making a request to this endpoint and specifying a set of product IDs, users can retrieve detailed information about the corresponding products. This endpoint facilitates efficient retrieval of specific products, enabling applications to display accurate and targeted product information to users.
     * List Products By Ids
     * @param body 
     */
    public listProductsByIds(body: ProductListProductsByIdsRequest, _options?: Configuration): Observable<ProductListProductsByIdsResponse> {
        return this.listProductsByIdsWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<ProductListProductsByIdsResponse>) => apiResponse.data));
    }

    /**
     * List Products By Sku
     * @param body 
     */
    public listProductsBySkuWithHttpInfo(body: ProductListProductsBySkuRequest, _options?: Configuration): Observable<HttpInfo<ProductListProductsBySkuResponse>> {
        const requestContextPromise = this.requestFactory.listProductsBySku(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listProductsBySkuWithHttpInfo(rsp)));
            }));
    }

    /**
     * List Products By Sku
     * @param body 
     */
    public listProductsBySku(body: ProductListProductsBySkuRequest, _options?: Configuration): Observable<ProductListProductsBySkuResponse> {
        return this.listProductsBySkuWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<ProductListProductsBySkuResponse>) => apiResponse.data));
    }

    /**
     * List Product Variants By Sku
     * @param body 
     */
    public listVariantsBySkuWithHttpInfo(body: ProductListVariantsBySkuRequest, _options?: Configuration): Observable<HttpInfo<ProductListVariantsBySkuResponse>> {
        const requestContextPromise = this.requestFactory.listVariantsBySku(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listVariantsBySkuWithHttpInfo(rsp)));
            }));
    }

    /**
     * List Product Variants By Sku
     * @param body 
     */
    public listVariantsBySku(body: ProductListVariantsBySkuRequest, _options?: Configuration): Observable<ProductListVariantsBySkuResponse> {
        return this.listVariantsBySkuWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<ProductListVariantsBySkuResponse>) => apiResponse.data));
    }

    /**
     * Assets endpoints
     * @param body 
     */
    public productBulkAddAssetsEntriesWithHttpInfo(body: ProductBulkAddAssetsEntriesRequest, _options?: Configuration): Observable<HttpInfo<ProductBulkAddAssetsEntriesResponse>> {
        const requestContextPromise = this.requestFactory.productBulkAddAssetsEntries(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productBulkAddAssetsEntriesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Assets endpoints
     * @param body 
     */
    public productBulkAddAssetsEntries(body: ProductBulkAddAssetsEntriesRequest, _options?: Configuration): Observable<ProductBulkAddAssetsEntriesResponse> {
        return this.productBulkAddAssetsEntriesWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<ProductBulkAddAssetsEntriesResponse>) => apiResponse.data));
    }

    /**
     * Allow creation of multiple attributes. If any attribute is invalid, an error will be returned with more details, and in the response body, the attributes created will be returned.
     * @param body 
     */
    public productBulkCreateAttributeWithHttpInfo(body: EntitymanagerBulkCreateAttributeRequest, _options?: Configuration): Observable<HttpInfo<EntitymanagerBulkCreateAttributeResponse>> {
        const requestContextPromise = this.requestFactory.productBulkCreateAttribute(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productBulkCreateAttributeWithHttpInfo(rsp)));
            }));
    }

    /**
     * Allow creation of multiple attributes. If any attribute is invalid, an error will be returned with more details, and in the response body, the attributes created will be returned.
     * @param body 
     */
    public productBulkCreateAttribute(body: EntitymanagerBulkCreateAttributeRequest, _options?: Configuration): Observable<EntitymanagerBulkCreateAttributeResponse> {
        return this.productBulkCreateAttributeWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<EntitymanagerBulkCreateAttributeResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public productBulkDeleteProductsWithHttpInfo(body: ProductBulkDeleteProductsRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.productBulkDeleteProducts(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productBulkDeleteProductsWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public productBulkDeleteProducts(body: ProductBulkDeleteProductsRequest, _options?: Configuration): Observable<any> {
        return this.productBulkDeleteProductsWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public productBulkRemoveAssetsEntriesWithHttpInfo(body: ProductBulkRemoveAssetsEntriesRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.productBulkRemoveAssetsEntries(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productBulkRemoveAssetsEntriesWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public productBulkRemoveAssetsEntries(body: ProductBulkRemoveAssetsEntriesRequest, _options?: Configuration): Observable<any> {
        return this.productBulkRemoveAssetsEntriesWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public productBulkUpdateWithHttpInfo(body: ProductBulkUpdateRequest, _options?: Configuration): Observable<HttpInfo<ProductBulkUpdateResponse>> {
        const requestContextPromise = this.requestFactory.productBulkUpdate(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productBulkUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public productBulkUpdate(body: ProductBulkUpdateRequest, _options?: Configuration): Observable<ProductBulkUpdateResponse> {
        return this.productBulkUpdateWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<ProductBulkUpdateResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public productBulkUpdateAssetsEntriesWithHttpInfo(body: ProductBulkUpdateAssetsEntriesRequest, _options?: Configuration): Observable<HttpInfo<ProductBulkUpdateAssetsEntriesResponse>> {
        const requestContextPromise = this.requestFactory.productBulkUpdateAssetsEntries(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productBulkUpdateAssetsEntriesWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public productBulkUpdateAssetsEntries(body: ProductBulkUpdateAssetsEntriesRequest, _options?: Configuration): Observable<ProductBulkUpdateAssetsEntriesResponse> {
        return this.productBulkUpdateAssetsEntriesWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<ProductBulkUpdateAssetsEntriesResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public productCreateAttributeGroupWithHttpInfo(body: EntitymanagerCreateAttributeGroupRequest, _options?: Configuration): Observable<HttpInfo<EntitymanagerAttributeGroup>> {
        const requestContextPromise = this.requestFactory.productCreateAttributeGroup(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productCreateAttributeGroupWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public productCreateAttributeGroup(body: EntitymanagerCreateAttributeGroupRequest, _options?: Configuration): Observable<EntitymanagerAttributeGroup> {
        return this.productCreateAttributeGroupWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<EntitymanagerAttributeGroup>) => apiResponse.data));
    }

    /**
     * @param body The CreateProductRequest message is used to create a new product within the system. It contains various fields that allow specifying the details and attributes of the product.
     */
    public productCreateProductWithHttpInfo(body: ProductCreateProductRequest, _options?: Configuration): Observable<HttpInfo<ProductCreateProductResponse>> {
        const requestContextPromise = this.requestFactory.productCreateProduct(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productCreateProductWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body The CreateProductRequest message is used to create a new product within the system. It contains various fields that allow specifying the details and attributes of the product.
     */
    public productCreateProduct(body: ProductCreateProductRequest, _options?: Configuration): Observable<ProductCreateProductResponse> {
        return this.productCreateProductWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<ProductCreateProductResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public productCreateProductV2WithHttpInfo(body: ProductCreateProductRequestV2, _options?: Configuration): Observable<HttpInfo<ProductCreateProductResponseV2>> {
        const requestContextPromise = this.requestFactory.productCreateProductV2(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productCreateProductV2WithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public productCreateProductV2(body: ProductCreateProductRequestV2, _options?: Configuration): Observable<ProductCreateProductResponseV2> {
        return this.productCreateProductV2WithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<ProductCreateProductResponseV2>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public productDeleteWithHttpInfo(body: ProductDeleteRequest, _options?: Configuration): Observable<HttpInfo<ProductDeleteResponse>> {
        const requestContextPromise = this.requestFactory.productDelete(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public productDelete(body: ProductDeleteRequest, _options?: Configuration): Observable<ProductDeleteResponse> {
        return this.productDeleteWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<ProductDeleteResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public productDeleteAttributeWithHttpInfo(body: EntitymanagerDeleteAttributeRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.productDeleteAttribute(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productDeleteAttributeWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public productDeleteAttribute(body: EntitymanagerDeleteAttributeRequest, _options?: Configuration): Observable<any> {
        return this.productDeleteAttributeWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public productDeleteProductWithHttpInfo(body: ProductDeleteProductRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.productDeleteProduct(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productDeleteProductWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public productDeleteProduct(body: ProductDeleteProductRequest, _options?: Configuration): Observable<any> {
        return this.productDeleteProductWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public productGetAttributeGroupWithHttpInfo(body: EntitymanagerGetAttributeGroupRequest, _options?: Configuration): Observable<HttpInfo<EntitymanagerAttributeGroup>> {
        const requestContextPromise = this.requestFactory.productGetAttributeGroup(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productGetAttributeGroupWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public productGetAttributeGroup(body: EntitymanagerGetAttributeGroupRequest, _options?: Configuration): Observable<EntitymanagerAttributeGroup> {
        return this.productGetAttributeGroupWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<EntitymanagerAttributeGroup>) => apiResponse.data));
    }

    /**
     * Attribute Groups endpoints
     * @param body 
     */
    public productListAttributeGroupsWithHttpInfo(body: EntitymanagerListAttributeGroupsRequest, _options?: Configuration): Observable<HttpInfo<EntitymanagerListAttributeGroupsResponse>> {
        const requestContextPromise = this.requestFactory.productListAttributeGroups(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productListAttributeGroupsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Attribute Groups endpoints
     * @param body 
     */
    public productListAttributeGroups(body: EntitymanagerListAttributeGroupsRequest, _options?: Configuration): Observable<EntitymanagerListAttributeGroupsResponse> {
        return this.productListAttributeGroupsWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<EntitymanagerListAttributeGroupsResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public productUpdateAttributeWithHttpInfo(body: EntitymanagerUpdateAttributeRequest, _options?: Configuration): Observable<HttpInfo<EntitymanagerAttribute>> {
        const requestContextPromise = this.requestFactory.productUpdateAttribute(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productUpdateAttributeWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public productUpdateAttribute(body: EntitymanagerUpdateAttributeRequest, _options?: Configuration): Observable<EntitymanagerAttribute> {
        return this.productUpdateAttributeWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<EntitymanagerAttribute>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public productUpdateAttributeGroupWithHttpInfo(body: EntitymanagerUpdateAttributeGroupRequest, _options?: Configuration): Observable<HttpInfo<EntitymanagerAttributeGroup>> {
        const requestContextPromise = this.requestFactory.productUpdateAttributeGroup(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productUpdateAttributeGroupWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public productUpdateAttributeGroup(body: EntitymanagerUpdateAttributeGroupRequest, _options?: Configuration): Observable<EntitymanagerAttributeGroup> {
        return this.productUpdateAttributeGroupWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<EntitymanagerAttributeGroup>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public productUpdateProductWithHttpInfo(body: ProductUpdateProductRequest, _options?: Configuration): Observable<HttpInfo<ProductUpdateProductResponse>> {
        const requestContextPromise = this.requestFactory.productUpdateProduct(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productUpdateProductWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public productUpdateProduct(body: ProductUpdateProductRequest, _options?: Configuration): Observable<ProductUpdateProductResponse> {
        return this.productUpdateProductWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<ProductUpdateProductResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public productUpdateProductV2WithHttpInfo(body: ProductUpdateProductRequestV2, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.productUpdateProductV2(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productUpdateProductV2WithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public productUpdateProductV2(body: ProductUpdateProductRequestV2, _options?: Configuration): Observable<any> {
        return this.productUpdateProductV2WithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * The RemoveMediaGalleryEntry endpoint allows users to remove a specific media entry from a product\'s gallery. By making a request to this endpoint and providing the tenant ID, product ID, and the unique identifier of the media entry, users can easily manage and update the visual content of a product\'s gallery. 
     * Remove Media Gallery Entry
     * @param body 
     */
    public removeMediaGalleryEntryWithHttpInfo(body: ProductRemoveMediaGalleryEntryRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.removeMediaGalleryEntry(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.removeMediaGalleryEntryWithHttpInfo(rsp)));
            }));
    }

    /**
     * The RemoveMediaGalleryEntry endpoint allows users to remove a specific media entry from a product\'s gallery. By making a request to this endpoint and providing the tenant ID, product ID, and the unique identifier of the media entry, users can easily manage and update the visual content of a product\'s gallery. 
     * Remove Media Gallery Entry
     * @param body 
     */
    public removeMediaGalleryEntry(body: ProductRemoveMediaGalleryEntryRequest, _options?: Configuration): Observable<any> {
        return this.removeMediaGalleryEntryWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Update Attribute Options
     * @param body 
     */
    public updateAttributeOptionsWithHttpInfo(body: EntitymanagerUpdateAttributeOptionsRequest, _options?: Configuration): Observable<HttpInfo<EntitymanagerUpdateAttributeOptionsResponse>> {
        const requestContextPromise = this.requestFactory.updateAttributeOptions(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateAttributeOptionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update Attribute Options
     * @param body 
     */
    public updateAttributeOptions(body: EntitymanagerUpdateAttributeOptionsRequest, _options?: Configuration): Observable<EntitymanagerUpdateAttributeOptionsResponse> {
        return this.updateAttributeOptionsWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<EntitymanagerUpdateAttributeOptionsResponse>) => apiResponse.data));
    }

    /**
     * The UpdateMediaGalleryEntry endpoint allows users to modify and update a specific media entry within a product\'s gallery. By sending a request to this endpoint and providing the necessary information, users can efficiently update the media asset, position, and metadata associated with the entry.
     * Update Media Gallery Entry
     * @param body 
     */
    public updateMediaGalleryEntryWithHttpInfo(body: ProductUpdateMediaGalleryEntryRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.updateMediaGalleryEntry(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateMediaGalleryEntryWithHttpInfo(rsp)));
            }));
    }

    /**
     * The UpdateMediaGalleryEntry endpoint allows users to modify and update a specific media entry within a product\'s gallery. By sending a request to this endpoint and providing the necessary information, users can efficiently update the media asset, position, and metadata associated with the entry.
     * Update Media Gallery Entry
     * @param body 
     */
    public updateMediaGalleryEntry(body: ProductUpdateMediaGalleryEntryRequest, _options?: Configuration): Observable<any> {
        return this.updateMediaGalleryEntryWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Update Options List
     * @param body 
     */
    public updateOptionsListWithHttpInfo(body: EntitymanagerUpdateOptionsListRequest, _options?: Configuration): Observable<HttpInfo<EntitymanagerUpdateOptionsListResponse>> {
        const requestContextPromise = this.requestFactory.updateOptionsList(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateOptionsListWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update Options List
     * @param body 
     */
    public updateOptionsList(body: EntitymanagerUpdateOptionsListRequest, _options?: Configuration): Observable<EntitymanagerUpdateOptionsListResponse> {
        return this.updateOptionsListWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<EntitymanagerUpdateOptionsListResponse>) => apiResponse.data));
    }

}
