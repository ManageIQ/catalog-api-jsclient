# @ManageiqCatalogApiJsclient.DefaultApi

All URIs are relative to *https://localhost/api/catalog*

Method | HTTP request | Description
------------- | ------------- | -------------
[**updatePortfolioItem**](DefaultApi.md#updatePortfolioItem) | **PATCH** /portfolio_items/{id} | Edit an existing portfolio item


<a name="updatePortfolioItem"></a>
# **updatePortfolioItem**
> PortfolioItem updatePortfolioItem(id, portfolioItem)

Edit an existing portfolio item

Edits portfolio item specified by the given ID.

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

let apiInstance = new @ManageiqCatalogApiJsclient.DefaultApi();
let id = "id_example"; // String | ID of the resource
let portfolioItem = new @ManageiqCatalogApiJsclient.PortfolioItem(); // PortfolioItem | Parameters needed to update a Portfolio Item
apiInstance.updatePortfolioItem(id, portfolioItem).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the resource | 
 **portfolioItem** | [**PortfolioItem**](PortfolioItem.md)| Parameters needed to update a Portfolio Item | 

### Return type

[**PortfolioItem**](PortfolioItem.md)

### Authorization

[APIKeyAuth](../README.md#APIKeyAuth), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

