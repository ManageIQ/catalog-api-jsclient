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

import ApiClient from '../ApiClient';

/**
 * The PortfolioItem model module.
 * @module model/PortfolioItem
 * @version 0.1.0
 */
class PortfolioItem {
    /**
     * Constructs a new <code>PortfolioItem</code>.
     * @alias module:model/PortfolioItem
     */
    constructor() { 
        
        PortfolioItem.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PortfolioItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PortfolioItem} obj Optional instance to populate.
     * @return {module:model/PortfolioItem} The populated <code>PortfolioItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PortfolioItem();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('favorite')) {
                obj['favorite'] = ApiClient.convertToType(data['favorite'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('orphan')) {
                obj['orphan'] = ApiClient.convertToType(data['orphan'], 'Boolean');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('display_name')) {
                obj['display_name'] = ApiClient.convertToType(data['display_name'], 'String');
            }
            if (data.hasOwnProperty('long_description')) {
                obj['long_description'] = ApiClient.convertToType(data['long_description'], 'String');
            }
            if (data.hasOwnProperty('distributor')) {
                obj['distributor'] = ApiClient.convertToType(data['distributor'], 'String');
            }
            if (data.hasOwnProperty('documentation_url')) {
                obj['documentation_url'] = ApiClient.convertToType(data['documentation_url'], 'String');
            }
            if (data.hasOwnProperty('support_url')) {
                obj['support_url'] = ApiClient.convertToType(data['support_url'], 'String');
            }
            if (data.hasOwnProperty('workflow_ref')) {
                obj['workflow_ref'] = ApiClient.convertToType(data['workflow_ref'], 'String');
            }
            if (data.hasOwnProperty('owner')) {
                obj['owner'] = ApiClient.convertToType(data['owner'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
PortfolioItem.prototype['id'] = undefined;

/**
 * @member {Boolean} favorite
 */
PortfolioItem.prototype['favorite'] = undefined;

/**
 * @member {String} name
 */
PortfolioItem.prototype['name'] = undefined;

/**
 * @member {String} description
 */
PortfolioItem.prototype['description'] = undefined;

/**
 * @member {Boolean} orphan
 */
PortfolioItem.prototype['orphan'] = undefined;

/**
 * @member {String} state
 */
PortfolioItem.prototype['state'] = undefined;

/**
 * @member {String} display_name
 */
PortfolioItem.prototype['display_name'] = undefined;

/**
 * @member {String} long_description
 */
PortfolioItem.prototype['long_description'] = undefined;

/**
 * @member {String} distributor
 */
PortfolioItem.prototype['distributor'] = undefined;

/**
 * @member {String} documentation_url
 */
PortfolioItem.prototype['documentation_url'] = undefined;

/**
 * @member {String} support_url
 */
PortfolioItem.prototype['support_url'] = undefined;

/**
 * @member {String} workflow_ref
 */
PortfolioItem.prototype['workflow_ref'] = undefined;

/**
 * @member {String} owner
 */
PortfolioItem.prototype['owner'] = undefined;






export default PortfolioItem;

