/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V2 = require('../../../V2');
import serialize = require('../../../../../base/serialize');
import { SerializableClass } from '../../../../../interfaces';

type UserChannelChannelStatus = 'joined'|'invited'|'not_participating';

type UserChannelNotificationLevel = 'default'|'muted';

/**
 * Initialize the UserChannelList
 *
 * @param version - Version of the resource
 * @param serviceSid - The SID of the Service that the resource is associated with
 * @param userSid - The SID of the User the User Channel belongs to
 */
declare function UserChannelList(version: V2, serviceSid: string, userSid: string): UserChannelListInstance;

/**
 * Options to pass to update
 *
 * @property lastConsumedMessageIndex - The index of the last Message that the Member has read within the Channel
 * @property lastConsumptionTimestamp - The ISO 8601 based timestamp string that represents the datetime of the last Message read event for the Member within the Channel
 * @property notificationLevel - The push notification level to assign to the User Channel
 */
interface UserChannelInstanceUpdateOptions {
  lastConsumedMessageIndex?: number;
  lastConsumptionTimestamp?: Date;
  notificationLevel?: UserChannelNotificationLevel;
}

interface UserChannelListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): UserChannelContext;
  /**
   * Streams UserChannelInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Function to process each record
   */
  each(opts?: UserChannelListInstanceEachOptions, callback?: (item: UserChannelInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a user_channel
   *
   * @param channelSid - The SID of the Channel that has the User Channel to fetch
   */
  get(channelSid: string): UserChannelContext;
  /**
   * Retrieve a single target page of UserChannelInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: UserChannelPage) => any): Promise<UserChannelPage>;
  /**
   * Lists UserChannelInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: UserChannelListInstanceOptions, callback?: (error: Error | null, items: UserChannelInstance[]) => any): Promise<UserChannelInstance[]>;
  /**
   * Retrieve a single page of UserChannelInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: UserChannelListInstancePageOptions, callback?: (error: Error | null, items: UserChannelPage) => any): Promise<UserChannelPage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
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
interface UserChannelListInstanceEachOptions {
  callback?: (item: UserChannelInstance, done: (err?: Error) => void) => void;
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
interface UserChannelListInstanceOptions {
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
interface UserChannelListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface UserChannelPayload extends UserChannelResource, Page.TwilioResponsePayload {
}

interface UserChannelResource {
  account_sid: string;
  channel_sid: string;
  last_consumed_message_index: number;
  links: string;
  member_sid: string;
  notification_level: UserChannelNotificationLevel;
  service_sid: string;
  status: UserChannelChannelStatus;
  unread_messages_count: number;
  url: string;
  user_sid: string;
}

interface UserChannelSolution {
  serviceSid?: string;
  userSid?: string;
}


declare class UserChannelContext {
  /**
   * Initialize the UserChannelContext
   *
   * @param version - Version of the resource
   * @param serviceSid - The SID of the Service to fetch the User Channel resource from
   * @param userSid - The SID of the User to fetch the User Channel resource from
   * @param channelSid - The SID of the Channel that has the User Channel to fetch
   */
  constructor(version: V2, serviceSid: string, userSid: string, channelSid: string);

  /**
   * fetch a UserChannelInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: UserChannelInstance) => any): Promise<UserChannelInstance>;
  /**
   * remove a UserChannelInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: UserChannelInstance) => any): Promise<boolean>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a UserChannelInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: UserChannelInstanceUpdateOptions, callback?: (error: Error | null, items: UserChannelInstance) => any): Promise<UserChannelInstance>;
}


declare class UserChannelInstance extends SerializableClass {
  /**
   * Initialize the UserChannelContext
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - The SID of the Service that the resource is associated with
   * @param userSid - The SID of the User the User Channel belongs to
   * @param channelSid - The SID of the Channel that has the User Channel to fetch
   */
  constructor(version: V2, payload: UserChannelPayload, serviceSid: string, userSid: string, channelSid: string);

  private _proxy: UserChannelContext;
  accountSid: string;
  channelSid: string;
  /**
   * fetch a UserChannelInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: UserChannelInstance) => any): Promise<UserChannelInstance>;
  lastConsumedMessageIndex: number;
  links: string;
  memberSid: string;
  notificationLevel: UserChannelNotificationLevel;
  /**
   * remove a UserChannelInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: UserChannelInstance) => any): Promise<boolean>;
  serviceSid: string;
  status: UserChannelChannelStatus;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  unreadMessagesCount: number;
  /**
   * update a UserChannelInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: UserChannelInstanceUpdateOptions, callback?: (error: Error | null, items: UserChannelInstance) => any): Promise<UserChannelInstance>;
  url: string;
  userSid: string;
}


declare class UserChannelPage extends Page<V2, UserChannelPayload, UserChannelResource, UserChannelInstance> {
  /**
   * Initialize the UserChannelPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2, response: Response<string>, solution: UserChannelSolution);

  /**
   * Build an instance of UserChannelInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: UserChannelPayload): UserChannelInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { UserChannelChannelStatus, UserChannelContext, UserChannelInstance, UserChannelInstanceUpdateOptions, UserChannelList, UserChannelListInstance, UserChannelListInstanceEachOptions, UserChannelListInstanceOptions, UserChannelListInstancePageOptions, UserChannelNotificationLevel, UserChannelPage, UserChannelPayload, UserChannelResource, UserChannelSolution }
