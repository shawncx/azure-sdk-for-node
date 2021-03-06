/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Parameters required for creating a firewall rule on redis cache.
 *
 */
class RedisFirewallRuleCreateParameters {
  /**
   * Create a RedisFirewallRuleCreateParameters.
   * @property {string} startIP lowest IP address included in the range
   * @property {string} endIP highest IP address included in the range
   */
  constructor() {
  }

  /**
   * Defines the metadata of RedisFirewallRuleCreateParameters
   *
   * @returns {object} metadata of RedisFirewallRuleCreateParameters
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'RedisFirewallRuleCreateParameters',
      type: {
        name: 'Composite',
        className: 'RedisFirewallRuleCreateParameters',
        modelProperties: {
          startIP: {
            required: true,
            serializedName: 'properties.startIP',
            type: {
              name: 'String'
            }
          },
          endIP: {
            required: true,
            serializedName: 'properties.endIP',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = RedisFirewallRuleCreateParameters;
