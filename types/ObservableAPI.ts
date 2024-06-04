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
     * @param body 
     */
    public productAddMediaGalleryEntryWithHttpInfo(body: ProductAddMediaGalleryEntryRequest, _options?: Configuration): Observable<HttpInfo<ProductAddMediaGalleryEntryResponse>> {
        const requestContextPromise = this.requestFactory.productAddMediaGalleryEntry(body, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productAddMediaGalleryEntryWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public productAddMediaGalleryEntry(body: ProductAddMediaGalleryEntryRequest, _options?: Configuration): Observable<ProductAddMediaGalleryEntryResponse> {
        return this.productAddMediaGalleryEntryWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<ProductAddMediaGalleryEntryResponse>) => apiResponse.data));
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
    public productBulkUpdateV2WithHttpInfo(body: ProductBulkUpdateRequestV2, _options?: Configuration): Observable<HttpInfo<ProductBulkUpdateResponseV2>> {
        const requestContextPromise = this.requestFactory.productBulkUpdateV2(body, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productBulkUpdateV2WithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public productBulkUpdateV2(body: ProductBulkUpdateRequestV2, _options?: Configuration): Observable<ProductBulkUpdateResponseV2> {
        return this.productBulkUpdateV2WithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<ProductBulkUpdateResponseV2>) => apiResponse.data));
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
     * @param body 
     */
    public productCreateAttributeOptionsWithHttpInfo(body: EntitymanagerCreateAttributeOptionsRequest, _options?: Configuration): Observable<HttpInfo<EntitymanagerCreateAttributeOptionsResponse>> {
        const requestContextPromise = this.requestFactory.productCreateAttributeOptions(body, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productCreateAttributeOptionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public productCreateAttributeOptions(body: EntitymanagerCreateAttributeOptionsRequest, _options?: Configuration): Observable<EntitymanagerCreateAttributeOptionsResponse> {
        return this.productCreateAttributeOptionsWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<EntitymanagerCreateAttributeOptionsResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public productCreateEntityWithHttpInfo(body: EntitymanagerEntity, _options?: Configuration): Observable<HttpInfo<EntitymanagerCreateEntityResponse>> {
        const requestContextPromise = this.requestFactory.productCreateEntity(body, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productCreateEntityWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public productCreateEntity(body: EntitymanagerEntity, _options?: Configuration): Observable<EntitymanagerCreateEntityResponse> {
        return this.productCreateEntityWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<EntitymanagerCreateEntityResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public productCreateOptionsListWithHttpInfo(body: EntitymanagerCreateOptionsListRequest, _options?: Configuration): Observable<HttpInfo<EntitymanagerCreateOptionsListResponse>> {
        const requestContextPromise = this.requestFactory.productCreateOptionsList(body, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productCreateOptionsListWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public productCreateOptionsList(body: EntitymanagerCreateOptionsListRequest, _options?: Configuration): Observable<EntitymanagerCreateOptionsListResponse> {
        return this.productCreateOptionsListWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<EntitymanagerCreateOptionsListResponse>) => apiResponse.data));
    }

    /**
     * @param body 
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
     * @param body 
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
     * @param body 
     */
    public productGetAttributeOptionWithHttpInfo(body: EntitymanagerGetAttributeOptionRequest, _options?: Configuration): Observable<HttpInfo<EntitymanagerGetAttributeOptionResponse>> {
        const requestContextPromise = this.requestFactory.productGetAttributeOption(body, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productGetAttributeOptionWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public productGetAttributeOption(body: EntitymanagerGetAttributeOptionRequest, _options?: Configuration): Observable<EntitymanagerGetAttributeOptionResponse> {
        return this.productGetAttributeOptionWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<EntitymanagerGetAttributeOptionResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public productGetAttributeOptionsWithHttpInfo(body: EntitymanagerGetAttributeOptionsRequest, _options?: Configuration): Observable<HttpInfo<EntitymanagerGetAttributeOptionsResponse>> {
        const requestContextPromise = this.requestFactory.productGetAttributeOptions(body, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productGetAttributeOptionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public productGetAttributeOptions(body: EntitymanagerGetAttributeOptionsRequest, _options?: Configuration): Observable<EntitymanagerGetAttributeOptionsResponse> {
        return this.productGetAttributeOptionsWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<EntitymanagerGetAttributeOptionsResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public productGetEntityWithHttpInfo(body: EntitymanagerEntityRequest, _options?: Configuration): Observable<HttpInfo<EntitymanagerEntity>> {
        const requestContextPromise = this.requestFactory.productGetEntity(body, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productGetEntityWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public productGetEntity(body: EntitymanagerEntityRequest, _options?: Configuration): Observable<EntitymanagerEntity> {
        return this.productGetEntityWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<EntitymanagerEntity>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public productGetOptionsListWithHttpInfo(body: EntitymanagerGetOptionsListRequest, _options?: Configuration): Observable<HttpInfo<EntitymanagerGetOptionsListResponse>> {
        const requestContextPromise = this.requestFactory.productGetOptionsList(body, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productGetOptionsListWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public productGetOptionsList(body: EntitymanagerGetOptionsListRequest, _options?: Configuration): Observable<EntitymanagerGetOptionsListResponse> {
        return this.productGetOptionsListWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<EntitymanagerGetOptionsListResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public productGetProductWithHttpInfo(body: ProductGetProductRequest, _options?: Configuration): Observable<HttpInfo<ProductGetProductResponse>> {
        const requestContextPromise = this.requestFactory.productGetProduct(body, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productGetProductWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public productGetProduct(body: ProductGetProductRequest, _options?: Configuration): Observable<ProductGetProductResponse> {
        return this.productGetProductWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<ProductGetProductResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public productGetProductByCodeWithHttpInfo(body: ProductGetProductByCodeRequest, _options?: Configuration): Observable<HttpInfo<ProductGetProductByCodeResponse>> {
        const requestContextPromise = this.requestFactory.productGetProductByCode(body, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productGetProductByCodeWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public productGetProductByCode(body: ProductGetProductByCodeRequest, _options?: Configuration): Observable<ProductGetProductByCodeResponse> {
        return this.productGetProductByCodeWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<ProductGetProductByCodeResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public productGetProductByUrlKeyWithHttpInfo(body: ProductGetProductByUrlKeyRequest, _options?: Configuration): Observable<HttpInfo<ProductGetProductByUrlKeyResponse>> {
        const requestContextPromise = this.requestFactory.productGetProductByUrlKey(body, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productGetProductByUrlKeyWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public productGetProductByUrlKey(body: ProductGetProductByUrlKeyRequest, _options?: Configuration): Observable<ProductGetProductByUrlKeyResponse> {
        return this.productGetProductByUrlKeyWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<ProductGetProductByUrlKeyResponse>) => apiResponse.data));
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
    public productListAttributeOptionsWithHttpInfo(body: EntitymanagerListAttributeOptionsRequest, _options?: Configuration): Observable<HttpInfo<EntitymanagerListAttributeOptionsResponse>> {
        const requestContextPromise = this.requestFactory.productListAttributeOptions(body, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productListAttributeOptionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public productListAttributeOptions(body: EntitymanagerListAttributeOptionsRequest, _options?: Configuration): Observable<EntitymanagerListAttributeOptionsResponse> {
        return this.productListAttributeOptionsWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<EntitymanagerListAttributeOptionsResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public productListEntitiesWithHttpInfo(body: EntitymanagerListEntitiesRequest, _options?: Configuration): Observable<HttpInfo<EntitymanagerListEntitiesResponse>> {
        const requestContextPromise = this.requestFactory.productListEntities(body, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productListEntitiesWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public productListEntities(body: EntitymanagerListEntitiesRequest, _options?: Configuration): Observable<EntitymanagerListEntitiesResponse> {
        return this.productListEntitiesWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<EntitymanagerListEntitiesResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public productListOptionsListsWithHttpInfo(body: EntitymanagerListOptionsListsRequest, _options?: Configuration): Observable<HttpInfo<EntitymanagerListOptionsListsResponse>> {
        const requestContextPromise = this.requestFactory.productListOptionsLists(body, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productListOptionsListsWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public productListOptionsLists(body: EntitymanagerListOptionsListsRequest, _options?: Configuration): Observable<EntitymanagerListOptionsListsResponse> {
        return this.productListOptionsListsWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<EntitymanagerListOptionsListsResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public productListProductsWithHttpInfo(body: ProductListProductsRequest, _options?: Configuration): Observable<HttpInfo<ProductListProductsResponse>> {
        const requestContextPromise = this.requestFactory.productListProducts(body, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productListProductsWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public productListProducts(body: ProductListProductsRequest, _options?: Configuration): Observable<ProductListProductsResponse> {
        return this.productListProductsWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<ProductListProductsResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public productListProductsByIdsWithHttpInfo(body: ProductListProductsByIdsRequest, _options?: Configuration): Observable<HttpInfo<ProductListProductsByIdsResponse>> {
        const requestContextPromise = this.requestFactory.productListProductsByIds(body, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productListProductsByIdsWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public productListProductsByIds(body: ProductListProductsByIdsRequest, _options?: Configuration): Observable<ProductListProductsByIdsResponse> {
        return this.productListProductsByIdsWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<ProductListProductsByIdsResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public productListProductsBySkuWithHttpInfo(body: ProductListProductsBySkuRequest, _options?: Configuration): Observable<HttpInfo<ProductListProductsBySkuResponse>> {
        const requestContextPromise = this.requestFactory.productListProductsBySku(body, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productListProductsBySkuWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public productListProductsBySku(body: ProductListProductsBySkuRequest, _options?: Configuration): Observable<ProductListProductsBySkuResponse> {
        return this.productListProductsBySkuWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<ProductListProductsBySkuResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public productListVariantsBySkuWithHttpInfo(body: ProductListVariantsBySkuRequest, _options?: Configuration): Observable<HttpInfo<ProductListVariantsBySkuResponse>> {
        const requestContextPromise = this.requestFactory.productListVariantsBySku(body, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productListVariantsBySkuWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public productListVariantsBySku(body: ProductListVariantsBySkuRequest, _options?: Configuration): Observable<ProductListVariantsBySkuResponse> {
        return this.productListVariantsBySkuWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<ProductListVariantsBySkuResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public productRemoveMediaGalleryEntryWithHttpInfo(body: ProductRemoveMediaGalleryEntryRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.productRemoveMediaGalleryEntry(body, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productRemoveMediaGalleryEntryWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public productRemoveMediaGalleryEntry(body: ProductRemoveMediaGalleryEntryRequest, _options?: Configuration): Observable<any> {
        return this.productRemoveMediaGalleryEntryWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
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
     * rpc GetAttributeOptionByCode (product.entitymanager.GetAttributeOptionByCodeRequest) returns (product.entitymanager.GetAttributeOptionByCodeResponse) {}
     * @param body 
     */
    public productUpdateAttributeOptionsWithHttpInfo(body: EntitymanagerUpdateAttributeOptionsRequest, _options?: Configuration): Observable<HttpInfo<EntitymanagerUpdateAttributeOptionsResponse>> {
        const requestContextPromise = this.requestFactory.productUpdateAttributeOptions(body, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productUpdateAttributeOptionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * rpc GetAttributeOptionByCode (product.entitymanager.GetAttributeOptionByCodeRequest) returns (product.entitymanager.GetAttributeOptionByCodeResponse) {}
     * @param body 
     */
    public productUpdateAttributeOptions(body: EntitymanagerUpdateAttributeOptionsRequest, _options?: Configuration): Observable<EntitymanagerUpdateAttributeOptionsResponse> {
        return this.productUpdateAttributeOptionsWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<EntitymanagerUpdateAttributeOptionsResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public productUpdateMediaGalleryEntryWithHttpInfo(body: ProductUpdateMediaGalleryEntryRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.productUpdateMediaGalleryEntry(body, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productUpdateMediaGalleryEntryWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public productUpdateMediaGalleryEntry(body: ProductUpdateMediaGalleryEntryRequest, _options?: Configuration): Observable<any> {
        return this.productUpdateMediaGalleryEntryWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public productUpdateOptionsListWithHttpInfo(body: EntitymanagerUpdateOptionsListRequest, _options?: Configuration): Observable<HttpInfo<EntitymanagerUpdateOptionsListResponse>> {
        const requestContextPromise = this.requestFactory.productUpdateOptionsList(body, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productUpdateOptionsListWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public productUpdateOptionsList(body: EntitymanagerUpdateOptionsListRequest, _options?: Configuration): Observable<EntitymanagerUpdateOptionsListResponse> {
        return this.productUpdateOptionsListWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<EntitymanagerUpdateOptionsListResponse>) => apiResponse.data));
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

}
