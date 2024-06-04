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
     * @param body 
     */
    public productAddMediaGalleryEntryWithHttpInfo(body: ProductAddMediaGalleryEntryRequest, _options?: Configuration): Promise<HttpInfo<ProductAddMediaGalleryEntryResponse>> {
        const result = this.api.productAddMediaGalleryEntryWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public productAddMediaGalleryEntry(body: ProductAddMediaGalleryEntryRequest, _options?: Configuration): Promise<ProductAddMediaGalleryEntryResponse> {
        const result = this.api.productAddMediaGalleryEntry(body, _options);
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
     * @param body 
     */
    public productBulkCreateAttributeWithHttpInfo(body: EntitymanagerBulkCreateAttributeRequest, _options?: Configuration): Promise<HttpInfo<EntitymanagerBulkCreateAttributeResponse>> {
        const result = this.api.productBulkCreateAttributeWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
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
    public productBulkUpdateV2WithHttpInfo(body: ProductBulkUpdateRequestV2, _options?: Configuration): Promise<HttpInfo<ProductBulkUpdateResponseV2>> {
        const result = this.api.productBulkUpdateV2WithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public productBulkUpdateV2(body: ProductBulkUpdateRequestV2, _options?: Configuration): Promise<ProductBulkUpdateResponseV2> {
        const result = this.api.productBulkUpdateV2(body, _options);
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
     * @param body 
     */
    public productCreateAttributeOptionsWithHttpInfo(body: EntitymanagerCreateAttributeOptionsRequest, _options?: Configuration): Promise<HttpInfo<EntitymanagerCreateAttributeOptionsResponse>> {
        const result = this.api.productCreateAttributeOptionsWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public productCreateAttributeOptions(body: EntitymanagerCreateAttributeOptionsRequest, _options?: Configuration): Promise<EntitymanagerCreateAttributeOptionsResponse> {
        const result = this.api.productCreateAttributeOptions(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public productCreateEntityWithHttpInfo(body: EntitymanagerEntity, _options?: Configuration): Promise<HttpInfo<EntitymanagerCreateEntityResponse>> {
        const result = this.api.productCreateEntityWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public productCreateEntity(body: EntitymanagerEntity, _options?: Configuration): Promise<EntitymanagerCreateEntityResponse> {
        const result = this.api.productCreateEntity(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public productCreateOptionsListWithHttpInfo(body: EntitymanagerCreateOptionsListRequest, _options?: Configuration): Promise<HttpInfo<EntitymanagerCreateOptionsListResponse>> {
        const result = this.api.productCreateOptionsListWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public productCreateOptionsList(body: EntitymanagerCreateOptionsListRequest, _options?: Configuration): Promise<EntitymanagerCreateOptionsListResponse> {
        const result = this.api.productCreateOptionsList(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public productCreateProductWithHttpInfo(body: ProductCreateProductRequest, _options?: Configuration): Promise<HttpInfo<ProductCreateProductResponse>> {
        const result = this.api.productCreateProductWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
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
     * @param body 
     */
    public productGetAttributeOptionWithHttpInfo(body: EntitymanagerGetAttributeOptionRequest, _options?: Configuration): Promise<HttpInfo<EntitymanagerGetAttributeOptionResponse>> {
        const result = this.api.productGetAttributeOptionWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public productGetAttributeOption(body: EntitymanagerGetAttributeOptionRequest, _options?: Configuration): Promise<EntitymanagerGetAttributeOptionResponse> {
        const result = this.api.productGetAttributeOption(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public productGetAttributeOptionsWithHttpInfo(body: EntitymanagerGetAttributeOptionsRequest, _options?: Configuration): Promise<HttpInfo<EntitymanagerGetAttributeOptionsResponse>> {
        const result = this.api.productGetAttributeOptionsWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public productGetAttributeOptions(body: EntitymanagerGetAttributeOptionsRequest, _options?: Configuration): Promise<EntitymanagerGetAttributeOptionsResponse> {
        const result = this.api.productGetAttributeOptions(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public productGetEntityWithHttpInfo(body: EntitymanagerEntityRequest, _options?: Configuration): Promise<HttpInfo<EntitymanagerEntity>> {
        const result = this.api.productGetEntityWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public productGetEntity(body: EntitymanagerEntityRequest, _options?: Configuration): Promise<EntitymanagerEntity> {
        const result = this.api.productGetEntity(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public productGetOptionsListWithHttpInfo(body: EntitymanagerGetOptionsListRequest, _options?: Configuration): Promise<HttpInfo<EntitymanagerGetOptionsListResponse>> {
        const result = this.api.productGetOptionsListWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public productGetOptionsList(body: EntitymanagerGetOptionsListRequest, _options?: Configuration): Promise<EntitymanagerGetOptionsListResponse> {
        const result = this.api.productGetOptionsList(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public productGetProductWithHttpInfo(body: ProductGetProductRequest, _options?: Configuration): Promise<HttpInfo<ProductGetProductResponse>> {
        const result = this.api.productGetProductWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public productGetProduct(body: ProductGetProductRequest, _options?: Configuration): Promise<ProductGetProductResponse> {
        const result = this.api.productGetProduct(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public productGetProductByCodeWithHttpInfo(body: ProductGetProductByCodeRequest, _options?: Configuration): Promise<HttpInfo<ProductGetProductByCodeResponse>> {
        const result = this.api.productGetProductByCodeWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public productGetProductByCode(body: ProductGetProductByCodeRequest, _options?: Configuration): Promise<ProductGetProductByCodeResponse> {
        const result = this.api.productGetProductByCode(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public productGetProductByUrlKeyWithHttpInfo(body: ProductGetProductByUrlKeyRequest, _options?: Configuration): Promise<HttpInfo<ProductGetProductByUrlKeyResponse>> {
        const result = this.api.productGetProductByUrlKeyWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public productGetProductByUrlKey(body: ProductGetProductByUrlKeyRequest, _options?: Configuration): Promise<ProductGetProductByUrlKeyResponse> {
        const result = this.api.productGetProductByUrlKey(body, _options);
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
    public productListAttributeOptionsWithHttpInfo(body: EntitymanagerListAttributeOptionsRequest, _options?: Configuration): Promise<HttpInfo<EntitymanagerListAttributeOptionsResponse>> {
        const result = this.api.productListAttributeOptionsWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public productListAttributeOptions(body: EntitymanagerListAttributeOptionsRequest, _options?: Configuration): Promise<EntitymanagerListAttributeOptionsResponse> {
        const result = this.api.productListAttributeOptions(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public productListEntitiesWithHttpInfo(body: EntitymanagerListEntitiesRequest, _options?: Configuration): Promise<HttpInfo<EntitymanagerListEntitiesResponse>> {
        const result = this.api.productListEntitiesWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public productListEntities(body: EntitymanagerListEntitiesRequest, _options?: Configuration): Promise<EntitymanagerListEntitiesResponse> {
        const result = this.api.productListEntities(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public productListOptionsListsWithHttpInfo(body: EntitymanagerListOptionsListsRequest, _options?: Configuration): Promise<HttpInfo<EntitymanagerListOptionsListsResponse>> {
        const result = this.api.productListOptionsListsWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public productListOptionsLists(body: EntitymanagerListOptionsListsRequest, _options?: Configuration): Promise<EntitymanagerListOptionsListsResponse> {
        const result = this.api.productListOptionsLists(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public productListProductsWithHttpInfo(body: ProductListProductsRequest, _options?: Configuration): Promise<HttpInfo<ProductListProductsResponse>> {
        const result = this.api.productListProductsWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public productListProducts(body: ProductListProductsRequest, _options?: Configuration): Promise<ProductListProductsResponse> {
        const result = this.api.productListProducts(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public productListProductsByIdsWithHttpInfo(body: ProductListProductsByIdsRequest, _options?: Configuration): Promise<HttpInfo<ProductListProductsByIdsResponse>> {
        const result = this.api.productListProductsByIdsWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public productListProductsByIds(body: ProductListProductsByIdsRequest, _options?: Configuration): Promise<ProductListProductsByIdsResponse> {
        const result = this.api.productListProductsByIds(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public productListProductsBySkuWithHttpInfo(body: ProductListProductsBySkuRequest, _options?: Configuration): Promise<HttpInfo<ProductListProductsBySkuResponse>> {
        const result = this.api.productListProductsBySkuWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public productListProductsBySku(body: ProductListProductsBySkuRequest, _options?: Configuration): Promise<ProductListProductsBySkuResponse> {
        const result = this.api.productListProductsBySku(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public productListVariantsBySkuWithHttpInfo(body: ProductListVariantsBySkuRequest, _options?: Configuration): Promise<HttpInfo<ProductListVariantsBySkuResponse>> {
        const result = this.api.productListVariantsBySkuWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public productListVariantsBySku(body: ProductListVariantsBySkuRequest, _options?: Configuration): Promise<ProductListVariantsBySkuResponse> {
        const result = this.api.productListVariantsBySku(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public productRemoveMediaGalleryEntryWithHttpInfo(body: ProductRemoveMediaGalleryEntryRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.productRemoveMediaGalleryEntryWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public productRemoveMediaGalleryEntry(body: ProductRemoveMediaGalleryEntryRequest, _options?: Configuration): Promise<any> {
        const result = this.api.productRemoveMediaGalleryEntry(body, _options);
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
     * rpc GetAttributeOptionByCode (product.entitymanager.GetAttributeOptionByCodeRequest) returns (product.entitymanager.GetAttributeOptionByCodeResponse) {}
     * @param body 
     */
    public productUpdateAttributeOptionsWithHttpInfo(body: EntitymanagerUpdateAttributeOptionsRequest, _options?: Configuration): Promise<HttpInfo<EntitymanagerUpdateAttributeOptionsResponse>> {
        const result = this.api.productUpdateAttributeOptionsWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * rpc GetAttributeOptionByCode (product.entitymanager.GetAttributeOptionByCodeRequest) returns (product.entitymanager.GetAttributeOptionByCodeResponse) {}
     * @param body 
     */
    public productUpdateAttributeOptions(body: EntitymanagerUpdateAttributeOptionsRequest, _options?: Configuration): Promise<EntitymanagerUpdateAttributeOptionsResponse> {
        const result = this.api.productUpdateAttributeOptions(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public productUpdateMediaGalleryEntryWithHttpInfo(body: ProductUpdateMediaGalleryEntryRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.productUpdateMediaGalleryEntryWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public productUpdateMediaGalleryEntry(body: ProductUpdateMediaGalleryEntryRequest, _options?: Configuration): Promise<any> {
        const result = this.api.productUpdateMediaGalleryEntry(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public productUpdateOptionsListWithHttpInfo(body: EntitymanagerUpdateOptionsListRequest, _options?: Configuration): Promise<HttpInfo<EntitymanagerUpdateOptionsListResponse>> {
        const result = this.api.productUpdateOptionsListWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public productUpdateOptionsList(body: EntitymanagerUpdateOptionsListRequest, _options?: Configuration): Promise<EntitymanagerUpdateOptionsListResponse> {
        const result = this.api.productUpdateOptionsList(body, _options);
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


}



