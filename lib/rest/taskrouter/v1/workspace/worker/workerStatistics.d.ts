/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V1 = require('../../../V1');
import serialize = require('../../../../../base/serialize');
import { SerializableClass } from '../../../../../interfaces';

/**
 * Initialize the WorkerStatisticsList
 *
 * @param version - Version of the resource
 * @param workspaceSid - The workspace_sid
 * @param workerSid - The worker_sid
 */
declare function WorkerStatisticsList(version: V1, workspaceSid: string, workerSid: string): WorkerStatisticsListInstance;

/**
 * Options to pass to fetch
 *
 * @property endDate - Filter cumulative statistics by a end date.
 * @property minutes - Filter cumulative statistics by up to 'x' minutes in the past.
 * @property startDate - Filter cumulative statistics by a start date.
 * @property taskChannel - Filter cumulative statistics by TaskChannel.
 */
interface WorkerStatisticsInstanceFetchOptions {
  endDate?: Date;
  minutes?: number;
  startDate?: Date;
  taskChannel?: string;
}

interface WorkerStatisticsListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): WorkerStatisticsContext;
  /**
   * Constructs a worker_statistics
   */
  get(): WorkerStatisticsContext;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

interface WorkerStatisticsPayload extends WorkerStatisticsResource, Page.TwilioResponsePayload {
}

interface WorkerStatisticsResource {
  account_sid: string;
  cumulative: object;
  url: string;
  worker_sid: string;
  workspace_sid: string;
}

interface WorkerStatisticsSolution {
  workerSid?: string;
  workspaceSid?: string;
}


declare class WorkerStatisticsContext {
  /**
   * Initialize the WorkerStatisticsContext
   *
   * @param version - Version of the resource
   * @param workspaceSid - The workspace_sid
   * @param workerSid - The worker_sid
   */
  constructor(version: V1, workspaceSid: string, workerSid: string);

  /**
   * fetch a WorkerStatisticsInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  fetch(opts?: WorkerStatisticsInstanceFetchOptions, callback?: (error: Error | null, items: WorkerStatisticsInstance) => any): Promise<WorkerStatisticsInstance>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}


declare class WorkerStatisticsInstance extends SerializableClass {
  /**
   * Initialize the WorkerStatisticsContext
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param workspaceSid - The workspace_sid
   * @param workerSid - The worker_sid
   */
  constructor(version: V1, payload: WorkerStatisticsPayload, workspaceSid: string, workerSid: string);

  private _proxy: WorkerStatisticsContext;
  accountSid: string;
  cumulative: object;
  /**
   * fetch a WorkerStatisticsInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  fetch(opts?: WorkerStatisticsInstanceFetchOptions, callback?: (error: Error | null, items: WorkerStatisticsInstance) => any): void;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  url: string;
  workerSid: string;
  workspaceSid: string;
}


declare class WorkerStatisticsPage extends Page<V1, WorkerStatisticsPayload, WorkerStatisticsResource, WorkerStatisticsInstance> {
  /**
   * Initialize the WorkerStatisticsPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: WorkerStatisticsSolution);

  /**
   * Build an instance of WorkerStatisticsInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: WorkerStatisticsPayload): WorkerStatisticsInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { WorkerStatisticsContext, WorkerStatisticsInstance, WorkerStatisticsList, WorkerStatisticsListInstance, WorkerStatisticsPage, WorkerStatisticsPayload, WorkerStatisticsResource, WorkerStatisticsSolution }
