/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { BaseResource, CloudError } from "ms-rest-azure";
import * as moment from "moment";

export {

  BaseResource,
  CloudError
};

/**
 * Common resource representation.
 */
export interface Resource extends BaseResource {
  /**
   * Resource ID.
   */
  readonly id?: string;
  /**
   * Resource name.
   */
  readonly name?: string;
  /**
   * Resource type.
   */
  readonly type?: string;
  /**
   * Resource location.
   */
  location?: string;
  /**
   * Resource tags.
   */
  tags?: { [propertyName: string]: string };
}

/**
 * Front Door represents a collection of backend endpoints to route traffic to along with rules
 * that specify how traffic is sent there.
 */
export interface FrontDoor extends Resource {
  /**
   * A friendly name for the frontDoor
   */
  friendlyName?: string;
  /**
   * Routing rules associated with this Front Door.
   */
  routingRules?: RoutingRule[];
  /**
   * Load balancing settings associated with this Front Door instance.
   */
  loadBalancingSettings?: LoadBalancingSettingsModel[];
  /**
   * Health probe settings associated with this Front Door instance.
   */
  healthProbeSettings?: HealthProbeSettingsModel[];
  /**
   * Backend pools available to routing rules.
   */
  backendPools?: BackendPool[];
  /**
   * Frontend endpoints available to routing rules.
   */
  frontendEndpoints?: FrontendEndpoint[];
  /**
   * Operational status of the Front Door load balancer. Permitted values are 'Enabled' or
   * 'Disabled'. Possible values include: 'Enabled', 'Disabled'
   */
  enabledState?: string;
  /**
   * Resource status of the Front Door. Possible values include: 'Creating', 'Enabling', 'Enabled',
   * 'Disabling', 'Disabled', 'Deleting'
   */
  resourceState?: string;
  /**
   * Provisioning state of the Front Door.
   */
  readonly provisioningState?: string;
  /**
   * The host that each frontendEndpoint must CNAME to.
   */
  readonly cname?: string;
}

/**
 * Reference to another subresource.
 */
export interface SubResource extends BaseResource {
  /**
   * Resource ID.
   */
  id?: string;
}

/**
 * A routing rule represents a specification for traffic to treat and where to send it, along with
 * health probe information.
 */
export interface RoutingRule extends SubResource {
  /**
   * Route type. Possible values include: 'Forward', 'Redirect'
   */
  routeType?: string;
  /**
   * Frontend endpoints associated with this rule
   */
  frontendEndpoints?: SubResource[];
  /**
   * Protocol schemes to match for this rule
   */
  acceptedProtocols?: string[];
  /**
   * The route patterns of the rule.
   */
  patternsToMatch?: string[];
  /**
   * A custom path used to rewrite resource paths matched by this rule. Leave empty to use incoming
   * path.
   */
  customForwardingPath?: string;
  /**
   * Protocol this rule will use when forwarding traffic to backends. Possible values include:
   * 'HttpOnly', 'HttpsOnly', 'MatchRequest'
   */
  forwardingProtocol?: string;
  /**
   * The caching configuration associated with this rule.
   */
  cacheConfiguration?: CacheConfiguration;
  /**
   * A reference to the BackendPool which this rule routes to.
   */
  backendPool?: SubResource;
  /**
   * Whether to enable use of this rule. Permitted values are 'Enabled' or 'Disabled'. Possible
   * values include: 'Enabled', 'Disabled'
   */
  enabledState?: string;
  /**
   * A reference to the redirect routing configuration.
   */
  redirectConfiguration?: RedirectConfiguration;
  /**
   * Resource status. Possible values include: 'Creating', 'Enabling', 'Enabled', 'Disabling',
   * 'Disabled', 'Deleting'
   */
  resourceState?: string;
  /**
   * Resource name.
   */
  name?: string;
  /**
   * Resource type.
   */
  readonly type?: string;
}

/**
 * Load balancing settings for a backend pool
 */
export interface LoadBalancingSettingsModel extends SubResource {
  /**
   * The number of samples to consider for load balancing decisions
   */
  sampleSize?: number;
  /**
   * The number of samples within the sample period that must succeed
   */
  successfulSamplesRequired?: number;
  /**
   * The additional latency in milliseconds for probes to fall into the lowest latency bucket
   */
  additionalLatencyMilliseconds?: number;
  /**
   * Resource status. Possible values include: 'Creating', 'Enabling', 'Enabled', 'Disabling',
   * 'Disabled', 'Deleting'
   */
  resourceState?: string;
  /**
   * Resource name.
   */
  name?: string;
  /**
   * Resource type.
   */
  readonly type?: string;
}

/**
 * Load balancing settings for a backend pool
 */
export interface HealthProbeSettingsModel extends SubResource {
  /**
   * The path to use for the health probe. Default is /
   */
  path?: string;
  /**
   * Protocol scheme to use for this probe. Possible values include: 'Http', 'Https'
   */
  protocol?: string;
  /**
   * The number of seconds between health probes.
   */
  intervalInSeconds?: number;
  /**
   * Resource status. Possible values include: 'Creating', 'Enabling', 'Enabled', 'Disabling',
   * 'Disabled', 'Deleting'
   */
  resourceState?: string;
  /**
   * Resource name.
   */
  name?: string;
  /**
   * Resource type.
   */
  readonly type?: string;
}

/**
 * A backend pool is a collection of backends that can be routed to.
 */
export interface BackendPool extends SubResource {
  /**
   * The set of backends for this pool
   */
  backends?: Backend[];
  /**
   * Load balancing settings for a backend pool
   */
  loadBalancingSettings?: SubResource;
  /**
   * L7 health probe settings for a backend pool
   */
  healthProbeSettings?: SubResource;
  /**
   * Resource status. Possible values include: 'Creating', 'Enabling', 'Enabled', 'Disabling',
   * 'Disabled', 'Deleting'
   */
  resourceState?: string;
  /**
   * Resource name.
   */
  name?: string;
  /**
   * Resource type.
   */
  readonly type?: string;
}

/**
 * The Key Vault containing the SSL certificate
 */
export interface KeyVaultCertificateSourceParametersVault {
  /**
   * Resource ID.
   */
  id?: string;
}

/**
 * Https settings for a domain
 */
export interface CustomHttpsConfiguration {
  /**
   * Defines the source of the SSL certificate. Possible values include: 'AzureKeyVault',
   * 'FrontDoor'
   */
  certificateSource?: string;
  /**
   * Defines the TLS extension protocol that is used for secure delivery. Possible values include:
   * 'ServerNameIndication'
   */
  protocolType?: string;
  /**
   * The Key Vault containing the SSL certificate
   */
  vault?: KeyVaultCertificateSourceParametersVault;
  /**
   * The name of the Key Vault secret representing the full certificate PFX
   */
  secretName?: string;
  /**
   * The version of the Key Vault secret representing the full certificate PFX
   */
  secretVersion?: string;
  /**
   * Defines the type of the certificate used for secure connections to a frontendEndpoint.
   * Possible values include: 'Dedicated'
   */
  certificateType?: string;
}

/**
 * A frontend endpoint used for routing.
 */
export interface FrontendEndpoint extends SubResource {
  /**
   * The host name of the frontendEndpoint. Must be a domain name.
   */
  hostName?: string;
  /**
   * Whether to allow session affinity on this host. Valid options are 'Enabled' or 'Disabled'.
   * Possible values include: 'Enabled', 'Disabled'
   */
  sessionAffinityEnabledState?: string;
  /**
   * UNUSED. This field will be ignored. The TTL to use in seconds for session affinity, if
   * applicable.
   */
  sessionAffinityTtlSeconds?: number;
  /**
   * Defines the Web Application Firewall policy for each host (if applicable)
   */
  webApplicationFirewallPolicyLink?: FrontendEndpointUpdateParametersWebApplicationFirewallPolicyLink;
  /**
   * Resource status. Possible values include: 'Creating', 'Enabling', 'Enabled', 'Disabling',
   * 'Disabled', 'Deleting'
   */
  resourceState?: string;
  /**
   * Provisioning status of Custom Https of the frontendEndpoint. Possible values include:
   * 'Enabling', 'Enabled', 'Disabling', 'Disabled', 'Failed'
   */
  readonly customHttpsProvisioningState?: string;
  /**
   * Provisioning substate shows the progress of custom HTTPS enabling/disabling process step by
   * step. Possible values include: 'SubmittingDomainControlValidationRequest',
   * 'PendingDomainControlValidationREquestApproval', 'DomainControlValidationRequestApproved',
   * 'DomainControlValidationRequestRejected', 'DomainControlValidationRequestTimedOut',
   * 'IssuingCertificate', 'DeployingCertificate', 'CertificateDeployed', 'DeletingCertificate',
   * 'CertificateDeleted'
   */
  readonly customHttpsProvisioningSubstate?: string;
  /**
   * The configuration specifying how to enable HTTPS
   */
  readonly customHttpsConfiguration?: CustomHttpsConfiguration;
  /**
   * Resource name.
   */
  name?: string;
  /**
   * Resource type.
   */
  readonly type?: string;
}

/**
 * The properties needed to update a Front Door
 */
export interface FrontDoorUpdateParameters {
  /**
   * A friendly name for the frontDoor
   */
  friendlyName?: string;
  /**
   * Routing rules associated with this Front Door.
   */
  routingRules?: RoutingRule[];
  /**
   * Load balancing settings associated with this Front Door instance.
   */
  loadBalancingSettings?: LoadBalancingSettingsModel[];
  /**
   * Health probe settings associated with this Front Door instance.
   */
  healthProbeSettings?: HealthProbeSettingsModel[];
  /**
   * Backend pools available to routing rules.
   */
  backendPools?: BackendPool[];
  /**
   * Frontend endpoints available to routing rules.
   */
  frontendEndpoints?: FrontendEndpoint[];
  /**
   * Operational status of the Front Door load balancer. Permitted values are 'Enabled' or
   * 'Disabled'. Possible values include: 'Enabled', 'Disabled'
   */
  enabledState?: string;
}

/**
 * Parameters required for content purge.
 */
export interface PurgeParameters {
  /**
   * The path to the content to be purged. Can describe a file path or a wild card directory.
   */
  contentPaths: string[];
}

/**
 * Caching settings for a caching-type route. To disable caching, do not provide a
 * cacheConfiguration object.
 */
export interface CacheConfiguration {
  /**
   * Treatment of URL query terms when forming the cache key. Possible values include: 'StripNone',
   * 'StripAll'
   */
  queryParameterStripDirective?: string;
  /**
   * Whether to use dynamic compression for cached content. Possible values include: 'Enabled',
   * 'Disabled'
   */
  dynamicCompression?: string;
}

/**
 * The configuration for a redirect routing rule. This object is needed only if the type property
 * of RoutingRule is set to Redirect.
 */
export interface RedirectConfiguration {
  /**
   * The redirect type the rule will use when redirecting traffic. Possible values include:
   * 'Moved(301)', 'Found(302)', 'TemporaryRedirect(307)', 'PermanentRedirect(308)'
   */
  redirectType?: string;
  /**
   * The protocol of the destination where the traffic is forwarded to. Possible values include:
   * 'MatchRequest', 'Http', 'Https'
   */
  destinationProtocol?: string;
  /**
   * If left blank, then we will use the incoming host as the destination host.
   */
  destinationHost?: string;
  /**
   * Path cannot be empty and must start with /.
   */
  destinationPath?: string;
  /**
   * Fragment is the part of the URL that comes after #. Do not include the #.
   */
  destinationFragment?: string;
  /**
   * Indicates whether the path is preserved.
   */
  preservePath?: boolean;
  /**
   * Indicates whether the query string is preserved.
   */
  preserveQueryString?: boolean;
  /**
   * Any string to be added to the query string in the destination URL. ? and & will be added
   * automatically so do not include them.
   */
  extraQueryString?: string;
}

/**
 * Routing rules to apply to an endpoint
 */
export interface RoutingRuleUpdateParameters {
  /**
   * Route type. Possible values include: 'Forward', 'Redirect'
   */
  routeType?: string;
  /**
   * Frontend endpoints associated with this rule
   */
  frontendEndpoints?: SubResource[];
  /**
   * Protocol schemes to match for this rule
   */
  acceptedProtocols?: string[];
  /**
   * The route patterns of the rule.
   */
  patternsToMatch?: string[];
  /**
   * A custom path used to rewrite resource paths matched by this rule. Leave empty to use incoming
   * path.
   */
  customForwardingPath?: string;
  /**
   * Protocol this rule will use when forwarding traffic to backends. Possible values include:
   * 'HttpOnly', 'HttpsOnly', 'MatchRequest'
   */
  forwardingProtocol?: string;
  /**
   * The caching configuration associated with this rule.
   */
  cacheConfiguration?: CacheConfiguration;
  /**
   * A reference to the BackendPool which this rule routes to.
   */
  backendPool?: SubResource;
  /**
   * Whether to enable use of this rule. Permitted values are 'Enabled' or 'Disabled'. Possible
   * values include: 'Enabled', 'Disabled'
   */
  enabledState?: string;
  /**
   * A reference to the redirect routing configuration.
   */
  redirectConfiguration?: RedirectConfiguration;
}

/**
 * Backend address of a frontDoor load balancer.
 */
export interface Backend {
  /**
   * Location of the backend (IP address or FQDN)
   */
  address?: string;
  /**
   * The HTTP TCP port number. Must be between 1 and 65535.
   */
  httpPort?: number;
  /**
   * The HTTPS TCP port number. Must be between 1 and 65535.
   */
  httpsPort?: number;
  /**
   * Whether to enable use of this backend. Permitted values are 'Enabled' or 'Disabled'. Possible
   * values include: 'Enabled', 'Disabled'
   */
  enabledState?: string;
  /**
   * Priority to use for load balancing. Higher priorities will not be used for load balancing if
   * any lower priority backend is healthy.
   */
  priority?: number;
  /**
   * Weight of this endpoint for load balancing purposes.
   */
  weight?: number;
  /**
   * The value to use as the host header sent to the backend. If blank or unspecified, this
   * defaults to the incoming host.
   */
  backendHostHeader?: string;
}

/**
 * Round-Robin load balancing settings for a backend pool
 */
export interface LoadBalancingSettingsUpdateParameters {
  /**
   * The number of samples to consider for load balancing decisions
   */
  sampleSize?: number;
  /**
   * The number of samples within the sample period that must succeed
   */
  successfulSamplesRequired?: number;
  /**
   * The additional latency in milliseconds for probes to fall into the lowest latency bucket
   */
  additionalLatencyMilliseconds?: number;
}

/**
 * L7 health probe settings for a backend pool
 */
export interface HealthProbeSettingsUpdateParameters {
  /**
   * The path to use for the health probe. Default is /
   */
  path?: string;
  /**
   * Protocol scheme to use for this probe. Possible values include: 'Http', 'Https'
   */
  protocol?: string;
  /**
   * The number of seconds between health probes.
   */
  intervalInSeconds?: number;
}

/**
 * A collection of backends that can be routed to.
 */
export interface BackendPoolUpdateParameters {
  /**
   * The set of backends for this pool
   */
  backends?: Backend[];
  /**
   * Load balancing settings for a backend pool
   */
  loadBalancingSettings?: SubResource;
  /**
   * L7 health probe settings for a backend pool
   */
  healthProbeSettings?: SubResource;
}

/**
 * Defines the Web Application Firewall policy for each host (if applicable)
 */
export interface FrontendEndpointUpdateParametersWebApplicationFirewallPolicyLink {
  /**
   * Resource ID.
   */
  id?: string;
}

/**
 * Frontend endpoint used in routing rule
 */
export interface FrontendEndpointUpdateParameters {
  /**
   * The host name of the frontendEndpoint. Must be a domain name.
   */
  hostName?: string;
  /**
   * Whether to allow session affinity on this host. Valid options are 'Enabled' or 'Disabled'.
   * Possible values include: 'Enabled', 'Disabled'
   */
  sessionAffinityEnabledState?: string;
  /**
   * UNUSED. This field will be ignored. The TTL to use in seconds for session affinity, if
   * applicable.
   */
  sessionAffinityTtlSeconds?: number;
  /**
   * Defines the Web Application Firewall policy for each host (if applicable)
   */
  webApplicationFirewallPolicyLink?: FrontendEndpointUpdateParametersWebApplicationFirewallPolicyLink;
}

/**
 * Input of the custom domain to be validated for DNS mapping.
 */
export interface ValidateCustomDomainInput {
  /**
   * The host name of the custom domain. Must be a domain name.
   */
  hostName: string;
}

/**
 * Output of custom domain validation.
 */
export interface ValidateCustomDomainOutput {
  /**
   * Indicates whether the custom domain is valid or not.
   */
  readonly customDomainValidated?: boolean;
  /**
   * The reason why the custom domain is not valid.
   */
  readonly reason?: string;
  /**
   * Error message describing why the custom domain is not valid.
   */
  readonly message?: string;
}

/**
 * Error response indicates Front Door service is not able to process the incoming request. The
 * reason is provided in the error message.
 */
export interface ErrorResponse {
  /**
   * Error code.
   */
  readonly code?: string;
  /**
   * Error message indicating why the operation failed.
   */
  readonly message?: string;
}

/**
 * Input of CheckNameAvailability API.
 */
export interface CheckNameAvailabilityInput {
  /**
   * The resource name to validate.
   */
  name: string;
  /**
   * The type of the resource whose name is to be validated. Possible values include:
   * 'Microsoft.Network/frontDoors', 'Microsoft.Network/frontDoors/frontendEndpoints'
   */
  type: string;
}

/**
 * Output of check name availability API.
 */
export interface CheckNameAvailabilityOutput {
  /**
   * Indicates whether the name is available. Possible values include: 'Available', 'Unavailable'
   */
  readonly nameAvailability?: string;
  /**
   * The reason why the name is not available.
   */
  readonly reason?: string;
  /**
   * The detailed error message describing why the name is not available.
   */
  readonly message?: string;
}

export interface ErrorDetails {
  code?: string;
  target?: string;
  message?: string;
}

export interface ErrorModel {
  code?: string;
  message?: string;
  target?: string;
  details?: ErrorDetails[];
  innerError?: string;
}

/**
 * The response body contains the status of the specified asynchronous operation, indicating
 * whether it has succeeded, is in progress, or has failed. Note that this status is distinct from
 * the HTTP status code returned for the Get Operation Status operation itself. If the asynchronous
 * operation succeeded, the response body includes the HTTP status code for the successful request.
 * If the asynchronous operation failed, the response body includes the HTTP status code for the
 * failed request and error information regarding the failure.
*/
export interface AzureAsyncOperationResult {
  /**
   * Status of the Azure async operation. Possible values are: 'InProgress', 'Succeeded', and
   * 'Failed'. Possible values include: 'InProgress', 'Succeeded', 'Failed'
  */
  status?: string;
  error?: ErrorModel;
}

/**
 * Tags object for patch operations.
*/
export interface TagsObject {
  /**
   * Resource tags.
  */
  tags?: { [propertyName: string]: string };
}

/**
 * Defines contents of a web application firewall global configuration
*/
export interface PolicySettings {
  /**
   * describes if the policy is in enabled state or disabled state. Possible values include:
   * 'Disabled', 'Enabled'
  */
  enabledState?: string;
  /**
   * Describes if it is in detection mode  or prevention mode at policy level. Possible values
   * include: 'Prevention', 'Detection'
  */
  mode?: string;
}

/**
 * Define match conditions
*/
export interface MatchCondition1 {
  /**
   * Match Variable. Possible values include: 'RemoteAddr', 'RequestMethod', 'QueryString',
   * 'PostArgs', 'RequestUri', 'RequestHeader', 'RequestBody'
  */
  matchVariable: string;
  /**
   * Name of selector in RequestHeader or RequestBody to be matched
  */
  selector?: string;
  /**
   * Describes operator to be matched. Possible values include: 'Any', 'IPMatch', 'GeoMatch',
   * 'Equal', 'Contains', 'LessThan', 'GreaterThan', 'LessThanOrEqual', 'GreaterThanOrEqual',
   * 'BeginsWith', 'EndsWith'
  */
  operator: string;
  /**
   * Describes if this is negate condition or not
  */
  negateCondition?: boolean;
  /**
   * Match value
  */
  matchValue: string[];
}

/**
 * Defines contents of a web application rule
*/
export interface CustomRule {
  /**
   * Gets name of the resource that is unique within a policy. This name can be used to access the
   * resource.
  */
  name?: string;
  /**
   * Gets a unique read-only string that changes whenever the resource is updated.
  */
  readonly etag?: string;
  /**
   * Describes priority of the rule. Rules with a lower value will be evaluated before rules with a
   * higher value
  */
  priority: number;
  /**
   * Describes type of rule. Possible values include: 'MatchRule', 'RateLimitRule'
  */
  ruleType: string;
  /**
   * Defines rate limit duration. Default - 1 minute
  */
  rateLimitDurationInMinutes?: number;
  /**
   * Defines rate limit threshold
  */
  rateLimitThreshold?: number;
  /**
   * List of match conditions
  */
  matchConditions: MatchCondition1[];
  /**
   * Type of Actions. Possible values include: 'Allow', 'Block', 'Log'
  */
  action: string;
  /**
   * List of transforms
  */
  transforms?: string[];
}

/**
 * Defines contents of custom rules
*/
export interface CustomRules {
  /**
   * List of rules
  */
  rules?: CustomRule[];
}

/**
 * Base class for all types of ManagedRuleSet.
*/
export interface ManagedRuleSet {
  /**
   * Describes priority of the rule
  */
  priority?: number;
  /**
   * defines version of the rule set
  */
  version?: number;
  /**
   * Polymorphic Discriminator
  */
  ruleSetType: string;
}

/**
 * Defines ManagedRuleSets - array of managedRuleSet
*/
export interface ManagedRuleSets {
  /**
   * List of rules
  */
  ruleSets?: ManagedRuleSet[];
}

/**
 * Defines web application firewall policy.
*/
export interface WebApplicationFirewallPolicy1 extends Resource {
  /**
   * Describes  policySettings for policy
  */
  policySettings?: PolicySettings;
  /**
   * Describes custom rules inside the policy
  */
  customRules?: CustomRules;
  /**
   * Describes managed rules inside the policy
  */
  managedRules?: ManagedRuleSets;
  /**
   * Provisioning state of the WebApplicationFirewallPolicy.
  */
  readonly provisioningState?: string;
  /**
   * @summary Resource status of the policy.
   * @description Possible values include: 'Creating', 'Enabling', 'Enabled', 'Disabling',
   * 'Disabled', 'Deleting'
  */
  readonly resourceState?: string;
  /**
   * Gets a unique read-only string that changes whenever the resource is updated.
  */
  etag?: string;
}

/**
 * Defines contents of a web application rule
*/
export interface AzureManagedOverrideRuleGroup {
  /**
   * Describes override rule group. Possible values include: 'SqlInjection', 'XSS'
  */
  ruleGroupOverride: string;
  /**
   * Type of Actions. Possible values include: 'Allow', 'Block', 'Log'
  */
  action: string;
}

/**
 * Describes azure managed provider.
*/
export interface AzureManagedRuleSet extends ManagedRuleSet {
  /**
   * List of azure managed provider override configuration (optional)
  */
  ruleGroupOverrides?: AzureManagedOverrideRuleGroup[];
}

/**
 * Result of the request to list Front Doors. It contains a list of Front Door objects and a URL
 * link to get the next set of results.
*/
export interface FrontDoorListResult extends Array<FrontDoor> {
  /**
   * URL to get the next set of Front Door objects if there are any.
  */
  nextLink?: string;
}

/**
 * Result of the request to list Routing Rules. It contains a list of Routing Rule objects and a
 * URL link to get the next set of results.
*/
export interface RoutingRuleListResult extends Array<RoutingRule> {
  /**
   * URL to get the next set of RoutingRule objects if there are any.
  */
  nextLink?: string;
}

/**
 * Result of the request to list HealthProbeSettings. It contains a list of HealthProbeSettings
 * objects and a URL link to get the next set of results.
*/
export interface HealthProbeSettingsListResult extends Array<HealthProbeSettingsModel> {
  /**
   * URL to get the next set of HealthProbeSettings objects if there are any.
  */
  nextLink?: string;
}

/**
 * Result of the request to list load balancing settings. It contains a list of load balancing
 * settings objects and a URL link to get the next set of results.
*/
export interface LoadBalancingSettingsListResult extends Array<LoadBalancingSettingsModel> {
  /**
   * URL to get the next set of LoadBalancingSettings objects if there are any.
  */
  nextLink?: string;
}

/**
 * Result of the request to list Backend Pools. It contains a list of Backend Pools objects and a
 * URL link to get the next set of results.
*/
export interface BackendPoolListResult extends Array<BackendPool> {
  /**
   * URL to get the next set of BackendPool objects if there are any.
  */
  nextLink?: string;
}

/**
 * Result of the request to list frontend endpoints. It contains a list of Frontend endpoint
 * objects and a URL link to get the next set of results.
*/
export interface FrontendEndpointsListResult extends Array<FrontendEndpoint> {
  /**
   * URL to get the next set of frontend endpoints if there are any.
  */
  nextLink?: string;
}

/**
 * Result of the request to list WebApplicationFirewallPolicies. It contains a list of
 * WebApplicationFirewallPolicy objects and a URL link to get the next set of results.
*/
export interface WebApplicationFirewallPolicyListResult extends
Array<WebApplicationFirewallPolicy1> {
  /**
   * URL to get the next set of WebApplicationFirewallPolicy objects if there are any.
  */
  nextLink?: string;
}
