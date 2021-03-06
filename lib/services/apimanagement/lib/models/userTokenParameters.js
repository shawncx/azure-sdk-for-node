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
 * Get User Token parameters.
 *
 */
class UserTokenParameters {
  /**
   * Create a UserTokenParameters.
   * @property {string} keyType The Key to be used to generate token for user.
   * Possible values include: 'primary', 'secondary'. Default value: 'primary'
   * .
   * @property {date} expiry The Expiry time of the Token. Maximum token expiry
   * time is set to 30 days. The date conforms to the following format:
   * `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
   */
  constructor() {
  }

  /**
   * Defines the metadata of UserTokenParameters
   *
   * @returns {object} metadata of UserTokenParameters
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'UserTokenParameters',
      type: {
        name: 'Composite',
        className: 'UserTokenParameters',
        modelProperties: {
          keyType: {
            required: true,
            serializedName: 'properties.keyType',
            defaultValue: 'primary',
            type: {
              name: 'Enum',
              allowedValues: [ 'primary', 'secondary' ]
            }
          },
          expiry: {
            required: true,
            serializedName: 'properties.expiry',
            type: {
              name: 'DateTime'
            }
          }
        }
      }
    };
  }
}

module.exports = UserTokenParameters;
