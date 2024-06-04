# .ProductApi

All URIs are relative to *https://product.api.gogemini.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addMediaGalleryEntry**](ProductApi.md#addMediaGalleryEntry) | **POST** /product.Product/AddMediaGalleryEntry | Add Media Gallery Entry
[**bulkUpdateV2**](ProductApi.md#bulkUpdateV2) | **POST** /product.Product/BulkUpdateV2 | Bulk Update Products
[**createAttributeOptions**](ProductApi.md#createAttributeOptions) | **POST** /product.Product/CreateAttributeOptions | Create Attribute Options
[**createEntity**](ProductApi.md#createEntity) | **POST** /product.Product/CreateEntity | Create Entity
[**createOptionsList**](ProductApi.md#createOptionsList) | **POST** /product.Product/CreateOptionsList | Create Options List
[**getAttributeOption**](ProductApi.md#getAttributeOption) | **POST** /product.Product/GetAttributeOption | Get Attribute Option
[**getAttributeOptions**](ProductApi.md#getAttributeOptions) | **POST** /product.Product/GetAttributeOptions | Get Attribute Options
[**getEntity**](ProductApi.md#getEntity) | **POST** /product.Product/GetEntity | Get Entity Details
[**getOptionsList**](ProductApi.md#getOptionsList) | **POST** /product.Product/GetOptionsList | Get Options List
[**getProduct**](ProductApi.md#getProduct) | **POST** /product.Product/GetProduct | Get Product
[**getProductByCode**](ProductApi.md#getProductByCode) | **POST** /product.Product/GetProductByCode | Get Product By Code
[**getProductByUrlKey**](ProductApi.md#getProductByUrlKey) | **POST** /product.Product/GetProductByUrlKey | Get Product By Url Key
[**listAttributeOptions**](ProductApi.md#listAttributeOptions) | **POST** /product.Product/ListAttributeOptions | List Attribute Options
[**listEntities**](ProductApi.md#listEntities) | **POST** /product.Product/ListEntities | List Entities
[**listOptionsLists**](ProductApi.md#listOptionsLists) | **POST** /product.Product/ListOptionsLists | List Options Lists
[**listProducts**](ProductApi.md#listProducts) | **POST** /product.Product/ListProducts | List Products
[**listProductsByIds**](ProductApi.md#listProductsByIds) | **POST** /product.Product/ListProductsByIds | List Products By Ids
[**listProductsBySku**](ProductApi.md#listProductsBySku) | **POST** /product.Product/ListProductsBySku | List Products By Sku
[**listVariantsBySku**](ProductApi.md#listVariantsBySku) | **POST** /product.Product/ListVariantsBySku | List Product Variants By Sku
[**productBulkAddAssetsEntries**](ProductApi.md#productBulkAddAssetsEntries) | **POST** /product.Product/BulkAddAssetsEntries | Assets endpoints
[**productBulkCreateAttribute**](ProductApi.md#productBulkCreateAttribute) | **POST** /product.Product/BulkCreateAttribute | 
[**productBulkDeleteProducts**](ProductApi.md#productBulkDeleteProducts) | **POST** /product.Product/BulkDeleteProducts | 
[**productBulkRemoveAssetsEntries**](ProductApi.md#productBulkRemoveAssetsEntries) | **POST** /product.Product/BulkRemoveAssetsEntries | 
[**productBulkUpdate**](ProductApi.md#productBulkUpdate) | **POST** /product.Product/BulkUpdate | 
[**productBulkUpdateAssetsEntries**](ProductApi.md#productBulkUpdateAssetsEntries) | **POST** /product.Product/BulkUpdateAssetsEntries | 
[**productCreateAttributeGroup**](ProductApi.md#productCreateAttributeGroup) | **POST** /product.Product/CreateAttributeGroup | 
[**productCreateProduct**](ProductApi.md#productCreateProduct) | **POST** /product.Product/CreateProduct | 
[**productCreateProductV2**](ProductApi.md#productCreateProductV2) | **POST** /product.Product/CreateProductV2 | 
[**productDelete**](ProductApi.md#productDelete) | **POST** /product.Product/Delete | 
[**productDeleteAttribute**](ProductApi.md#productDeleteAttribute) | **POST** /product.Product/DeleteAttribute | 
[**productDeleteProduct**](ProductApi.md#productDeleteProduct) | **POST** /product.Product/DeleteProduct | 
[**productGetAttributeGroup**](ProductApi.md#productGetAttributeGroup) | **POST** /product.Product/GetAttributeGroup | 
[**productListAttributeGroups**](ProductApi.md#productListAttributeGroups) | **POST** /product.Product/ListAttributeGroups | Attribute Groups endpoints
[**productUpdateAttribute**](ProductApi.md#productUpdateAttribute) | **POST** /product.Product/UpdateAttribute | 
[**productUpdateAttributeGroup**](ProductApi.md#productUpdateAttributeGroup) | **POST** /product.Product/UpdateAttributeGroup | 
[**productUpdateProduct**](ProductApi.md#productUpdateProduct) | **POST** /product.Product/UpdateProduct | 
[**productUpdateProductV2**](ProductApi.md#productUpdateProductV2) | **POST** /product.Product/UpdateProductV2 | 
[**removeMediaGalleryEntry**](ProductApi.md#removeMediaGalleryEntry) | **POST** /product.Product/RemoveMediaGalleryEntry | Remove Media Gallery Entry
[**updateAttributeOptions**](ProductApi.md#updateAttributeOptions) | **POST** /product.Product/UpdateAttributeOptions | Update Attribute Options
[**updateMediaGalleryEntry**](ProductApi.md#updateMediaGalleryEntry) | **POST** /product.Product/UpdateMediaGalleryEntry | Update Media Gallery Entry
[**updateOptionsList**](ProductApi.md#updateOptionsList) | **POST** /product.Product/UpdateOptionsList | Update Options List


# **addMediaGalleryEntry**
> ProductAddMediaGalleryEntryResponse addMediaGalleryEntry(body)

The AddMediaGalleryEntry endpoint allows users to add a new media entry to the gallery of a specific product. To make a request to this endpoint, users need to provide the necessary information in the specified format. The request includes the tenant_id to specify the relevant tenant, the product_id to identify the target product, and the asset_grn which represents the globally unique identifier for the media asset being added. Additionally, the position field indicates the desired position of the media entry within the gallery, allowing users to control the order in which the media items are displayed. The metadata field, which is a repeated field, provides the option to include additional metadata associated with the media entry.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductApi(configuration);

let body:.ProductApiAddMediaGalleryEntryRequest = {
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

apiInstance.addMediaGalleryEntry(body).then((data:any) => {
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

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **bulkUpdateV2**
> ProductBulkUpdateResponse bulkUpdateV2(body)

Version 2 of bulk updates for product attributes with enhanced payload structure and response format.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductApi(configuration);

let body:.ProductApiBulkUpdateV2Request = {
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

apiInstance.bulkUpdateV2(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ProductBulkUpdateRequestV2**|  |


### Return type

**ProductBulkUpdateResponse**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createAttributeOptions**
> EntitymanagerCreateAttributeOptionsResponse createAttributeOptions(body)

Create attribute options with specified codes, values, and swatches. Returns created options and any associated errors.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductApi(configuration);

let body:.ProductApiCreateAttributeOptionsRequest = {
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

apiInstance.createAttributeOptions(body).then((data:any) => {
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

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createEntity**
> EntitymanagerCreateEntityResponse createEntity(body)

The CreateEntity endpoint allows users to define and create a new entity with custom attributes, providing a flexible way to represent and manage different data structures within the system. By making a request to this endpoint, users can create a new entity that serves as an abstraction of a product or any other domain-specific object. This endpoint empowers users to define the specific attributes that compose the entity, such as color, composition, technical details, or any other relevant properties. Utilize the CreateEntity endpoint to dynamically extend and adapt your system\'s data model to accommodate diverse business requirements and efficiently manage various types of entities.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductApi(configuration);

let body:.ProductApiCreateEntityRequest = {
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

apiInstance.createEntity(body).then((data:any) => {
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

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createOptionsList**
> EntitymanagerCreateOptionsListResponse createOptionsList(body)

The CreateOptionsList endpoint allows users to create an OptionList, which represents a list of predefined options for assigning to an attribute. By making a request to this endpoint with the provided request format, users can create a new OptionList by specifying the relevant tenant ID and providing the OptionList object containing the predefined options. This functionality facilitates efficient management and assignment of predefined attribute values, ensuring consistency and flexibility within the system.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductApi(configuration);

let body:.ProductApiCreateOptionsListRequest = {
  // EntitymanagerCreateOptionsListRequest
  body: {
    tenantId: "tenantId_example",
    optionList: {
      code: "code_example",
      name: "name_example",
    },
  },
};

apiInstance.createOptionsList(body).then((data:any) => {
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

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAttributeOption**
> EntitymanagerGetAttributeOptionResponse getAttributeOption(body)

Retrieve attribute option details by providing the tenant ID, list code, and option ID. Returns the specified attribute option.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductApi(configuration);

let body:.ProductApiGetAttributeOptionRequest = {
  // EntitymanagerGetAttributeOptionRequest
  body: {
    tenantId: "tenantId_example",
    listCode: "listCode_example",
    optionId: "optionId_example",
  },
};

apiInstance.getAttributeOption(body).then((data:any) => {
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

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAttributeOptions**
> EntitymanagerGetAttributeOptionsResponse getAttributeOptions(body)

Retrieve a list of attribute options based on the provided tenant ID and list code.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductApi(configuration);

let body:.ProductApiGetAttributeOptionsRequest = {
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

apiInstance.getAttributeOptions(body).then((data:any) => {
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

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getEntity**
> EntitymanagerEntity getEntity(body)

Retrieve details of an entity by providing the tenant ID and either entity data or entity ID. Returns information including ID, type, code, label, relationships, and attributes.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductApi(configuration);

let body:.ProductApiGetEntityRequest = {
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

apiInstance.getEntity(body).then((data:any) => {
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

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getOptionsList**
> EntitymanagerGetOptionsListResponse getOptionsList(body)

Retrieve option lists.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductApi(configuration);

let body:.ProductApiGetOptionsListRequest = {
  // EntitymanagerGetOptionsListRequest
  body: {
    tenantId: "tenantId_example",
    listCode: "listCode_example",
  },
};

apiInstance.getOptionsList(body).then((data:any) => {
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

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getProduct**
> ProductGetProductResponse getProduct(body)

The GetProduct endpoint enables users to retrieve a product from the system. By sending a request to this endpoint, users can retrieve a product by providing its unique identifier.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductApi(configuration);

let body:.ProductApiGetProductRequest = {
  // ProductGetProductRequest
  body: {
    tenantId: "tenantId_example",
    id: "id_example",
  },
};

apiInstance.getProduct(body).then((data:any) => {
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

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getProductByCode**
> ProductGetProductByCodeResponse getProductByCode(body)

The GetProductByCode endpoint enables users to retrieve a product from the system. By sending a request to this endpoint, users can retrieve a product by providing its unique code.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductApi(configuration);

let body:.ProductApiGetProductByCodeRequest = {
  // ProductGetProductByCodeRequest
  body: {
    tenantId: "tenantId_example",
    code: "code_example",
  },
};

apiInstance.getProductByCode(body).then((data:any) => {
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

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getProductByUrlKey**
> ProductGetProductByUrlKeyResponse getProductByUrlKey(body)

The GetProductByUrlKey endpoint enables users to retrieve a product from the system. By sending a request to this endpoint, users can retrieve a product by providing its unique url key.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductApi(configuration);

let body:.ProductApiGetProductByUrlKeyRequest = {
  // ProductGetProductByUrlKeyRequest
  body: {
    tenantId: "tenantId_example",
    urlKey: "urlKey_example",
    locale: "locale_example",
  },
};

apiInstance.getProductByUrlKey(body).then((data:any) => {
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

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listAttributeOptions**
> EntitymanagerListAttributeOptionsResponse listAttributeOptions(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductApi(configuration);

let body:.ProductApiListAttributeOptionsRequest = {
  // EntitymanagerListAttributeOptionsRequest
  body: {
    tenantId: "tenantId_example",
    listCode: "listCode_example",
  },
};

apiInstance.listAttributeOptions(body).then((data:any) => {
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

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listEntities**
> EntitymanagerListEntitiesResponse listEntities(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductApi(configuration);

let body:.ProductApiListEntitiesRequest = {
  // EntitymanagerListEntitiesRequest
  body: {
    tenantId: "tenantId_example",
    pageSize: 1,
  },
};

apiInstance.listEntities(body).then((data:any) => {
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

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listOptionsLists**
> EntitymanagerListOptionsListsResponse listOptionsLists(body)

The ListOptionsLists endpoint allows users to retrieve a list of OptionLists available in the system. By making a request to this endpoint with the provided request format, users can obtain all the OptionLists associated with the specified tenant. This functionality enables users to access and manage the predefined options available for various attributes within the system. Utilizing the ListOptionsLists endpoint provides a convenient way to retrieve and work with OptionLists, facilitating efficient management of attribute options and ensuring consistency in attribute values throughout the system.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductApi(configuration);

let body:.ProductApiListOptionsListsRequest = {
  // EntitymanagerListOptionsListsRequest
  body: {
    tenantId: "tenantId_example",
  },
};

apiInstance.listOptionsLists(body).then((data:any) => {
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

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listProducts**
> ProductListProductsResponse listProducts(body)

The ListProducts endpoint provides users with the ability to retrieve a filtered list of products based on specific criteria. By including filter parameters in the request, users can customize the response to only include products that meet certain conditions, such as price range, category, availability, or any other relevant attributes. This endpoint empowers users to efficiently narrow down the product selection and retrieve tailored results.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductApi(configuration);

let body:.ProductApiListProductsRequest = {
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

apiInstance.listProducts(body).then((data:any) => {
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

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listProductsByIds**
> ProductListProductsByIdsResponse listProductsByIds(body)

The ListProductsByIds endpoint allows users to retrieve a list of products based on provided IDs. By making a request to this endpoint and specifying a set of product IDs, users can retrieve detailed information about the corresponding products. This endpoint facilitates efficient retrieval of specific products, enabling applications to display accurate and targeted product information to users.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductApi(configuration);

let body:.ProductApiListProductsByIdsRequest = {
  // ProductListProductsByIdsRequest
  body: {
    tenantId: "tenantId_example",
    ids: [
      "ids_example",
    ],
  },
};

apiInstance.listProductsByIds(body).then((data:any) => {
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

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listProductsBySku**
> ProductListProductsBySkuResponse listProductsBySku(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductApi(configuration);

let body:.ProductApiListProductsBySkuRequest = {
  // ProductListProductsBySkuRequest
  body: {
    tenantId: "tenantId_example",
    sku: "sku_example",
  },
};

apiInstance.listProductsBySku(body).then((data:any) => {
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

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listVariantsBySku**
> ProductListVariantsBySkuResponse listVariantsBySku(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductApi(configuration);

let body:.ProductApiListVariantsBySkuRequest = {
  // ProductListVariantsBySkuRequest
  body: {
    tenantId: "tenantId_example",
    sku: "sku_example",
  },
};

apiInstance.listVariantsBySku(body).then((data:any) => {
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

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
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

[Authorization](README.md#Authorization)

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

Allow creation of multiple attributes. If any attribute is invalid, an error will be returned with more details, and in the response body, the attributes created will be returned.

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

[Authorization](README.md#Authorization)

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

[Authorization](README.md#Authorization)

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

[Authorization](README.md#Authorization)

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

[Authorization](README.md#Authorization)

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

[Authorization](README.md#Authorization)

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

[Authorization](README.md#Authorization)

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
  // ProductCreateProductRequest | The CreateProductRequest message is used to create a new product within the system. It contains various fields that allow specifying the details and attributes of the product.
  body: {
    tenantId: "bf325375-e030-fccb-a009-17317c574773",
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
 **body** | **ProductCreateProductRequest**| The CreateProductRequest message is used to create a new product within the system. It contains various fields that allow specifying the details and attributes of the product. |


### Return type

**ProductCreateProductResponse**

### Authorization

[Authorization](README.md#Authorization)

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

[Authorization](README.md#Authorization)

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

[Authorization](README.md#Authorization)

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

[Authorization](README.md#Authorization)

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

[Authorization](README.md#Authorization)

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

[Authorization](README.md#Authorization)

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

[Authorization](README.md#Authorization)

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

[Authorization](README.md#Authorization)

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

[Authorization](README.md#Authorization)

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

[Authorization](README.md#Authorization)

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

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **removeMediaGalleryEntry**
> any removeMediaGalleryEntry(body)

The RemoveMediaGalleryEntry endpoint allows users to remove a specific media entry from a product\'s gallery. By making a request to this endpoint and providing the tenant ID, product ID, and the unique identifier of the media entry, users can easily manage and update the visual content of a product\'s gallery. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductApi(configuration);

let body:.ProductApiRemoveMediaGalleryEntryRequest = {
  // ProductRemoveMediaGalleryEntryRequest
  body: {
    tenantId: "tenantId_example",
    productId: "productId_example",
    id: "id_example",
  },
};

apiInstance.removeMediaGalleryEntry(body).then((data:any) => {
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

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateAttributeOptions**
> EntitymanagerUpdateAttributeOptionsResponse updateAttributeOptions(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductApi(configuration);

let body:.ProductApiUpdateAttributeOptionsRequest = {
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

apiInstance.updateAttributeOptions(body).then((data:any) => {
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

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateMediaGalleryEntry**
> any updateMediaGalleryEntry(body)

The UpdateMediaGalleryEntry endpoint allows users to modify and update a specific media entry within a product\'s gallery. By sending a request to this endpoint and providing the necessary information, users can efficiently update the media asset, position, and metadata associated with the entry.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductApi(configuration);

let body:.ProductApiUpdateMediaGalleryEntryRequest = {
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

apiInstance.updateMediaGalleryEntry(body).then((data:any) => {
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

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateOptionsList**
> EntitymanagerUpdateOptionsListResponse updateOptionsList(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductApi(configuration);

let body:.ProductApiUpdateOptionsListRequest = {
  // EntitymanagerUpdateOptionsListRequest
  body: {
    tenantId: "tenantId_example",
    optionList: {
      code: "code_example",
      name: "name_example",
    },
  },
};

apiInstance.updateOptionsList(body).then((data:any) => {
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

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


