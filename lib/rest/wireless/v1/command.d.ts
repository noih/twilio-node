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

type CommandCommandMode = 'text'|'binary';

type CommandDirection = 'from_sim'|'to_sim';

type CommandStatus = 'queued'|'sent'|'delivered'|'received'|'failed';

type CommandTransport = 'sms'|'ip';

/**
 * Initialize the CommandList
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
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Function to process each record
   */
  each(opts?: CommandListInstanceEachOptions, callback?: (item: CommandInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a command
   *
   * @param sid - The SID that identifies the resource to fetch
   */
  get(sid: string): CommandContext;
  /**
   * Retrieve a single target page of CommandInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: CommandPage) => any): Promise<CommandPage>;
  /**
   * Lists CommandInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: CommandListInstanceOptions, callback?: (error: Error | null, items: CommandInstance[]) => any): Promise<CommandInstance[]>;
  /**
   * Retrieve a single page of CommandInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: CommandListInstancePageOptions, callback?: (error: Error | null, items: CommandPage) => any): Promise<CommandPage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to create
 *
 * @property callbackMethod - The HTTP method we use to call callback_url
 * @property callbackUrl - he URL we call when the Command has finished sending
 * @property command - The message body of the Command or a Base64 encoded byte string in binary mode
 * @property commandMode - The mode to use when sending the SMS message
 * @property deliveryReceiptRequested - Whether to request delivery receipt from the recipient
 * @property includeSid - Whether to include the SID of the command in the message body
 * @property sim - The sid or unique_name of the SIM to send the Command to
 */
interface CommandListInstanceCreateOptions {
  callbackMethod?: string;
  callbackUrl?: string;
  command: string;
  commandMode?: CommandCommandMode;
  deliveryReceiptRequested?: boolean;
  includeSid?: string;
  sim?: string;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property direction - Only return Commands with this direction value
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
 * @property sim - The sid or unique_name of the Sim resources to read
 * @property status - The status of the resources to read
 * @property transport - Only return Commands with this transport value
 */
interface CommandListInstanceEachOptions {
  callback?: (item: CommandInstance, done: (err?: Error) => void) => void;
  direction?: CommandDirection;
  done?: Function;
  limit?: number;
  pageSize?: number;
  sim?: string;
  status?: CommandStatus;
  transport?: CommandTransport;
}

/**
 * Options to pass to list
 *
 * @property direction - Only return Commands with this direction value
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
 * @property sim - The sid or unique_name of the Sim resources to read
 * @property status - The status of the resources to read
 * @property transport - Only return Commands with this transport value
 */
interface CommandListInstanceOptions {
  direction?: CommandDirection;
  limit?: number;
  pageSize?: number;
  sim?: string;
  status?: CommandStatus;
  transport?: CommandTransport;
}

/**
 * Options to pass to page
 *
 * @property direction - Only return Commands with this direction value
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 * @property sim - The sid or unique_name of the Sim resources to read
 * @property status - The status of the resources to read
 * @property transport - Only return Commands with this transport value
 */
interface CommandListInstancePageOptions {
  direction?: CommandDirection;
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
  sim?: string;
  status?: CommandStatus;
  transport?: CommandTransport;
}

interface CommandPayload extends CommandResource, Page.TwilioResponsePayload {
}

interface CommandResource {
  account_sid: string;
  command: string;
  command_mode: CommandCommandMode;
  date_created: Date;
  date_updated: Date;
  delivery_receipt_requested: boolean;
  direction: CommandDirection;
  sid: string;
  sim_sid: string;
  status: CommandStatus;
  transport: CommandTransport;
  url: string;
}

interface CommandSolution {
}


declare class CommandContext {
  /**
   * Initialize the CommandContext
   *
   * @param version - Version of the resource
   * @param sid - The SID that identifies the resource to fetch
   */
  constructor(version: V1, sid: string);

  /**
   * fetch a CommandInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: CommandInstance) => any): Promise<CommandInstance>;
  /**
   * remove a CommandInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: CommandInstance) => any): void;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}


declare class CommandInstance extends SerializableClass {
  /**
   * Initialize the CommandContext
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The SID that identifies the resource to fetch
   */
  constructor(version: V1, payload: CommandPayload, sid: string);

  private _proxy: CommandContext;
  accountSid: string;
  command: string;
  commandMode: CommandCommandMode;
  dateCreated: Date;
  dateUpdated: Date;
  deliveryReceiptRequested: boolean;
  direction: CommandDirection;
  /**
   * fetch a CommandInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: CommandInstance) => any): void;
  /**
   * remove a CommandInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: CommandInstance) => any): void;
  sid: string;
  simSid: string;
  status: CommandStatus;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  transport: CommandTransport;
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
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { CommandContext, CommandInstance, CommandList, CommandListInstance, CommandListInstanceCreateOptions, CommandListInstanceEachOptions, CommandListInstanceOptions, CommandListInstancePageOptions, CommandPage, CommandPayload, CommandResource, CommandSolution }
