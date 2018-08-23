/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import Response = require('../../../http/response');
import V1 = require('../V1');
import { SerializableClass } from '../../../interfaces';

type CommandCommandMode = 'text'|'binary';

type CommandDirection = 'from_sim'|'to_sim';

type CommandStatus = 'queued'|'sent'|'delivered'|'received'|'failed';

/**
 * @description Initialize the CommandList
 *
 * @param version - Version of the resource
 */
declare function CommandList(version: V1): CommandListInstance;

interface CommandListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): CommandContext;
  /**
   * create a CommandInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: CommandListInstanceCreateOptions, callback?: (error: Error | null, item: CommandInstance) => any): Promise<CommandInstance>;
  /**
   * Streams CommandInstance records from the API.
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
  each(opts?: CommandListInstanceEachOptions, callback?: (item: CommandInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a command
   *
   * @param sid - The sid
   */
  get(sid: string): CommandContext;
  /**
   * Retrieve a single target page of CommandInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: CommandPage) => any): Promise<CommandPage>;
  /**
   * Lists CommandInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: CommandListInstanceOptions, callback?: (error: Error | null, items: CommandInstance[]) => any): Promise<CommandInstance[]>;
  /**
   * Retrieve a single page of CommandInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: CommandListInstancePageOptions, callback?: (error: Error | null, items: CommandPage) => any): Promise<CommandPage>;
}

/**
 * Options to pass to create
 *
 * @property callbackMethod - The HTTP method Twilio will use when making a request to the callback URL.
 * @property callbackUrl - Twilio will make a request to this URL when the Command has finished sending.
 * @property command - The message body of the Command or a Base64 encoded byte string in binary mode.
 * @property commandMode - A string representing which mode to send the SMS message using.
 * @property includeSid - When sending a Command to a SIM in text mode, Twilio can automatically include the Sid of the Command in the message body, which could be used to ensure that the device does not process the same Command more than once.
 * @property sim - The Sid or UniqueName of the SIM to send the Command to.
 */
interface CommandListInstanceCreateOptions {
  callbackMethod?: string;
  callbackUrl?: string;
  command: string;
  commandMode?: CommandCommandMode;
  includeSid?: string;
  sim?: string;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property direction - Only return Commands with this direction value.
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
 * @property sim - Only return Commands to or from this SIM.
 * @property status - Only return Commands with this status value.
 */
interface CommandListInstanceEachOptions {
  callback?: (item: CommandInstance, done: (err?: Error) => void) => void;
  direction?: CommandDirection;
  done?: Function;
  limit?: number;
  pageSize?: number;
  sim?: string;
  status?: CommandStatus;
}

/**
 * Options to pass to list
 *
 * @property direction - Only return Commands with this direction value.
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
 * @property sim - Only return Commands to or from this SIM.
 * @property status - Only return Commands with this status value.
 */
interface CommandListInstanceOptions {
  direction?: CommandDirection;
  limit?: number;
  pageSize?: number;
  sim?: string;
  status?: CommandStatus;
}

/**
 * Options to pass to page
 *
 * @property direction - Only return Commands with this direction value.
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 * @property sim - Only return Commands to or from this SIM.
 * @property status - Only return Commands with this status value.
 */
interface CommandListInstancePageOptions {
  direction?: CommandDirection;
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
  sim?: string;
  status?: CommandStatus;
}

interface CommandPayload extends CommandResource, Page.TwilioResponsePayload {
}

interface CommandResource {
  account_sid: string;
  command: string;
  command_mode: CommandCommandMode;
  date_created: Date;
  date_updated: Date;
  direction: CommandDirection;
  sid: string;
  sim_sid: string;
  status: CommandStatus;
  url: string;
}

interface CommandSolution {
}


declare class CommandContext {
  /**
   * Initialize the CommandContext
   *
   * @param version - Version of the resource
   * @param sid - The sid
   */
  constructor(version: V1, sid: string);

  /**
   * fetch a CommandInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: CommandInstance) => any): Promise<CommandInstance>;
}


declare class CommandInstance extends SerializableClass {
  /**
   * Initialize the CommandContext
   *
   * @property sid - A 34 character string that uniquely identifies this resource.
   * @property accountSid - The unique id of the Account that this Command belongs to.
   * @property simSid - The unique ID of the SIM that this Command was sent to or from.
   * @property command - The message being sent to or from the SIM.
   * @property commandMode - A string representing which mode the SMS was sent or received using.
   * @property status - A string representing the status of the Command.
   * @property direction - The direction of the Command.
   * @property dateCreated - The date that this resource was created, given as GMT in ISO 8601 format.
   * @property dateUpdated - The date that this resource was last updated, given as GMT in ISO 8601 format.
   * @property url - The URL for this resource.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The sid
   */
  constructor(version: V1, payload: CommandPayload, sid: string);

  private _proxy: CommandContext;
  accountSid: string;
  command: string;
  commandMode: CommandCommandMode;
  dateCreated: Date;
  dateUpdated: Date;
  direction: CommandDirection;
  /**
   * fetch a CommandInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: CommandInstance) => any): void;
  sid: string;
  simSid: string;
  status: CommandStatus;
  /**
   * Produce a plain JSON object version of the CommandInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
  url: string;
}


declare class CommandPage extends Page<V1, CommandPayload, CommandResource, CommandInstance> {
  /**
   * Initialize the CommandPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: CommandSolution);

  /**
   * Build an instance of CommandInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: CommandPayload): CommandInstance;
}

export { CommandContext, CommandInstance, CommandList, CommandListInstance, CommandListInstanceCreateOptions, CommandListInstanceEachOptions, CommandListInstanceOptions, CommandListInstancePageOptions, CommandPage, CommandPayload, CommandResource, CommandSolution }
