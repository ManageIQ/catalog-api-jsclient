# @ManageiqCatalogApiJsclient.UsersApi

All URIs are relative to *https://localhost/api/catalog*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addToOrder**](UsersApi.md#addToOrder) | **POST** /orders/{order_id}/order_items | Add an order item to an order in pending state
[**fetchPortfolioItemsWithPortfolio**](UsersApi.md#fetchPortfolioItemsWithPortfolio) | **GET** /portfolios/{portfolio_id}/portfolio_items | Get all portfolio items from a specific portfolio
[**listOrderItems**](UsersApi.md#listOrderItems) | **GET** /orders/{order_id}/order_items | Gets a list of items in a given order
[**listOrders**](UsersApi.md#listOrders) | **GET** /orders | Get a list of orders
[**listPortfolioItems**](UsersApi.md#listPortfolioItems) | **GET** /portfolio_items | List all portfolio items
[**listPortfolios**](UsersApi.md#listPortfolios) | **GET** /portfolios | List portfolios
[**listProgressMessages**](UsersApi.md#listProgressMessages) | **GET** /order_items/{order_item_id}/progress_messages | Gets a list of progress messages in an item
[**listProviderControlParameters**](UsersApi.md#listProviderControlParameters) | **GET** /portfolio_items/{portfolio_item_id}/provider_control_parameters | Gets the provider control parameters for this portfolio item; requires control paramaters provided when provisioning the portfolio item.
[**listServicePlans**](UsersApi.md#listServicePlans) | **GET** /portfolio_items/{portfolio_item_id}/service_plans | Gets all service plans for a specific portfolio item; requires a connection to the topology service.
[**shareInfo**](UsersApi.md#shareInfo) | **GET** /portfolios/{portfolio_id}/share_info | Fetch share information about this portfolio, the response would include a collection of groups and permissions with each group
[**showOrderItem**](UsersApi.md#showOrderItem) | **GET** /orders/{order_id}/order_items/{id} | Gets an individual order item from a given order
[**showPortfolio**](UsersApi.md#showPortfolio) | **GET** /portfolios/{id} | Get a specific portfolio
[**showPortfolioItem**](UsersApi.md#showPortfolioItem) | **GET** /portfolio_items/{id} | Gets a specific portfolio item


<a name="addToOrder"></a>
# **addToOrder**
> addToOrder(orderId, orderItem)

Add an order item to an order in pending state

Adds an order item to an order in pending state 

### Example
```javascript
import @ManageiqCatalogApiJsclient from '@manageiq/catalog-api-jsclient';
let defaultClient = @ManageiqCatalogApiJsclient.ApiClient.instance;

// Configure API key authorization: APIKeyAuth
let APIKeyAuth = defaultClient.authentications['APIKeyAuth'];
APIKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyAuth.apiKeyPrefix = 'Token';

// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new @ManageiqCatalogApiJsclient.UsersApi();
let orderId = "orderId_example"; // String | The Order ID
let orderItem = new @ManageiqCatalogApiJsclient.OrderItem(); // OrderItem | 
apiInstance.addToOrder(orderId, orderItem).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **String**| The Order ID | 
 **orderItem** | [**OrderItem**](OrderItem.md)|  | 

### Return type

null (empty response body)

### Authorization

[APIKeyAuth](../README.md#APIKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="fetchPortfolioItemsWithPortfolio"></a>
# **fetchPortfolioItemsWithPortfolio**
> PortfolioItemsCollection fetchPortfolioItemsWithPortfolio(portfolioId, opts)

Get all portfolio items from a specific portfolio

Gets all portfilio items in the portfolio specified by the given ID. 

### Example
```javascript
import @ManageiqCatalogApiJsclient from '@manageiq/catalog-api-jsclient';
let defaultClient = @ManageiqCatalogApiJsclient.ApiClient.instance;

// Configure API key authorization: APIKeyAuth
let APIKeyAuth = defaultClient.authentications['APIKeyAuth'];
APIKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyAuth.apiKeyPrefix = 'Token';

// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new @ManageiqCatalogApiJsclient.UsersApi();
let portfolioId = "portfolioId_example"; // String | The Portfolio ID
let opts = {
  'limit': 100, // Number | The numbers of items to return per page.
  'offset': 0 // Number | The number of items to skip before starting to collect the result set.
};
apiInstance.fetchPortfolioItemsWithPortfolio(portfolioId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portfolioId** | **String**| The Portfolio ID | 
 **limit** | **Number**| The numbers of items to return per page. | [optional] [default to 100]
 **offset** | **Number**| The number of items to skip before starting to collect the result set. | [optional] [default to 0]

### Return type

[**PortfolioItemsCollection**](PortfolioItemsCollection.md)

### Authorization

[APIKeyAuth](../README.md#APIKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listOrderItems"></a>
# **listOrderItems**
> OrderItemsCollection listOrderItems(orderId, opts)

Gets a list of items in a given order

Gets a list of items associated with an order. 

### Example
```javascript
import @ManageiqCatalogApiJsclient from '@manageiq/catalog-api-jsclient';
let defaultClient = @ManageiqCatalogApiJsclient.ApiClient.instance;

// Configure API key authorization: APIKeyAuth
let APIKeyAuth = defaultClient.authentications['APIKeyAuth'];
APIKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyAuth.apiKeyPrefix = 'Token';

// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new @ManageiqCatalogApiJsclient.UsersApi();
let orderId = "orderId_example"; // String | The Order ID
let opts = {
  'limit': 100, // Number | The numbers of items to return per page.
  'offset': 0 // Number | The number of items to skip before starting to collect the result set.
};
apiInstance.listOrderItems(orderId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **String**| The Order ID | 
 **limit** | **Number**| The numbers of items to return per page. | [optional] [default to 100]
 **offset** | **Number**| The number of items to skip before starting to collect the result set. | [optional] [default to 0]

### Return type

[**OrderItemsCollection**](OrderItemsCollection.md)

### Authorization

[APIKeyAuth](../README.md#APIKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listOrders"></a>
# **listOrders**
> OrdersCollection listOrders(opts)

Get a list of orders

Gets a list of orders associated with the logged in user. 

### Example
```javascript
import @ManageiqCatalogApiJsclient from '@manageiq/catalog-api-jsclient';
let defaultClient = @ManageiqCatalogApiJsclient.ApiClient.instance;

// Configure API key authorization: APIKeyAuth
let APIKeyAuth = defaultClient.authentications['APIKeyAuth'];
APIKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyAuth.apiKeyPrefix = 'Token';

// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new @ManageiqCatalogApiJsclient.UsersApi();
let opts = {
  'limit': 100, // Number | The numbers of items to return per page.
  'offset': 0 // Number | The number of items to skip before starting to collect the result set.
};
apiInstance.listOrders(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| The numbers of items to return per page. | [optional] [default to 100]
 **offset** | **Number**| The number of items to skip before starting to collect the result set. | [optional] [default to 0]

### Return type

[**OrdersCollection**](OrdersCollection.md)

### Authorization

[APIKeyAuth](../README.md#APIKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listPortfolioItems"></a>
# **listPortfolioItems**
> PortfolioItemsCollection listPortfolioItems(opts)

List all portfolio items

Gets a list of portfolio items. 

### Example
```javascript
import @ManageiqCatalogApiJsclient from '@manageiq/catalog-api-jsclient';
let defaultClient = @ManageiqCatalogApiJsclient.ApiClient.instance;

// Configure API key authorization: APIKeyAuth
let APIKeyAuth = defaultClient.authentications['APIKeyAuth'];
APIKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyAuth.apiKeyPrefix = 'Token';

// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new @ManageiqCatalogApiJsclient.UsersApi();
let opts = {
  'limit': 100, // Number | The numbers of items to return per page.
  'offset': 0 // Number | The number of items to skip before starting to collect the result set.
};
apiInstance.listPortfolioItems(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| The numbers of items to return per page. | [optional] [default to 100]
 **offset** | **Number**| The number of items to skip before starting to collect the result set. | [optional] [default to 0]

### Return type

[**PortfolioItemsCollection**](PortfolioItemsCollection.md)

### Authorization

[APIKeyAuth](../README.md#APIKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listPortfolios"></a>
# **listPortfolios**
> PortfoliosCollection listPortfolios(opts)

List portfolios

Gets a list of portfolios. 

### Example
```javascript
import @ManageiqCatalogApiJsclient from '@manageiq/catalog-api-jsclient';
let defaultClient = @ManageiqCatalogApiJsclient.ApiClient.instance;

// Configure API key authorization: APIKeyAuth
let APIKeyAuth = defaultClient.authentications['APIKeyAuth'];
APIKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyAuth.apiKeyPrefix = 'Token';

// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new @ManageiqCatalogApiJsclient.UsersApi();
let opts = {
  'limit': 100, // Number | The numbers of items to return per page.
  'offset': 0 // Number | The number of items to skip before starting to collect the result set.
};
apiInstance.listPortfolios(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| The numbers of items to return per page. | [optional] [default to 100]
 **offset** | **Number**| The number of items to skip before starting to collect the result set. | [optional] [default to 0]

### Return type

[**PortfoliosCollection**](PortfoliosCollection.md)

### Authorization

[APIKeyAuth](../README.md#APIKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listProgressMessages"></a>
# **listProgressMessages**
> ProgressMessagesCollection listProgressMessages(orderItemId, opts)

Gets a list of progress messages in an item

Gets a list of progress messages associated with an order item. As the item is being processed the provider can update the progress messages. 

### Example
```javascript
import @ManageiqCatalogApiJsclient from '@manageiq/catalog-api-jsclient';
let defaultClient = @ManageiqCatalogApiJsclient.ApiClient.instance;

// Configure API key authorization: APIKeyAuth
let APIKeyAuth = defaultClient.authentications['APIKeyAuth'];
APIKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyAuth.apiKeyPrefix = 'Token';

// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new @ManageiqCatalogApiJsclient.UsersApi();
let orderItemId = "orderItemId_example"; // String | The Order Item ID
let opts = {
  'limit': 100, // Number | The numbers of items to return per page.
  'offset': 0 // Number | The number of items to skip before starting to collect the result set.
};
apiInstance.listProgressMessages(orderItemId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderItemId** | **String**| The Order Item ID | 
 **limit** | **Number**| The numbers of items to return per page. | [optional] [default to 100]
 **offset** | **Number**| The number of items to skip before starting to collect the result set. | [optional] [default to 0]

### Return type

[**ProgressMessagesCollection**](ProgressMessagesCollection.md)

### Authorization

[APIKeyAuth](../README.md#APIKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listProviderControlParameters"></a>
# **listProviderControlParameters**
> ProviderControlParameters listProviderControlParameters(portfolioItemId)

Gets the provider control parameters for this portfolio item; requires control paramaters provided when provisioning the portfolio item.

Gets the provider control parameters for a portfolio item. 

### Example
```javascript
import @ManageiqCatalogApiJsclient from '@manageiq/catalog-api-jsclient';
let defaultClient = @ManageiqCatalogApiJsclient.ApiClient.instance;

// Configure API key authorization: APIKeyAuth
let APIKeyAuth = defaultClient.authentications['APIKeyAuth'];
APIKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyAuth.apiKeyPrefix = 'Token';

// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new @ManageiqCatalogApiJsclient.UsersApi();
let portfolioItemId = "portfolioItemId_example"; // String | The Portfolio Item ID
apiInstance.listProviderControlParameters(portfolioItemId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portfolioItemId** | **String**| The Portfolio Item ID | 

### Return type

[**ProviderControlParameters**](ProviderControlParameters.md)

### Authorization

[APIKeyAuth](../README.md#APIKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listServicePlans"></a>
# **listServicePlans**
> [ServicePlan] listServicePlans(portfolioItemId)

Gets all service plans for a specific portfolio item; requires a connection to the topology service.

Gets all service plans for a portfolio item. 

### Example
```javascript
import @ManageiqCatalogApiJsclient from '@manageiq/catalog-api-jsclient';
let defaultClient = @ManageiqCatalogApiJsclient.ApiClient.instance;

// Configure API key authorization: APIKeyAuth
let APIKeyAuth = defaultClient.authentications['APIKeyAuth'];
APIKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyAuth.apiKeyPrefix = 'Token';

// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new @ManageiqCatalogApiJsclient.UsersApi();
let portfolioItemId = "portfolioItemId_example"; // String | The Portfolio Item ID
apiInstance.listServicePlans(portfolioItemId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portfolioItemId** | **String**| The Portfolio Item ID | 

### Return type

[**[ServicePlan]**](ServicePlan.md)

### Authorization

[APIKeyAuth](../README.md#APIKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="shareInfo"></a>
# **shareInfo**
> [ShareInfo] shareInfo(portfolioId)

Fetch share information about this portfolio, the response would include a collection of groups and permissions with each group

Fetch share information about a portfolio 

### Example
```javascript
import @ManageiqCatalogApiJsclient from '@manageiq/catalog-api-jsclient';
let defaultClient = @ManageiqCatalogApiJsclient.ApiClient.instance;

// Configure API key authorization: APIKeyAuth
let APIKeyAuth = defaultClient.authentications['APIKeyAuth'];
APIKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyAuth.apiKeyPrefix = 'Token';

// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new @ManageiqCatalogApiJsclient.UsersApi();
let portfolioId = "portfolioId_example"; // String | The Portfolio ID
apiInstance.shareInfo(portfolioId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **portfolioId** | **String**| The Portfolio ID | 

### Return type

[**[ShareInfo]**](ShareInfo.md)

### Authorization

[APIKeyAuth](../README.md#APIKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="showOrderItem"></a>
# **showOrderItem**
> OrderItem showOrderItem(orderId, id)

Gets an individual order item from a given order

Gets an order item associated with an order. 

### Example
```javascript
import @ManageiqCatalogApiJsclient from '@manageiq/catalog-api-jsclient';
let defaultClient = @ManageiqCatalogApiJsclient.ApiClient.instance;

// Configure API key authorization: APIKeyAuth
let APIKeyAuth = defaultClient.authentications['APIKeyAuth'];
APIKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyAuth.apiKeyPrefix = 'Token';

// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new @ManageiqCatalogApiJsclient.UsersApi();
let orderId = "orderId_example"; // String | The Order ID
let id = "id_example"; // String | ID of the resource
apiInstance.showOrderItem(orderId, id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **String**| The Order ID | 
 **id** | **String**| ID of the resource | 

### Return type

[**OrderItem**](OrderItem.md)

### Authorization

[APIKeyAuth](../README.md#APIKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="showPortfolio"></a>
# **showPortfolio**
> Portfolio showPortfolio(id)

Get a specific portfolio

Gets the portfolio specified by the portfolio ID. 

### Example
```javascript
import @ManageiqCatalogApiJsclient from '@manageiq/catalog-api-jsclient';
let defaultClient = @ManageiqCatalogApiJsclient.ApiClient.instance;

// Configure API key authorization: APIKeyAuth
let APIKeyAuth = defaultClient.authentications['APIKeyAuth'];
APIKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyAuth.apiKeyPrefix = 'Token';

// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new @ManageiqCatalogApiJsclient.UsersApi();
let id = "id_example"; // String | ID of the resource
apiInstance.showPortfolio(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the resource | 

### Return type

[**Portfolio**](Portfolio.md)

### Authorization

[APIKeyAuth](../README.md#APIKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="showPortfolioItem"></a>
# **showPortfolioItem**
> PortfolioItem showPortfolioItem(id)

Gets a specific portfolio item

Gets a specific portfolio item based on the portfolio item ID passed 

### Example
```javascript
import @ManageiqCatalogApiJsclient from '@manageiq/catalog-api-jsclient';
let defaultClient = @ManageiqCatalogApiJsclient.ApiClient.instance;

// Configure API key authorization: APIKeyAuth
let APIKeyAuth = defaultClient.authentications['APIKeyAuth'];
APIKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyAuth.apiKeyPrefix = 'Token';

// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

let apiInstance = new @ManageiqCatalogApiJsclient.UsersApi();
let id = "id_example"; // String | ID of the resource
apiInstance.showPortfolioItem(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the resource | 

### Return type

[**PortfolioItem**](PortfolioItem.md)

### Authorization

[APIKeyAuth](../README.md#APIKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

