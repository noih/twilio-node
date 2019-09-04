/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import Response = require('../../../http/response');
import V1 = require('../V1');
import serialize = require('../../../base/serialize');
import { SerializableClass } from '../../../interfaces';

type CompositionFormat = 'mp4'|'webm';

type CompositionStatus = 'enqueued'|'processing'|'completed'|'deleted'|'failed';

/**
 * Initialize the CompositionList
 *
 * PLEASE NOTE that this class contains preview products that are subject to
 * change. Use them with caution. If you currently do not have developer preview
 * access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 */
declare function CompositionList(version: V1): CompositionListInstance;

interface CompositionListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): CompositionContext;
  /**
   * create a CompositionInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: CompositionListInstanceCreateOptions, callback?: (error: Error | null, item: CompositionInstance) => any): Promise<CompositionInstance>;
  /**
   * Streams CompositionInstance records from the API.
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
  each(opts?: CompositionListInstanceEachOptions, callback?: (item: CompositionInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a composition
   *
   * @param sid - The Composition Sid that uniquely identifies the Composition to fetch.
   */
  get(sid: string): CompositionContext;
  /**
   * Retrieve a single target page of CompositionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: CompositionPage) => any): Promise<CompositionPage>;
  /**
   * Lists CompositionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: CompositionListInstanceOptions, callback?: (error: Error | null, items: CompositionInstance[]) => any): Promise<CompositionInstance[]>;
  /**
   * Retrieve a single page of CompositionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: CompositionListInstancePageOptions, callback?: (error: Error | null, items: CompositionPage) => any): Promise<CompositionPage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to create
 *
 * @property audioSources - A list of audio sources related to this Composition.
 * @property audioSourcesExcluded - A list of audio sources excluded related to this Composition.
 * @property format - Container format of the Composition media file. Any of the following: `mp4`, `webm`.
 * @property resolution - Pixel resolution of the composed video.
 * @property roomSid - Twilio Room SID.
 * @property statusCallback - A URL that Twilio sends asynchronous webhook requests to on every composition event.
 * @property statusCallbackMethod - HTTP method Twilio should use when requesting the above URL.
 * @property trim - Boolean flag for clipping intervals that have no media.
 * @property videoLayout - The JSON video layout description.
 */
interface CompositionListInstanceCreateOptions {
  audioSources?: string[];
  audioSourcesExcluded?: string[];
  format?: CompositionFormat;
  resolution?: string;
  roomSid: string;
  statusCallback?: string;
  statusCallbackMethod?: string;
  trim?: boolean;
  videoLayout?: object;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property dateCreatedAfter - Only show Compositions created on or after this ISO8601 date-time with timezone.
 * @property dateCreatedBefore - Only show Compositions created before this ISO8601 date-time with timezone.
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
 * @property roomSid - Only show Compositions with the given Room SID.
 * @property status - Only show Compositions with the given status.
 */
interface CompositionListInstanceEachOptions {
  callback?: (item: CompositionInstance, done: (err?: Error) => void) => void;
  dateCreatedAfter?: Date;
  dateCreatedBefore?: Date;
  done?: Function;
  limit?: number;
  pageSize?: number;
  roomSid?: string;
  status?: CompositionStatus;
}

/**
 * Options to pass to list
 *
 * @property dateCreatedAfter - Only show Compositions created on or after this ISO8601 date-time with timezone.
 * @property dateCreatedBefore - Only show Compositions created before this ISO8601 date-time with timezone.
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
 * @property roomSid - Only show Compositions with the given Room SID.
 * @property status - Only show Compositions with the given status.
 */
interface CompositionListInstanceOptions {
  dateCreatedAfter?: Date;
  dateCreatedBefore?: Date;
  limit?: number;
  pageSize?: number;
  roomSid?: string;
  status?: CompositionStatus;
}

/**
 * Options to pass to page
 *
 * @property dateCreatedAfter - Only show Compositions created on or after this ISO8601 date-time with timezone.
 * @property dateCreatedBefore - Only show Compositions created before this ISO8601 date-time with timezone.
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 * @property roomSid - Only show Compositions with the given Room SID.
 * @property status - Only show Compositions with the given status.
 */
interface CompositionListInstancePageOptions {
  dateCreatedAfter?: Date;
  dateCreatedBefore?: Date;
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
  roomSid?: string;
  status?: CompositionStatus;
}

interface CompositionPayload extends CompositionResource, Page.TwilioResponsePayload {
}

interface CompositionResource {
  account_sid: string;
  audio_sources: string;
  audio_sources_excluded: string;
  bitrate: number;
  date_completed: string;
  date_created: Date;
  date_deleted: string;
  duration: number;
  format: CompositionFormat;
  links: string;
  resolution: string;
  room_sid: string;
  sid: string;
  size: number;
  status: CompositionStatus;
  trim: boolean;
  url: string;
  video_layout: object;
}

interface CompositionSolution {
}


declare class CompositionContext {
  /**
   * Initialize the CompositionContext
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param sid - The Composition Sid that uniquely identifies the Composition to fetch.
   */
  constructor(version: V1, sid: string);

  /**
   * fetch a CompositionInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: CompositionInstance) => any): Promise<CompositionInstance>;
  /**
   * remove a CompositionInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: CompositionInstance) => any): void;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}


declare class CompositionInstance extends SerializableClass {
  /**
   * Initialize the CompositionContext
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The Composition Sid that uniquely identifies the Composition to fetch.
   */
  constructor(version: V1, payload: CompositionPayload, sid: string);

  private _proxy: CompositionContext;
  accountSid: string;
  audioSources: string;
  audioSourcesExcluded: string;
  bitrate: number;
  dateCompleted: string;
  dateCreated: Date;
  dateDeleted: string;
  duration: number;
  /**
   * fetch a CompositionInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: CompositionInstance) => any): void;
  format: CompositionFormat;
  links: string;
  /**
   * remove a CompositionInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: CompositionInstance) => any): void;
  resolution: string;
  roomSid: string;
  sid: string;
  size: number;
  status: CompositionStatus;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  trim: boolean;
  url: string;
  videoLayout: object;
}


declare class CompositionPage extends Page<V1, CompositionPayload, CompositionResource, CompositionInstance> {
  /**
   * Initialize the CompositionPage
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: CompositionSolution);

  /**
   * Build an instance of CompositionInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: CompositionPayload): CompositionInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { CompositionContext, CompositionInstance, CompositionList, CompositionListInstance, CompositionListInstanceCreateOptions, CompositionListInstanceEachOptions, CompositionListInstanceOptions, CompositionListInstancePageOptions, CompositionPage, CompositionPayload, CompositionResource, CompositionSolution }
