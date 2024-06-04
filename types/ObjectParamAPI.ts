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

export interface ProductApiProductAddMediaGalleryEntryRequest {
    /**
     * 
     * @type ProductAddMediaGalleryEntryRequest
     * @memberof ProductApiproductAddMediaGalleryEntry
     */
    body: ProductAddMediaGalleryEntryRequest
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

export interface ProductApiProductBulkUpdateV2Request {
    /**
     * 
     * @type ProductBulkUpdateRequestV2
     * @memberof ProductApiproductBulkUpdateV2
     */
    body: ProductBulkUpdateRequestV2
}

export interface ProductApiProductCreateAttributeGroupRequest {
    /**
     * 
     * @type EntitymanagerCreateAttributeGroupRequest
     * @memberof ProductApiproductCreateAttributeGroup
     */
    body: EntitymanagerCreateAttributeGroupRequest
}

export interface ProductApiProductCreateAttributeOptionsRequest {
    /**
     * 
     * @type EntitymanagerCreateAttributeOptionsRequest
     * @memberof ProductApiproductCreateAttributeOptions
     */
    body: EntitymanagerCreateAttributeOptionsRequest
}

export interface ProductApiProductCreateEntityRequest {
    /**
     * 
     * @type EntitymanagerEntity
     * @memberof ProductApiproductCreateEntity
     */
    body: EntitymanagerEntity
}

export interface ProductApiProductCreateOptionsListRequest {
    /**
     * 
     * @type EntitymanagerCreateOptionsListRequest
     * @memberof ProductApiproductCreateOptionsList
     */
    body: EntitymanagerCreateOptionsListRequest
}

export interface ProductApiProductCreateProductRequest {
    /**
     * 
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

export interface ProductApiProductGetAttributeOptionRequest {
    /**
     * 
     * @type EntitymanagerGetAttributeOptionRequest
     * @memberof ProductApiproductGetAttributeOption
     */
    body: EntitymanagerGetAttributeOptionRequest
}

export interface ProductApiProductGetAttributeOptionsRequest {
    /**
     * 
     * @type EntitymanagerGetAttributeOptionsRequest
     * @memberof ProductApiproductGetAttributeOptions
     */
    body: EntitymanagerGetAttributeOptionsRequest
}

export interface ProductApiProductGetEntityRequest {
    /**
     * 
     * @type EntitymanagerEntityRequest
     * @memberof ProductApiproductGetEntity
     */
    body: EntitymanagerEntityRequest
}

export interface ProductApiProductGetOptionsListRequest {
    /**
     * 
     * @type EntitymanagerGetOptionsListRequest
     * @memberof ProductApiproductGetOptionsList
     */
    body: EntitymanagerGetOptionsListRequest
}

export interface ProductApiProductGetProductRequest {
    /**
     * 
     * @type ProductGetProductRequest
     * @memberof ProductApiproductGetProduct
     */
    body: ProductGetProductRequest
}

export interface ProductApiProductGetProductByCodeRequest {
    /**
     * 
     * @type ProductGetProductByCodeRequest
     * @memberof ProductApiproductGetProductByCode
     */
    body: ProductGetProductByCodeRequest
}

export interface ProductApiProductGetProductByUrlKeyRequest {
    /**
     * 
     * @type ProductGetProductByUrlKeyRequest
     * @memberof ProductApiproductGetProductByUrlKey
     */
    body: ProductGetProductByUrlKeyRequest
}

export interface ProductApiProductListAttributeGroupsRequest {
    /**
     * 
     * @type EntitymanagerListAttributeGroupsRequest
     * @memberof ProductApiproductListAttributeGroups
     */
    body: EntitymanagerListAttributeGroupsRequest
}

export interface ProductApiProductListAttributeOptionsRequest {
    /**
     * 
     * @type EntitymanagerListAttributeOptionsRequest
     * @memberof ProductApiproductListAttributeOptions
     */
    body: EntitymanagerListAttributeOptionsRequest
}

export interface ProductApiProductListEntitiesRequest {
    /**
     * 
     * @type EntitymanagerListEntitiesRequest
     * @memberof ProductApiproductListEntities
     */
    body: EntitymanagerListEntitiesRequest
}

export interface ProductApiProductListOptionsListsRequest {
    /**
     * 
     * @type EntitymanagerListOptionsListsRequest
     * @memberof ProductApiproductListOptionsLists
     */
    body: EntitymanagerListOptionsListsRequest
}

export interface ProductApiProductListProductsRequest {
    /**
     * 
     * @type ProductListProductsRequest
     * @memberof ProductApiproductListProducts
     */
    body: ProductListProductsRequest
}

export interface ProductApiProductListProductsByIdsRequest {
    /**
     * 
     * @type ProductListProductsByIdsRequest
     * @memberof ProductApiproductListProductsByIds
     */
    body: ProductListProductsByIdsRequest
}

export interface ProductApiProductListProductsBySkuRequest {
    /**
     * 
     * @type ProductListProductsBySkuRequest
     * @memberof ProductApiproductListProductsBySku
     */
    body: ProductListProductsBySkuRequest
}

export interface ProductApiProductListVariantsBySkuRequest {
    /**
     * 
     * @type ProductListVariantsBySkuRequest
     * @memberof ProductApiproductListVariantsBySku
     */
    body: ProductListVariantsBySkuRequest
}

export interface ProductApiProductRemoveMediaGalleryEntryRequest {
    /**
     * 
     * @type ProductRemoveMediaGalleryEntryRequest
     * @memberof ProductApiproductRemoveMediaGalleryEntry
     */
    body: ProductRemoveMediaGalleryEntryRequest
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

export interface ProductApiProductUpdateAttributeOptionsRequest {
    /**
     * 
     * @type EntitymanagerUpdateAttributeOptionsRequest
     * @memberof ProductApiproductUpdateAttributeOptions
     */
    body: EntitymanagerUpdateAttributeOptionsRequest
}

export interface ProductApiProductUpdateMediaGalleryEntryRequest {
    /**
     * 
     * @type ProductUpdateMediaGalleryEntryRequest
     * @memberof ProductApiproductUpdateMediaGalleryEntry
     */
    body: ProductUpdateMediaGalleryEntryRequest
}

export interface ProductApiProductUpdateOptionsListRequest {
    /**
     * 
     * @type EntitymanagerUpdateOptionsListRequest
     * @memberof ProductApiproductUpdateOptionsList
     */
    body: EntitymanagerUpdateOptionsListRequest
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

export class ObjectProductApi {
    private api: ObservableProductApi

    public constructor(configuration: Configuration, requestFactory?: ProductApiRequestFactory, responseProcessor?: ProductApiResponseProcessor) {
        this.api = new ObservableProductApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public productAddMediaGalleryEntryWithHttpInfo(param: ProductApiProductAddMediaGalleryEntryRequest, options?: Configuration): Promise<HttpInfo<ProductAddMediaGalleryEntryResponse>> {
        return this.api.productAddMediaGalleryEntryWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productAddMediaGalleryEntry(param: ProductApiProductAddMediaGalleryEntryRequest, options?: Configuration): Promise<ProductAddMediaGalleryEntryResponse> {
        return this.api.productAddMediaGalleryEntry(param.body,  options).toPromise();
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
     * @param param the request object
     */
    public productBulkCreateAttributeWithHttpInfo(param: ProductApiProductBulkCreateAttributeRequest, options?: Configuration): Promise<HttpInfo<EntitymanagerBulkCreateAttributeResponse>> {
        return this.api.productBulkCreateAttributeWithHttpInfo(param.body,  options).toPromise();
    }

    /**
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
    public productBulkUpdateV2WithHttpInfo(param: ProductApiProductBulkUpdateV2Request, options?: Configuration): Promise<HttpInfo<ProductBulkUpdateResponseV2>> {
        return this.api.productBulkUpdateV2WithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productBulkUpdateV2(param: ProductApiProductBulkUpdateV2Request, options?: Configuration): Promise<ProductBulkUpdateResponseV2> {
        return this.api.productBulkUpdateV2(param.body,  options).toPromise();
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
    public productCreateAttributeOptionsWithHttpInfo(param: ProductApiProductCreateAttributeOptionsRequest, options?: Configuration): Promise<HttpInfo<EntitymanagerCreateAttributeOptionsResponse>> {
        return this.api.productCreateAttributeOptionsWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productCreateAttributeOptions(param: ProductApiProductCreateAttributeOptionsRequest, options?: Configuration): Promise<EntitymanagerCreateAttributeOptionsResponse> {
        return this.api.productCreateAttributeOptions(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productCreateEntityWithHttpInfo(param: ProductApiProductCreateEntityRequest, options?: Configuration): Promise<HttpInfo<EntitymanagerCreateEntityResponse>> {
        return this.api.productCreateEntityWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productCreateEntity(param: ProductApiProductCreateEntityRequest, options?: Configuration): Promise<EntitymanagerCreateEntityResponse> {
        return this.api.productCreateEntity(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productCreateOptionsListWithHttpInfo(param: ProductApiProductCreateOptionsListRequest, options?: Configuration): Promise<HttpInfo<EntitymanagerCreateOptionsListResponse>> {
        return this.api.productCreateOptionsListWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productCreateOptionsList(param: ProductApiProductCreateOptionsListRequest, options?: Configuration): Promise<EntitymanagerCreateOptionsListResponse> {
        return this.api.productCreateOptionsList(param.body,  options).toPromise();
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
     * @param param the request object
     */
    public productGetAttributeOptionWithHttpInfo(param: ProductApiProductGetAttributeOptionRequest, options?: Configuration): Promise<HttpInfo<EntitymanagerGetAttributeOptionResponse>> {
        return this.api.productGetAttributeOptionWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productGetAttributeOption(param: ProductApiProductGetAttributeOptionRequest, options?: Configuration): Promise<EntitymanagerGetAttributeOptionResponse> {
        return this.api.productGetAttributeOption(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productGetAttributeOptionsWithHttpInfo(param: ProductApiProductGetAttributeOptionsRequest, options?: Configuration): Promise<HttpInfo<EntitymanagerGetAttributeOptionsResponse>> {
        return this.api.productGetAttributeOptionsWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productGetAttributeOptions(param: ProductApiProductGetAttributeOptionsRequest, options?: Configuration): Promise<EntitymanagerGetAttributeOptionsResponse> {
        return this.api.productGetAttributeOptions(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productGetEntityWithHttpInfo(param: ProductApiProductGetEntityRequest, options?: Configuration): Promise<HttpInfo<EntitymanagerEntity>> {
        return this.api.productGetEntityWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productGetEntity(param: ProductApiProductGetEntityRequest, options?: Configuration): Promise<EntitymanagerEntity> {
        return this.api.productGetEntity(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productGetOptionsListWithHttpInfo(param: ProductApiProductGetOptionsListRequest, options?: Configuration): Promise<HttpInfo<EntitymanagerGetOptionsListResponse>> {
        return this.api.productGetOptionsListWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productGetOptionsList(param: ProductApiProductGetOptionsListRequest, options?: Configuration): Promise<EntitymanagerGetOptionsListResponse> {
        return this.api.productGetOptionsList(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productGetProductWithHttpInfo(param: ProductApiProductGetProductRequest, options?: Configuration): Promise<HttpInfo<ProductGetProductResponse>> {
        return this.api.productGetProductWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productGetProduct(param: ProductApiProductGetProductRequest, options?: Configuration): Promise<ProductGetProductResponse> {
        return this.api.productGetProduct(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productGetProductByCodeWithHttpInfo(param: ProductApiProductGetProductByCodeRequest, options?: Configuration): Promise<HttpInfo<ProductGetProductByCodeResponse>> {
        return this.api.productGetProductByCodeWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productGetProductByCode(param: ProductApiProductGetProductByCodeRequest, options?: Configuration): Promise<ProductGetProductByCodeResponse> {
        return this.api.productGetProductByCode(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productGetProductByUrlKeyWithHttpInfo(param: ProductApiProductGetProductByUrlKeyRequest, options?: Configuration): Promise<HttpInfo<ProductGetProductByUrlKeyResponse>> {
        return this.api.productGetProductByUrlKeyWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productGetProductByUrlKey(param: ProductApiProductGetProductByUrlKeyRequest, options?: Configuration): Promise<ProductGetProductByUrlKeyResponse> {
        return this.api.productGetProductByUrlKey(param.body,  options).toPromise();
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
    public productListAttributeOptionsWithHttpInfo(param: ProductApiProductListAttributeOptionsRequest, options?: Configuration): Promise<HttpInfo<EntitymanagerListAttributeOptionsResponse>> {
        return this.api.productListAttributeOptionsWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productListAttributeOptions(param: ProductApiProductListAttributeOptionsRequest, options?: Configuration): Promise<EntitymanagerListAttributeOptionsResponse> {
        return this.api.productListAttributeOptions(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productListEntitiesWithHttpInfo(param: ProductApiProductListEntitiesRequest, options?: Configuration): Promise<HttpInfo<EntitymanagerListEntitiesResponse>> {
        return this.api.productListEntitiesWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productListEntities(param: ProductApiProductListEntitiesRequest, options?: Configuration): Promise<EntitymanagerListEntitiesResponse> {
        return this.api.productListEntities(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productListOptionsListsWithHttpInfo(param: ProductApiProductListOptionsListsRequest, options?: Configuration): Promise<HttpInfo<EntitymanagerListOptionsListsResponse>> {
        return this.api.productListOptionsListsWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productListOptionsLists(param: ProductApiProductListOptionsListsRequest, options?: Configuration): Promise<EntitymanagerListOptionsListsResponse> {
        return this.api.productListOptionsLists(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productListProductsWithHttpInfo(param: ProductApiProductListProductsRequest, options?: Configuration): Promise<HttpInfo<ProductListProductsResponse>> {
        return this.api.productListProductsWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productListProducts(param: ProductApiProductListProductsRequest, options?: Configuration): Promise<ProductListProductsResponse> {
        return this.api.productListProducts(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productListProductsByIdsWithHttpInfo(param: ProductApiProductListProductsByIdsRequest, options?: Configuration): Promise<HttpInfo<ProductListProductsByIdsResponse>> {
        return this.api.productListProductsByIdsWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productListProductsByIds(param: ProductApiProductListProductsByIdsRequest, options?: Configuration): Promise<ProductListProductsByIdsResponse> {
        return this.api.productListProductsByIds(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productListProductsBySkuWithHttpInfo(param: ProductApiProductListProductsBySkuRequest, options?: Configuration): Promise<HttpInfo<ProductListProductsBySkuResponse>> {
        return this.api.productListProductsBySkuWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productListProductsBySku(param: ProductApiProductListProductsBySkuRequest, options?: Configuration): Promise<ProductListProductsBySkuResponse> {
        return this.api.productListProductsBySku(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productListVariantsBySkuWithHttpInfo(param: ProductApiProductListVariantsBySkuRequest, options?: Configuration): Promise<HttpInfo<ProductListVariantsBySkuResponse>> {
        return this.api.productListVariantsBySkuWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productListVariantsBySku(param: ProductApiProductListVariantsBySkuRequest, options?: Configuration): Promise<ProductListVariantsBySkuResponse> {
        return this.api.productListVariantsBySku(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productRemoveMediaGalleryEntryWithHttpInfo(param: ProductApiProductRemoveMediaGalleryEntryRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.productRemoveMediaGalleryEntryWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productRemoveMediaGalleryEntry(param: ProductApiProductRemoveMediaGalleryEntryRequest, options?: Configuration): Promise<any> {
        return this.api.productRemoveMediaGalleryEntry(param.body,  options).toPromise();
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
     * rpc GetAttributeOptionByCode (product.entitymanager.GetAttributeOptionByCodeRequest) returns (product.entitymanager.GetAttributeOptionByCodeResponse) {}
     * @param param the request object
     */
    public productUpdateAttributeOptionsWithHttpInfo(param: ProductApiProductUpdateAttributeOptionsRequest, options?: Configuration): Promise<HttpInfo<EntitymanagerUpdateAttributeOptionsResponse>> {
        return this.api.productUpdateAttributeOptionsWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * rpc GetAttributeOptionByCode (product.entitymanager.GetAttributeOptionByCodeRequest) returns (product.entitymanager.GetAttributeOptionByCodeResponse) {}
     * @param param the request object
     */
    public productUpdateAttributeOptions(param: ProductApiProductUpdateAttributeOptionsRequest, options?: Configuration): Promise<EntitymanagerUpdateAttributeOptionsResponse> {
        return this.api.productUpdateAttributeOptions(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productUpdateMediaGalleryEntryWithHttpInfo(param: ProductApiProductUpdateMediaGalleryEntryRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.productUpdateMediaGalleryEntryWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productUpdateMediaGalleryEntry(param: ProductApiProductUpdateMediaGalleryEntryRequest, options?: Configuration): Promise<any> {
        return this.api.productUpdateMediaGalleryEntry(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productUpdateOptionsListWithHttpInfo(param: ProductApiProductUpdateOptionsListRequest, options?: Configuration): Promise<HttpInfo<EntitymanagerUpdateOptionsListResponse>> {
        return this.api.productUpdateOptionsListWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public productUpdateOptionsList(param: ProductApiProductUpdateOptionsListRequest, options?: Configuration): Promise<EntitymanagerUpdateOptionsListResponse> {
        return this.api.productUpdateOptionsList(param.body,  options).toPromise();
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

}
