/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../../base/Page');
import Response = require('../../../../../../http/response');
import V2010 = require('../../../../V2010');
import { SerializableClass } from '../../../../../../interfaces';

/**
 * @description Initialize the IpAccessControlListMappingList
 *
 * @param version - Version of the resource
 * @param accountSid - The unique id of the Account that responsible for this resource.
 * @param domainSid - A string that uniquely identifies the SIP Domain
 */
declare function IpAccessControlListMappingList(version: V2010, accountSid: string, domainSid: string): IpAccessControlListMappingListInstance;

interface IpAccessControlListMappingListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): IpAccessControlListMappingContext;
  /**
   * create a IpAccessControlListMappingInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: IpAccessControlListMappingListInstanceCreateOptions, callback?: (error: Error | null, item: IpAccessControlListMappingInstance) => any): Promise<IpAccessControlListMappingInstance>;
  /**
   * Streams IpAccessControlListMappingInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Function to process each record
   */
  each(opts?: IpAccessControlListMappingListInstanceEachOptions, callback?: (item: IpAccessControlListMappingInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a ip_access_control_list_mapping
   *
   * @param sid - The sid
   */
  get(sid: string): IpAccessControlListMappingContext;
  /**
   * Retrieve a single target page of IpAccessControlListMappingInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: IpAccessControlListMappingPage) => any): Promise<IpAccessControlListMappingPage>;
  /**
   * Lists IpAccessControlListMappingInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: IpAccessControlListMappingListInstanceOptions, callback?: (error: Error | null, items: IpAccessControlListMappingInstance[]) => any): Promise<IpAccessControlListMappingInstance[]>;
  /**
   * Retrieve a single page of IpAccessControlListMappingInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: IpAccessControlListMappingListInstancePageOptions, callback?: (error: Error | null, items: IpAccessControlListMappingPage) => any): Promise<IpAccessControlListMappingPage>;
}

/**
 * Options to pass to create
 *
 * @property ipAccessControlListSid - The ip_access_control_list_sid
 */
interface IpAccessControlListMappingListInstanceCreateOptions {
  ipAccessControlListSid: string;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no pageSize is defined but a limit is defined,
 *                         each() will attempt to read the limit with the most efficient
 *                         page size, i.e. min(limit, 1000)
 */
interface IpAccessControlListMappingListInstanceEachOptions {
  callback?: (item: IpAccessControlListMappingInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to list
 *
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no page_size is defined but a limit is defined,
 *                         list() will attempt to read the limit with the most
 *                         efficient page size, i.e. min(limit, 1000)
 */
interface IpAccessControlListMappingListInstanceOptions {
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to page
 *
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 */
interface IpAccessControlListMappingListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface IpAccessControlListMappingPayload extends IpAccessControlListMappingResource, Page.TwilioResponsePayload {
}

interface IpAccessControlListMappingResource {
  account_sid: string;
  date_created: Date;
  date_updated: Date;
  friendly_name: string;
  sid: string;
  subresource_uris: string;
  uri: string;
}

interface IpAccessControlListMappingSolution {
  accountSid?: string;
  domainSid?: string;
}


declare class IpAccessControlListMappingContext {
  /**
   * Initialize the IpAccessControlListMappingContext
   *
   * @param version - Version of the resource
   * @param accountSid - The account_sid
   * @param domainSid - The domain_sid
   * @param sid - The sid
   */
  constructor(version: V2010, accountSid: string, domainSid: string, sid: string);

  /**
   * fetch a IpAccessControlListMappingInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: IpAccessControlListMappingInstance) => any): Promise<IpAccessControlListMappingInstance>;
  /**
   * remove a IpAccessControlListMappingInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: IpAccessControlListMappingInstance) => any): void;
}


declare class IpAccessControlListMappingInstance extends SerializableClass {
  /**
   * Initialize the IpAccessControlListMappingContext
   *
   * @property accountSid - The unique id of the Account that responsible for this resource.
   * @property dateCreated - The date that this resource was created, given as GMT in RFC 2822 format.
   * @property dateUpdated - The date that this resource was last updated, given as GMT in RFC 2822 format.
   * @property friendlyName - A human readable descriptive text for this resource, up to 64 characters long.
   * @property sid - A 34 character string that uniquely identifies this resource.
   * @property uri - The URI for this resource, relative to https://api.twilio.com
   * @property subresourceUris - The subresource_uris
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The unique id of the Account that responsible for this resource.
   * @param domainSid - A string that uniquely identifies the SIP Domain
   * @param sid - The sid
   */
  constructor(version: V2010, payload: IpAccessControlListMappingPayload, accountSid: string, domainSid: string, sid: string);

  private _proxy: IpAccessControlListMappingContext;
  accountSid: string;
  dateCreated: Date;
  dateUpdated: Date;
  /**
   * fetch a IpAccessControlListMappingInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: IpAccessControlListMappingInstance) => any): void;
  friendlyName: string;
  /**
   * remove a IpAccessControlListMappingInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: IpAccessControlListMappingInstance) => any): void;
  sid: string;
  subresourceUris: string;
  /**
   * Produce a plain JSON object version of the IpAccessControlListMappingInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
  uri: string;
}


declare class IpAccessControlListMappingPage extends Page<V2010, IpAccessControlListMappingPayload, IpAccessControlListMappingResource, IpAccessControlListMappingInstance> {
  /**
   * Initialize the IpAccessControlListMappingPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2010, response: Response<string>, solution: IpAccessControlListMappingSolution);

  /**
   * Build an instance of IpAccessControlListMappingInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: IpAccessControlListMappingPayload): IpAccessControlListMappingInstance;
}

export { IpAccessControlListMappingContext, IpAccessControlListMappingInstance, IpAccessControlListMappingList, IpAccessControlListMappingListInstance, IpAccessControlListMappingListInstanceCreateOptions, IpAccessControlListMappingListInstanceEachOptions, IpAccessControlListMappingListInstanceOptions, IpAccessControlListMappingListInstancePageOptions, IpAccessControlListMappingPage, IpAccessControlListMappingPayload, IpAccessControlListMappingResource, IpAccessControlListMappingSolution }
