/**
 * Catalog API
 * This is a API to fetch and order catalog items from different cloud sources
 *
 * OpenAPI spec version: 0.1.0
 * Contact: support@redhat.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CatalogApi);
  }
}(this, function(expect, CatalogApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CatalogApi.UsersApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('UsersApi', function() {
    describe('addToOrder', function() {
      it('should call addToOrder successfully', function(done) {
        //uncomment below and update the code to test addToOrder
        //instance.addToOrder(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('fetchPortfolioItemsWithPortfolio', function() {
      it('should call fetchPortfolioItemsWithPortfolio successfully', function(done) {
        //uncomment below and update the code to test fetchPortfolioItemsWithPortfolio
        //instance.fetchPortfolioItemsWithPortfolio(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listOrderItems', function() {
      it('should call listOrderItems successfully', function(done) {
        //uncomment below and update the code to test listOrderItems
        //instance.listOrderItems(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listOrders', function() {
      it('should call listOrders successfully', function(done) {
        //uncomment below and update the code to test listOrders
        //instance.listOrders(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listPortfolioItems', function() {
      it('should call listPortfolioItems successfully', function(done) {
        //uncomment below and update the code to test listPortfolioItems
        //instance.listPortfolioItems(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listPortfolios', function() {
      it('should call listPortfolios successfully', function(done) {
        //uncomment below and update the code to test listPortfolios
        //instance.listPortfolios(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listProgressMessages', function() {
      it('should call listProgressMessages successfully', function(done) {
        //uncomment below and update the code to test listProgressMessages
        //instance.listProgressMessages(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listProviderControlParameters', function() {
      it('should call listProviderControlParameters successfully', function(done) {
        //uncomment below and update the code to test listProviderControlParameters
        //instance.listProviderControlParameters(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listServicePlans', function() {
      it('should call listServicePlans successfully', function(done) {
        //uncomment below and update the code to test listServicePlans
        //instance.listServicePlans(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('showOrderItem', function() {
      it('should call showOrderItem successfully', function(done) {
        //uncomment below and update the code to test showOrderItem
        //instance.showOrderItem(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('showPortfolio', function() {
      it('should call showPortfolio successfully', function(done) {
        //uncomment below and update the code to test showPortfolio
        //instance.showPortfolio(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('showPortfolioItem', function() {
      it('should call showPortfolioItem successfully', function(done) {
        //uncomment below and update the code to test showPortfolioItem
        //instance.showPortfolioItem(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));