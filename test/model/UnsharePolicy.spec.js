/**
 * Catalog API
 * This API gets and orders catalog items from different cloud sources.
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
    factory(root.expect, root.@ManageiqCatalogApiJsclient);
  }
}(this, function(expect, @ManageiqCatalogApiJsclient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new @ManageiqCatalogApiJsclient.UnsharePolicy();
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

  describe('UnsharePolicy', function() {
    it('should create an instance of UnsharePolicy', function() {
      // uncomment below and update the code to test UnsharePolicy
      //var instane = new @ManageiqCatalogApiJsclient.UnsharePolicy();
      //expect(instance).to.be.a(@ManageiqCatalogApiJsclient.UnsharePolicy);
    });

    it('should have the property permissions (base name: "permissions")', function() {
      // uncomment below and update the code to test the property permissions
      //var instane = new @ManageiqCatalogApiJsclient.UnsharePolicy();
      //expect(instance).to.be();
    });

    it('should have the property groupUuids (base name: "group_uuids")', function() {
      // uncomment below and update the code to test the property groupUuids
      //var instane = new @ManageiqCatalogApiJsclient.UnsharePolicy();
      //expect(instance).to.be();
    });

  });

}));
