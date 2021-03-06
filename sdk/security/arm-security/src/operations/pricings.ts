/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/pricingsMappers";
import * as Parameters from "../models/parameters";
import { SecurityCenterContext } from "../securityCenterContext";

/** Class representing a Pricings. */
export class Pricings {
  private readonly client: SecurityCenterContext;

  /**
   * Create a Pricings.
   * @param {SecurityCenterContext} client Reference to the service client.
   */
  constructor(client: SecurityCenterContext) {
    this.client = client;
  }

  /**
   * Security pricing configurations in the subscription
   * @param [options] The optional parameters
   * @returns Promise<Models.PricingsListResponse>
   */
  list(options?: msRest.RequestOptionsBase): Promise<Models.PricingsListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.PricingList>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PricingList>): void;
  list(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PricingList>, callback?: msRest.ServiceCallback<Models.PricingList>): Promise<Models.PricingsListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.PricingsListResponse>;
  }

  /**
   * Security pricing configurations in the resource group
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param [options] The optional parameters
   * @returns Promise<Models.PricingsListByResourceGroupResponse>
   */
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.PricingsListByResourceGroupResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.PricingList>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PricingList>): void;
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PricingList>, callback?: msRest.ServiceCallback<Models.PricingList>): Promise<Models.PricingsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listByResourceGroupOperationSpec,
      callback) as Promise<Models.PricingsListByResourceGroupResponse>;
  }

  /**
   * Security pricing configuration in the subscriptionSecurity pricing configuration in the
   * subscription
   * @param pricingName name of the pricing configuration
   * @param [options] The optional parameters
   * @returns Promise<Models.PricingsGetSubscriptionPricingResponse>
   */
  getSubscriptionPricing(pricingName: string, options?: msRest.RequestOptionsBase): Promise<Models.PricingsGetSubscriptionPricingResponse>;
  /**
   * @param pricingName name of the pricing configuration
   * @param callback The callback
   */
  getSubscriptionPricing(pricingName: string, callback: msRest.ServiceCallback<Models.Pricing>): void;
  /**
   * @param pricingName name of the pricing configuration
   * @param options The optional parameters
   * @param callback The callback
   */
  getSubscriptionPricing(pricingName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Pricing>): void;
  getSubscriptionPricing(pricingName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Pricing>, callback?: msRest.ServiceCallback<Models.Pricing>): Promise<Models.PricingsGetSubscriptionPricingResponse> {
    return this.client.sendOperationRequest(
      {
        pricingName,
        options
      },
      getSubscriptionPricingOperationSpec,
      callback) as Promise<Models.PricingsGetSubscriptionPricingResponse>;
  }

  /**
   * Security pricing configuration in the subscription
   * @param pricingName name of the pricing configuration
   * @param pricing Pricing object
   * @param [options] The optional parameters
   * @returns Promise<Models.PricingsUpdateSubscriptionPricingResponse>
   */
  updateSubscriptionPricing(pricingName: string, pricing: Models.Pricing, options?: msRest.RequestOptionsBase): Promise<Models.PricingsUpdateSubscriptionPricingResponse>;
  /**
   * @param pricingName name of the pricing configuration
   * @param pricing Pricing object
   * @param callback The callback
   */
  updateSubscriptionPricing(pricingName: string, pricing: Models.Pricing, callback: msRest.ServiceCallback<Models.Pricing>): void;
  /**
   * @param pricingName name of the pricing configuration
   * @param pricing Pricing object
   * @param options The optional parameters
   * @param callback The callback
   */
  updateSubscriptionPricing(pricingName: string, pricing: Models.Pricing, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Pricing>): void;
  updateSubscriptionPricing(pricingName: string, pricing: Models.Pricing, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Pricing>, callback?: msRest.ServiceCallback<Models.Pricing>): Promise<Models.PricingsUpdateSubscriptionPricingResponse> {
    return this.client.sendOperationRequest(
      {
        pricingName,
        pricing,
        options
      },
      updateSubscriptionPricingOperationSpec,
      callback) as Promise<Models.PricingsUpdateSubscriptionPricingResponse>;
  }

  /**
   * Security pricing configuration in the resource group
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param pricingName name of the pricing configuration
   * @param [options] The optional parameters
   * @returns Promise<Models.PricingsGetResourceGroupPricingResponse>
   */
  getResourceGroupPricing(resourceGroupName: string, pricingName: string, options?: msRest.RequestOptionsBase): Promise<Models.PricingsGetResourceGroupPricingResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param pricingName name of the pricing configuration
   * @param callback The callback
   */
  getResourceGroupPricing(resourceGroupName: string, pricingName: string, callback: msRest.ServiceCallback<Models.Pricing>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param pricingName name of the pricing configuration
   * @param options The optional parameters
   * @param callback The callback
   */
  getResourceGroupPricing(resourceGroupName: string, pricingName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Pricing>): void;
  getResourceGroupPricing(resourceGroupName: string, pricingName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Pricing>, callback?: msRest.ServiceCallback<Models.Pricing>): Promise<Models.PricingsGetResourceGroupPricingResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        pricingName,
        options
      },
      getResourceGroupPricingOperationSpec,
      callback) as Promise<Models.PricingsGetResourceGroupPricingResponse>;
  }

  /**
   * Security pricing configuration in the resource group
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param pricingName name of the pricing configuration
   * @param pricing Pricing object
   * @param [options] The optional parameters
   * @returns Promise<Models.PricingsCreateOrUpdateResourceGroupPricingResponse>
   */
  createOrUpdateResourceGroupPricing(resourceGroupName: string, pricingName: string, pricing: Models.Pricing, options?: msRest.RequestOptionsBase): Promise<Models.PricingsCreateOrUpdateResourceGroupPricingResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param pricingName name of the pricing configuration
   * @param pricing Pricing object
   * @param callback The callback
   */
  createOrUpdateResourceGroupPricing(resourceGroupName: string, pricingName: string, pricing: Models.Pricing, callback: msRest.ServiceCallback<Models.Pricing>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param pricingName name of the pricing configuration
   * @param pricing Pricing object
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdateResourceGroupPricing(resourceGroupName: string, pricingName: string, pricing: Models.Pricing, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Pricing>): void;
  createOrUpdateResourceGroupPricing(resourceGroupName: string, pricingName: string, pricing: Models.Pricing, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Pricing>, callback?: msRest.ServiceCallback<Models.Pricing>): Promise<Models.PricingsCreateOrUpdateResourceGroupPricingResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        pricingName,
        pricing,
        options
      },
      createOrUpdateResourceGroupPricingOperationSpec,
      callback) as Promise<Models.PricingsCreateOrUpdateResourceGroupPricingResponse>;
  }

  /**
   * Security pricing configurations in the subscription
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.PricingsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.PricingsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.PricingList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PricingList>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PricingList>, callback?: msRest.ServiceCallback<Models.PricingList>): Promise<Models.PricingsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.PricingsListNextResponse>;
  }

  /**
   * Security pricing configurations in the resource group
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.PricingsListByResourceGroupNextResponse>
   */
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.PricingsListByResourceGroupNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.PricingList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PricingList>): void;
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PricingList>, callback?: msRest.ServiceCallback<Models.PricingList>): Promise<Models.PricingsListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByResourceGroupNextOperationSpec,
      callback) as Promise<Models.PricingsListByResourceGroupNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Security/pricings",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PricingList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/pricings",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PricingList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getSubscriptionPricingOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Security/pricings/{pricingName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.pricingName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Pricing
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const updateSubscriptionPricingOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Security/pricings/{pricingName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.pricingName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "pricing",
    mapper: {
      ...Mappers.Pricing,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Pricing
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getResourceGroupPricingOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/pricings/{pricingName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.pricingName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Pricing
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const createOrUpdateResourceGroupPricingOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/pricings/{pricingName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.pricingName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "pricing",
    mapper: {
      ...Mappers.Pricing,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Pricing
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PricingList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByResourceGroupNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PricingList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
