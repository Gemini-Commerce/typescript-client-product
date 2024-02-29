# .ProductApi

All URIs are relative to *https://product.api.gogemini.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**productAddMediaGalleryEntry**](ProductApi.md#productAddMediaGalleryEntry) | **POST** /product.Product/AddMediaGalleryEntry | 
[**productBulkAddAssetsEntries**](ProductApi.md#productBulkAddAssetsEntries) | **POST** /product.Product/BulkAddAssetsEntries | Assets endpoints
[**productBulkCreateAttribute**](ProductApi.md#productBulkCreateAttribute) | **POST** /product.Product/BulkCreateAttribute | 
[**productBulkDeleteProducts**](ProductApi.md#productBulkDeleteProducts) | **POST** /product.Product/BulkDeleteProducts | 
[**productBulkRemoveAssetsEntries**](ProductApi.md#productBulkRemoveAssetsEntries) | **POST** /product.Product/BulkRemoveAssetsEntries | 
[**productBulkUpdate**](ProductApi.md#productBulkUpdate) | **POST** /product.Product/BulkUpdate | 
[**productBulkUpdateAssetsEntries**](ProductApi.md#productBulkUpdateAssetsEntries) | **POST** /product.Product/BulkUpdateAssetsEntries | 
[**productBulkUpdateV2**](ProductApi.md#productBulkUpdateV2) | **POST** /product.Product/BulkUpdateV2 | 
[**productCreateAttributeGroup**](ProductApi.md#productCreateAttributeGroup) | **POST** /product.Product/CreateAttributeGroup | 
[**productCreateAttributeOptions**](ProductApi.md#productCreateAttributeOptions) | **POST** /product.Product/CreateAttributeOptions | 
[**productCreateEntity**](ProductApi.md#productCreateEntity) | **POST** /product.Product/CreateEntity | 
[**productCreateOptionsList**](ProductApi.md#productCreateOptionsList) | **POST** /product.Product/CreateOptionsList | 
[**productCreateProduct**](ProductApi.md#productCreateProduct) | **POST** /product.Product/CreateProduct | 
[**productCreateProductV2**](ProductApi.md#productCreateProductV2) | **POST** /product.Product/CreateProductV2 | 
[**productDelete**](ProductApi.md#productDelete) | **POST** /product.Product/Delete | 
[**productDeleteAttribute**](ProductApi.md#productDeleteAttribute) | **POST** /product.Product/DeleteAttribute | 
[**productDeleteProduct**](ProductApi.md#productDeleteProduct) | **POST** /product.Product/DeleteProduct | 
[**productGetAttributeGroup**](ProductApi.md#productGetAttributeGroup) | **POST** /product.Product/GetAttributeGroup | 
[**productGetAttributeOption**](ProductApi.md#productGetAttributeOption) | **POST** /product.Product/GetAttributeOption | 
[**productGetAttributeOptions**](ProductApi.md#productGetAttributeOptions) | **POST** /product.Product/GetAttributeOptions | 
[**productGetEntity**](ProductApi.md#productGetEntity) | **POST** /product.Product/GetEntity | 
[**productGetOptionsList**](ProductApi.md#productGetOptionsList) | **POST** /product.Product/GetOptionsList | 
[**productGetProduct**](ProductApi.md#productGetProduct) | **POST** /product.Product/GetProduct | 
[**productGetProductByCode**](ProductApi.md#productGetProductByCode) | **POST** /product.Product/GetProductByCode | 
[**productGetProductByUrlKey**](ProductApi.md#productGetProductByUrlKey) | **POST** /product.Product/GetProductByUrlKey | 
[**productListAttributeGroups**](ProductApi.md#productListAttributeGroups) | **POST** /product.Product/ListAttributeGroups | Attribute Groups endpoints
[**productListAttributeOptions**](ProductApi.md#productListAttributeOptions) | **POST** /product.Product/ListAttributeOptions | 
[**productListEntities**](ProductApi.md#productListEntities) | **POST** /product.Product/ListEntities | 
[**productListOptionsLists**](ProductApi.md#productListOptionsLists) | **POST** /product.Product/ListOptionsLists | 
[**productListProducts**](ProductApi.md#productListProducts) | **POST** /product.Product/ListProducts | 
[**productListProductsByIds**](ProductApi.md#productListProductsByIds) | **POST** /product.Product/ListProductsByIds | 
[**productListProductsBySku**](ProductApi.md#productListProductsBySku) | **POST** /product.Product/ListProductsBySku | 
[**productListVariantsBySku**](ProductApi.md#productListVariantsBySku) | **POST** /product.Product/ListVariantsBySku | 
[**productRemoveMediaGalleryEntry**](ProductApi.md#productRemoveMediaGalleryEntry) | **POST** /product.Product/RemoveMediaGalleryEntry | 
[**productUpdateAttribute**](ProductApi.md#productUpdateAttribute) | **POST** /product.Product/UpdateAttribute | 
[**productUpdateAttributeGroup**](ProductApi.md#productUpdateAttributeGroup) | **POST** /product.Product/UpdateAttributeGroup | 
[**productUpdateAttributeOptions**](ProductApi.md#productUpdateAttributeOptions) | **POST** /product.Product/UpdateAttributeOptions | rpc GetAttributeOptionByCode (product.entitymanager.GetAttributeOptionByCodeRequest) returns (product.entitymanager.GetAttributeOptionByCodeResponse) {}
[**productUpdateMediaGalleryEntry**](ProductApi.md#productUpdateMediaGalleryEntry) | **POST** /product.Product/UpdateMediaGalleryEntry | 
[**productUpdateOptionsList**](ProductApi.md#productUpdateOptionsList) | **POST** /product.Product/UpdateOptionsList | 
[**productUpdateProduct**](ProductApi.md#productUpdateProduct) | **POST** /product.Product/UpdateProduct | 
[**productUpdateProductV2**](ProductApi.md#productUpdateProductV2) | **POST** /product.Product/UpdateProductV2 | 


# **productAddMediaGalleryEntry**
> ProductAddMediaGalleryEntryResponse productAddMediaGalleryEntry(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductApi(configuration);

let body:.ProductApiProductAddMediaGalleryEntryRequest = {
  // ProductAddMediaGalleryEntryRequest
  body: {
    tenantId: "tenantId_example",
    productId: "productId_example",
    assetGrn: "assetGrn_example",
    position: 1,
    metadata: [
      {
        roles: [
          "roles_example",
        ],
        alt: {
          value: {
            "key": "key_example",
          },
        },
      },
    ],
  },
};

apiInstance.productAddMediaGalleryEntry(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ProductAddMediaGalleryEntryRequest**|  |


### Return type

**ProductAddMediaGalleryEntryResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **productBulkAddAssetsEntries**
> ProductBulkAddAssetsEntriesResponse productBulkAddAssetsEntries(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductApi(configuration);

let body:.ProductApiProductBulkAddAssetsEntriesRequest = {
  // ProductBulkAddAssetsEntriesRequest
  body: {
    tenantId: "tenantId_example",
    productId: "productId_example",
    assets: [
      {
        assetGrn: "assetGrn_example",
        localizedAssetGrn: {
          value: {
            "key": "key_example",
          },
        },
        position: 1,
        metadata: [
          {
            roles: [
              "roles_example",
            ],
            alt: {
              value: {
                "key": "key_example",
              },
            },
          },
        ],
      },
    ],
  },
};

apiInstance.productBulkAddAssetsEntries(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ProductBulkAddAssetsEntriesRequest**|  |


### Return type

**ProductBulkAddAssetsEntriesResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **productBulkCreateAttribute**
> EntitymanagerBulkCreateAttributeResponse productBulkCreateAttribute(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductApi(configuration);

let body:.ProductApiProductBulkCreateAttributeRequest = {
  // EntitymanagerBulkCreateAttributeRequest
  body: {
    tenantId: "tenantId_example",
    entityData: {
      type: "type_example",
      code: "code_example",
    },
    entityId: "entityId_example",
    attributes: [
      {
        entityId: "entityId_example",
        code: "code_example",
        label: "label_example",
        type: "TEXT",
        optionList: "optionList_example",
        entity: "entity_example",
        _default: "_default_example",
        isRequired: true,
        isSystem: true,
        isRepeated: true,
        sort: 1,
        groupCode: "groupCode_example",
        title: {
          "key": "key_example",
        },
        renderAs: "DEFAULT",
      },
    ],
  },
};

apiInstance.productBulkCreateAttribute(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **EntitymanagerBulkCreateAttributeRequest**|  |


### Return type

**EntitymanagerBulkCreateAttributeResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **productBulkDeleteProducts**
> any productBulkDeleteProducts(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductApi(configuration);

let body:.ProductApiProductBulkDeleteProductsRequest = {
  // ProductBulkDeleteProductsRequest
  body: {
    tenantId: "tenantId_example",
    ids: [
      "ids_example",
    ],
  },
};

apiInstance.productBulkDeleteProducts(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ProductBulkDeleteProductsRequest**|  |


### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **productBulkRemoveAssetsEntries**
> any productBulkRemoveAssetsEntries(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductApi(configuration);

let body:.ProductApiProductBulkRemoveAssetsEntriesRequest = {
  // ProductBulkRemoveAssetsEntriesRequest
  body: {
    tenantId: "tenantId_example",
    productId: "productId_example",
    ids: [
      "ids_example",
    ],
  },
};

apiInstance.productBulkRemoveAssetsEntries(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ProductBulkRemoveAssetsEntriesRequest**|  |


### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **productBulkUpdate**
> ProductBulkUpdateResponse productBulkUpdate(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductApi(configuration);

let body:.ProductApiProductBulkUpdateRequest = {
  // ProductBulkUpdateRequest
  body: {
    tenantId: "tenantId_example",
    productIds: [
      "productIds_example",
    ],
    payload: {
      updateMask: {
        paths: [
          "paths_example",
        ],
      },
      attributes: {
        "key": 
          key: {},
        ,
      },
    },
  },
};

apiInstance.productBulkUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ProductBulkUpdateRequest**|  |


### Return type

**ProductBulkUpdateResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **productBulkUpdateAssetsEntries**
> ProductBulkUpdateAssetsEntriesResponse productBulkUpdateAssetsEntries(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductApi(configuration);

let body:.ProductApiProductBulkUpdateAssetsEntriesRequest = {
  // ProductBulkUpdateAssetsEntriesRequest
  body: {
    tenantId: "tenantId_example",
    productId: "productId_example",
    assets: [
      {
        id: "id_example",
        payload: {
          assetGrn: "assetGrn_example",
          localizedAssetGrn: {
            value: {
              "key": "key_example",
            },
          },
          position: 1,
          metadata: [
            {
              roles: [
                "roles_example",
              ],
              alt: {
                value: {
                  "key": "key_example",
                },
              },
            },
          ],
        },
        payloadMask: "payloadMask_example",
      },
    ],
  },
};

apiInstance.productBulkUpdateAssetsEntries(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ProductBulkUpdateAssetsEntriesRequest**|  |


### Return type

**ProductBulkUpdateAssetsEntriesResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **productBulkUpdateV2**
> ProductBulkUpdateResponseV2 productBulkUpdateV2(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductApi(configuration);

let body:.ProductApiProductBulkUpdateV2Request = {
  // ProductBulkUpdateRequestV2
  body: {
    tenantId: "tenantId_example",
    productIds: [
      "productIds_example",
    ],
    payload: {
      updateMask: {
        paths: [
          "paths_example",
        ],
      },
      attributes: {
        "key": 
          key: {},
        ,
      },
    },
  },
};

apiInstance.productBulkUpdateV2(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ProductBulkUpdateRequestV2**|  |


### Return type

**ProductBulkUpdateResponseV2**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **productCreateAttributeGroup**
> EntitymanagerAttributeGroup productCreateAttributeGroup(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductApi(configuration);

let body:.ProductApiProductCreateAttributeGroupRequest = {
  // EntitymanagerCreateAttributeGroupRequest
  body: {
    tenantId: "tenantId_example",
    code: "code_example",
    label: {
      value: {
        "key": "key_example",
      },
    },
    sort: 1,
    visibility: [
      "visibility_example",
    ],
  },
};

apiInstance.productCreateAttributeGroup(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **EntitymanagerCreateAttributeGroupRequest**|  |


### Return type

**EntitymanagerAttributeGroup**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **productCreateAttributeOptions**
> EntitymanagerCreateAttributeOptionsResponse productCreateAttributeOptions(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductApi(configuration);

let body:.ProductApiProductCreateAttributeOptionsRequest = {
  // EntitymanagerCreateAttributeOptionsRequest
  body: {
    tenantId: "tenantId_example",
    listCode: "listCode_example",
    options: [
      {
        option: {
          "key": "key_example",
        },
        sort: 1,
        id: "id_example",
        code: "code_example",
        value: {
          value: {
            "key": "key_example",
          },
        },
        swatches: [
          {
            grn: "grn_example",
            hex: "hex_example",
          },
        ],
      },
    ],
  },
};

apiInstance.productCreateAttributeOptions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **EntitymanagerCreateAttributeOptionsRequest**|  |


### Return type

**EntitymanagerCreateAttributeOptionsResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **productCreateEntity**
> EntitymanagerCreateEntityResponse productCreateEntity(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductApi(configuration);

let body:.ProductApiProductCreateEntityRequest = {
  // EntitymanagerEntity
  body: {
    tenantId: "tenantId_example",
    id: "id_example",
    type: "type_example",
    code: "code_example",
    parentCode: "parentCode_example",
    label: "label_example",
    relationships: [
      "relationships_example",
    ],
    attributes: [
      {
        entityId: "entityId_example",
        code: "code_example",
        label: "label_example",
        type: "TEXT",
        optionList: "optionList_example",
        entity: "entity_example",
        _default: "_default_example",
        isRequired: true,
        isSystem: true,
        isRepeated: true,
        sort: 1,
        groupCode: "groupCode_example",
        title: {
          "key": "key_example",
        },
        renderAs: "DEFAULT",
      },
    ],
  },
};

apiInstance.productCreateEntity(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **EntitymanagerEntity**|  |


### Return type

**EntitymanagerCreateEntityResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **productCreateOptionsList**
> EntitymanagerCreateOptionsListResponse productCreateOptionsList(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductApi(configuration);

let body:.ProductApiProductCreateOptionsListRequest = {
  // EntitymanagerCreateOptionsListRequest
  body: {
    tenantId: "tenantId_example",
    optionList: {
      code: "code_example",
      name: "name_example",
    },
  },
};

apiInstance.productCreateOptionsList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **EntitymanagerCreateOptionsListRequest**|  |


### Return type

**EntitymanagerCreateOptionsListResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **productCreateProduct**
> ProductCreateProductResponse productCreateProduct(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductApi(configuration);

let body:.ProductApiProductCreateProductRequest = {
  // ProductCreateProductRequest
  body: {
    tenantId: "tenantId_example",
    entityType: "entityType_example",
    entityCode: "entityCode_example",
    code: "code_example",
    isConfigurable: true,
    variantAttributes: [
      "variantAttributes_example",
    ],
    isVirtual: true,
    isGiftcard: true,
    hasConfigurator: true,
    urlKey: {
      value: {
        "key": "key_example",
      },
    },
    maxSaleableQuantity: 1,
    mediaVariantAttributes: [
      "mediaVariantAttributes_example",
    ],
    attributes: {
      "key": 
        key: {},
      ,
    },
    variants: {
      "key": {
        id: "id_example",
        maxSaleableQuantity: 1,
        attributes: {
          "key": 
            key: {},
          ,
        },
      },
    },
  },
};

apiInstance.productCreateProduct(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ProductCreateProductRequest**|  |


### Return type

**ProductCreateProductResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **productCreateProductV2**
> ProductCreateProductResponseV2 productCreateProductV2(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductApi(configuration);

let body:.ProductApiProductCreateProductV2Request = {
  // ProductCreateProductRequestV2
  body: {
    tenantId: "tenantId_example",
    entityType: "entityType_example",
    entityCode: "entityCode_example",
    code: "code_example",
    isConfigurable: true,
    variantAttributes: [
      "variantAttributes_example",
    ],
    isVirtual: true,
    isGiftcard: true,
    hasConfigurator: true,
    urlKey: {
      value: {
        "key": "key_example",
      },
    },
    maxSaleableQuantity: 1,
    attributes: {
      "key": 
        key: {},
      ,
    },
    variants: {
      "key": {
        id: "id_example",
        maxSaleableQuantity: 1,
        attributes: {
          "key": 
            key: {},
          ,
        },
      },
    },
    mediaVariantAttributes: [
      "mediaVariantAttributes_example",
    ],
  },
};

apiInstance.productCreateProductV2(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ProductCreateProductRequestV2**|  |


### Return type

**ProductCreateProductResponseV2**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **productDelete**
> ProductDeleteResponse productDelete(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductApi(configuration);

let body:.ProductApiProductDeleteRequest = {
  // ProductDeleteRequest
  body: {
    product: {
      tenantId: "tenantId_example",
      entityType: "entityType_example",
      entityCode: "entityCode_example",
      id: "id_example",
      code: "code_example",
      variantAttributes: [
        "variantAttributes_example",
      ],
      isConfigurable: true,
      isVirtual: true,
      isGiftcard: true,
      hasConfigurator: true,
      urlKey: {
        value: {
          "key": "key_example",
        },
      },
      mediaVariantAttributes: [
        "mediaVariantAttributes_example",
      ],
      attributes: {
        "key": 
          key: {},
        ,
      },
      variants: {
        "key": {
          id: "id_example",
          maxSaleableQuantity: 1,
          attributes: {
            "key": 
              key: {},
            ,
          },
        },
      },
      mediaGallery: {
        entries: [
          {
            id: "id_example",
            assetGrn: "assetGrn_example",
            position: 1,
            metadata: [
              {
                roles: [
                  "roles_example",
                ],
                alt: {
                  value: {
                    "key": "key_example",
                  },
                },
              },
            ],
          },
        ],
      },
      maxSaleableQuantity: 1,
      assets: {
        entries: [
          {
            id: "id_example",
            assetGrn: "assetGrn_example",
            localizedAssetGrn: {
              value: {
                "key": "key_example",
              },
            },
            locales: [
              "locales_example",
            ],
            position: 1,
            metadata: [
              {
                roles: [
                  "roles_example",
                ],
                alt: {
                  value: {
                    "key": "key_example",
                  },
                },
              },
            ],
          },
        ],
      },
      createdAt: "createdAt_example",
      updatedAt: "updatedAt_example",
    },
  },
};

apiInstance.productDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ProductDeleteRequest**|  |


### Return type

**ProductDeleteResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **productDeleteAttribute**
> any productDeleteAttribute(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductApi(configuration);

let body:.ProductApiProductDeleteAttributeRequest = {
  // EntitymanagerDeleteAttributeRequest
  body: {
    tenantId: "tenantId_example",
    entityData: {
      type: "type_example",
      code: "code_example",
    },
    entityId: "entityId_example",
    code: "code_example",
  },
};

apiInstance.productDeleteAttribute(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **EntitymanagerDeleteAttributeRequest**|  |


### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **productDeleteProduct**
> any productDeleteProduct(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductApi(configuration);

let body:.ProductApiProductDeleteProductRequest = {
  // ProductDeleteProductRequest
  body: {
    tenantId: "tenantId_example",
    id: "id_example",
  },
};

apiInstance.productDeleteProduct(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ProductDeleteProductRequest**|  |


### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **productGetAttributeGroup**
> EntitymanagerAttributeGroup productGetAttributeGroup(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductApi(configuration);

let body:.ProductApiProductGetAttributeGroupRequest = {
  // EntitymanagerGetAttributeGroupRequest
  body: {
    tenantId: "tenantId_example",
    code: "code_example",
  },
};

apiInstance.productGetAttributeGroup(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **EntitymanagerGetAttributeGroupRequest**|  |


### Return type

**EntitymanagerAttributeGroup**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **productGetAttributeOption**
> EntitymanagerGetAttributeOptionResponse productGetAttributeOption(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductApi(configuration);

let body:.ProductApiProductGetAttributeOptionRequest = {
  // EntitymanagerGetAttributeOptionRequest
  body: {
    tenantId: "tenantId_example",
    listCode: "listCode_example",
    optionId: "optionId_example",
  },
};

apiInstance.productGetAttributeOption(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **EntitymanagerGetAttributeOptionRequest**|  |


### Return type

**EntitymanagerGetAttributeOptionResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **productGetAttributeOptions**
> EntitymanagerGetAttributeOptionsResponse productGetAttributeOptions(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductApi(configuration);

let body:.ProductApiProductGetAttributeOptionsRequest = {
  // EntitymanagerGetAttributeOptionsRequest
  body: {
    tenantId: "tenantId_example",
    optionIds: [
      {
        listCode: "listCode_example",
        optionId: "optionId_example",
      },
    ],
  },
};

apiInstance.productGetAttributeOptions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **EntitymanagerGetAttributeOptionsRequest**|  |


### Return type

**EntitymanagerGetAttributeOptionsResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **productGetEntity**
> EntitymanagerEntity productGetEntity(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductApi(configuration);

let body:.ProductApiProductGetEntityRequest = {
  // EntitymanagerEntityRequest
  body: {
    tenantId: "tenantId_example",
    entityData: {
      type: "type_example",
      code: "code_example",
    },
    entityId: "entityId_example",
  },
};

apiInstance.productGetEntity(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **EntitymanagerEntityRequest**|  |


### Return type

**EntitymanagerEntity**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **productGetOptionsList**
> EntitymanagerGetOptionsListResponse productGetOptionsList(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductApi(configuration);

let body:.ProductApiProductGetOptionsListRequest = {
  // EntitymanagerGetOptionsListRequest
  body: {
    tenantId: "tenantId_example",
    listCode: "listCode_example",
  },
};

apiInstance.productGetOptionsList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **EntitymanagerGetOptionsListRequest**|  |


### Return type

**EntitymanagerGetOptionsListResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **productGetProduct**
> ProductGetProductResponse productGetProduct(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductApi(configuration);

let body:.ProductApiProductGetProductRequest = {
  // ProductGetProductRequest
  body: {
    tenantId: "tenantId_example",
    id: "id_example",
  },
};

apiInstance.productGetProduct(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ProductGetProductRequest**|  |


### Return type

**ProductGetProductResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **productGetProductByCode**
> ProductGetProductByCodeResponse productGetProductByCode(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductApi(configuration);

let body:.ProductApiProductGetProductByCodeRequest = {
  // ProductGetProductByCodeRequest
  body: {
    tenantId: "tenantId_example",
    code: "code_example",
  },
};

apiInstance.productGetProductByCode(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ProductGetProductByCodeRequest**|  |


### Return type

**ProductGetProductByCodeResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **productGetProductByUrlKey**
> ProductGetProductByUrlKeyResponse productGetProductByUrlKey(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductApi(configuration);

let body:.ProductApiProductGetProductByUrlKeyRequest = {
  // ProductGetProductByUrlKeyRequest
  body: {
    tenantId: "tenantId_example",
    urlKey: "urlKey_example",
    locale: "locale_example",
  },
};

apiInstance.productGetProductByUrlKey(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ProductGetProductByUrlKeyRequest**|  |


### Return type

**ProductGetProductByUrlKeyResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **productListAttributeGroups**
> EntitymanagerListAttributeGroupsResponse productListAttributeGroups(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductApi(configuration);

let body:.ProductApiProductListAttributeGroupsRequest = {
  // EntitymanagerListAttributeGroupsRequest
  body: {
    tenantId: "tenantId_example",
  },
};

apiInstance.productListAttributeGroups(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **EntitymanagerListAttributeGroupsRequest**|  |


### Return type

**EntitymanagerListAttributeGroupsResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **productListAttributeOptions**
> EntitymanagerListAttributeOptionsResponse productListAttributeOptions(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductApi(configuration);

let body:.ProductApiProductListAttributeOptionsRequest = {
  // EntitymanagerListAttributeOptionsRequest
  body: {
    tenantId: "tenantId_example",
    listCode: "listCode_example",
  },
};

apiInstance.productListAttributeOptions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **EntitymanagerListAttributeOptionsRequest**|  |


### Return type

**EntitymanagerListAttributeOptionsResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **productListEntities**
> EntitymanagerListEntitiesResponse productListEntities(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductApi(configuration);

let body:.ProductApiProductListEntitiesRequest = {
  // EntitymanagerListEntitiesRequest
  body: {
    tenantId: "tenantId_example",
    pageSize: 1,
  },
};

apiInstance.productListEntities(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **EntitymanagerListEntitiesRequest**|  |


### Return type

**EntitymanagerListEntitiesResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **productListOptionsLists**
> EntitymanagerListOptionsListsResponse productListOptionsLists(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductApi(configuration);

let body:.ProductApiProductListOptionsListsRequest = {
  // EntitymanagerListOptionsListsRequest
  body: {
    tenantId: "tenantId_example",
  },
};

apiInstance.productListOptionsLists(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **EntitymanagerListOptionsListsRequest**|  |


### Return type

**EntitymanagerListOptionsListsResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **productListProducts**
> ProductListProductsResponse productListProducts(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductApi(configuration);

let body:.ProductApiProductListProductsRequest = {
  // ProductListProductsRequest
  body: {
    tenantId: "tenantId_example",
    pageSize: "pageSize_example",
    pageToken: "pageToken_example",
    filter: {
      createdAtStart: new Date('1970-01-01T00:00:00.00Z'),
      createdAtEnd: new Date('1970-01-01T00:00:00.00Z'),
      updatedAtStart: new Date('1970-01-01T00:00:00.00Z'),
      updatedAtEnd: new Date('1970-01-01T00:00:00.00Z'),
      status: true,
    },
    filterMask: "filterMask_example",
  },
};

apiInstance.productListProducts(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ProductListProductsRequest**|  |


### Return type

**ProductListProductsResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **productListProductsByIds**
> ProductListProductsByIdsResponse productListProductsByIds(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductApi(configuration);

let body:.ProductApiProductListProductsByIdsRequest = {
  // ProductListProductsByIdsRequest
  body: {
    tenantId: "tenantId_example",
    ids: [
      "ids_example",
    ],
  },
};

apiInstance.productListProductsByIds(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ProductListProductsByIdsRequest**|  |


### Return type

**ProductListProductsByIdsResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **productListProductsBySku**
> ProductListProductsBySkuResponse productListProductsBySku(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductApi(configuration);

let body:.ProductApiProductListProductsBySkuRequest = {
  // ProductListProductsBySkuRequest
  body: {
    tenantId: "tenantId_example",
    sku: "sku_example",
  },
};

apiInstance.productListProductsBySku(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ProductListProductsBySkuRequest**|  |


### Return type

**ProductListProductsBySkuResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **productListVariantsBySku**
> ProductListVariantsBySkuResponse productListVariantsBySku(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductApi(configuration);

let body:.ProductApiProductListVariantsBySkuRequest = {
  // ProductListVariantsBySkuRequest
  body: {
    tenantId: "tenantId_example",
    sku: "sku_example",
  },
};

apiInstance.productListVariantsBySku(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ProductListVariantsBySkuRequest**|  |


### Return type

**ProductListVariantsBySkuResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **productRemoveMediaGalleryEntry**
> any productRemoveMediaGalleryEntry(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductApi(configuration);

let body:.ProductApiProductRemoveMediaGalleryEntryRequest = {
  // ProductRemoveMediaGalleryEntryRequest
  body: {
    tenantId: "tenantId_example",
    productId: "productId_example",
    id: "id_example",
  },
};

apiInstance.productRemoveMediaGalleryEntry(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ProductRemoveMediaGalleryEntryRequest**|  |


### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **productUpdateAttribute**
> EntitymanagerAttribute productUpdateAttribute(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductApi(configuration);

let body:.ProductApiProductUpdateAttributeRequest = {
  // EntitymanagerUpdateAttributeRequest
  body: {
    tenantId: "tenantId_example",
    code: "code_example",
    entityData: {
      type: "type_example",
      code: "code_example",
    },
    entityId: "entityId_example",
    payload: {
      label: "label_example",
      _default: "_default_example",
      sort: 1,
      groupCode: "groupCode_example",
      title: {
        "key": "key_example",
      },
      renderAs: "DEFAULT",
    },
    fieldMask: "fieldMask_example",
  },
};

apiInstance.productUpdateAttribute(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **EntitymanagerUpdateAttributeRequest**|  |


### Return type

**EntitymanagerAttribute**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **productUpdateAttributeGroup**
> EntitymanagerAttributeGroup productUpdateAttributeGroup(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductApi(configuration);

let body:.ProductApiProductUpdateAttributeGroupRequest = {
  // EntitymanagerUpdateAttributeGroupRequest
  body: {
    tenantId: "tenantId_example",
    code: "code_example",
    payload: {
      label: {
        value: {
          "key": "key_example",
        },
      },
      sort: 1,
      visibility: [
        "visibility_example",
      ],
    },
    fieldMask: "fieldMask_example",
  },
};

apiInstance.productUpdateAttributeGroup(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **EntitymanagerUpdateAttributeGroupRequest**|  |


### Return type

**EntitymanagerAttributeGroup**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **productUpdateAttributeOptions**
> EntitymanagerUpdateAttributeOptionsResponse productUpdateAttributeOptions(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductApi(configuration);

let body:.ProductApiProductUpdateAttributeOptionsRequest = {
  // EntitymanagerUpdateAttributeOptionsRequest
  body: {
    tenantId: "tenantId_example",
    listCode: "listCode_example",
    options: [
      {
        option: {
          "key": "key_example",
        },
        sort: 1,
        id: "id_example",
        code: "code_example",
        value: {
          value: {
            "key": "key_example",
          },
        },
        swatches: [
          {
            grn: "grn_example",
            hex: "hex_example",
          },
        ],
      },
    ],
  },
};

apiInstance.productUpdateAttributeOptions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **EntitymanagerUpdateAttributeOptionsRequest**|  |


### Return type

**EntitymanagerUpdateAttributeOptionsResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **productUpdateMediaGalleryEntry**
> any productUpdateMediaGalleryEntry(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductApi(configuration);

let body:.ProductApiProductUpdateMediaGalleryEntryRequest = {
  // ProductUpdateMediaGalleryEntryRequest
  body: {
    tenantId: "tenantId_example",
    productId: "productId_example",
    id: "id_example",
    assetGrn: "assetGrn_example",
    position: 1,
    metadata: [
      {
        roles: [
          "roles_example",
        ],
        alt: {
          value: {
            "key": "key_example",
          },
        },
      },
    ],
  },
};

apiInstance.productUpdateMediaGalleryEntry(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ProductUpdateMediaGalleryEntryRequest**|  |


### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **productUpdateOptionsList**
> EntitymanagerUpdateOptionsListResponse productUpdateOptionsList(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductApi(configuration);

let body:.ProductApiProductUpdateOptionsListRequest = {
  // EntitymanagerUpdateOptionsListRequest
  body: {
    tenantId: "tenantId_example",
    optionList: {
      code: "code_example",
      name: "name_example",
    },
  },
};

apiInstance.productUpdateOptionsList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **EntitymanagerUpdateOptionsListRequest**|  |


### Return type

**EntitymanagerUpdateOptionsListResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **productUpdateProduct**
> ProductUpdateProductResponse productUpdateProduct(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductApi(configuration);

let body:.ProductApiProductUpdateProductRequest = {
  // ProductUpdateProductRequest
  body: {
    tenantId: "tenantId_example",
    id: "id_example",
    code: "code_example",
    attributesMask: {
      paths: [
        "paths_example",
      ],
    },
    urlKey: {
      value: {
        "key": "key_example",
      },
    },
    maxSaleableQuantity: 1,
    mediaVariantAttributes: [
      "mediaVariantAttributes_example",
    ],
    attributes: {
      "key": 
        key: {},
      ,
    },
    variants: {
      "key": {
        id: "id_example",
        maxSaleableQuantity: 1,
        attributes: {
          "key": 
            key: {},
          ,
        },
      },
    },
  },
};

apiInstance.productUpdateProduct(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ProductUpdateProductRequest**|  |


### Return type

**ProductUpdateProductResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **productUpdateProductV2**
> any productUpdateProductV2(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductApi(configuration);

let body:.ProductApiProductUpdateProductV2Request = {
  // ProductUpdateProductRequestV2
  body: {
    tenantId: "tenantId_example",
    id: "id_example",
    code: "code_example",
    attributesMask: {
      paths: [
        "paths_example",
      ],
    },
    urlKey: {
      value: {
        "key": "key_example",
      },
    },
    maxSaleableQuantity: 1,
    attributes: {
      "key": 
        key: {},
      ,
    },
    variants: {
      "key": {
        id: "id_example",
        maxSaleableQuantity: 1,
        attributes: {
          "key": 
            key: {},
          ,
        },
      },
    },
    mediaVariantAttributes: [
      "mediaVariantAttributes_example",
    ],
  },
};

apiInstance.productUpdateProductV2(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ProductUpdateProductRequestV2**|  |


### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


