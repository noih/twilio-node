/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V1 = require('../../../V1');
import { SerializableClass } from '../../../../../interfaces';

/**
 * @description Initialize the ExecutionContextList
 * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
 *
 * @param version - Version of the resource
 * @param flowSid - Flow Sid.
 * @param executionSid - Execution Sid.
 */
declare function ExecutionContextList(version: V1, flowSid: string, executionSid: string): ExecutionContextListInstance;

interface ExecutionContextListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): ExecutionContextContext;
  /**
   * Constructs a execution_context
   */
  get(): ExecutionContextContext;
}

interface ExecutionContextPayload extends ExecutionContextResource, Page.TwilioResponsePayload {
}

interface ExecutionContextResource {
  account_sid: string;
  context: string;
  execution_sid: string;
  flow_sid: string;
  url: string;
}

interface ExecutionContextSolution {
  executionSid?: string;
  flowSid?: string;
}


declare class ExecutionContextContext {
  /**
   * Initialize the ExecutionContextContextPLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @param version - Version of the resource
   * @param flowSid - Flow Sid.
   * @param executionSid - Execution Sid.
   */
  constructor(version: V1, flowSid: string, executionSid: string);

  /**
   * fetch a ExecutionContextInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: ExecutionContextInstance) => any): Promise<ExecutionContextInstance>;
}


declare class ExecutionContextInstance extends SerializableClass {
  /**
   * Initialize the ExecutionContextContextPLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @property accountSid - Account Sid.
   * @property context - Flow state.
   * @property flowSid - Flow Sid.
   * @property executionSid - Execution Sid.
   * @property url - The URL of this resource.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param flowSid - Flow Sid.
   * @param executionSid - Execution Sid.
   */
  constructor(version: V1, payload: ExecutionContextPayload, flowSid: string, executionSid: string);

  private _proxy: ExecutionContextContext;
  accountSid: string;
  context: string;
  executionSid: string;
  /**
   * fetch a ExecutionContextInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: ExecutionContextInstance) => any): void;
  flowSid: string;
  /**
   * Produce a plain JSON object version of the ExecutionContextInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
  url: string;
}


declare class ExecutionContextPage extends Page<V1, ExecutionContextPayload, ExecutionContextResource, ExecutionContextInstance> {
  /**
   * Initialize the ExecutionContextPagePLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: ExecutionContextSolution);

  /**
   * Build an instance of ExecutionContextInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: ExecutionContextPayload): ExecutionContextInstance;
}

export { ExecutionContextContext, ExecutionContextInstance, ExecutionContextList, ExecutionContextListInstance, ExecutionContextPage, ExecutionContextPayload, ExecutionContextResource, ExecutionContextSolution }
