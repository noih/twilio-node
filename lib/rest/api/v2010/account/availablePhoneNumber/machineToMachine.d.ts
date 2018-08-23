/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V2010 = require('../../../V2010');
import serialize = require('../../../../../base/serialize');
import { SerializableClass } from '../../../../../interfaces';

/**
 * @description Initialize the MachineToMachineList
 *
 * @param version - Version of the resource
 * @param accountSid - The 34 character string that uniquely identifies your account.
 * @param countryCode - The ISO Country code to lookup phone numbers for.
 */
declare function MachineToMachineList(version: V2010, accountSid: string, countryCode: string): MachineToMachineListInstance;

interface MachineToMachineListInstance {
  /**
   * Streams MachineToMachineInstance records from the API.
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
  each(opts?: MachineToMachineListInstanceEachOptions, callback?: (item: MachineToMachineInstance, done: (err?: Error) => void) => void): void;
  /**
   * Retrieve a single target page of MachineToMachineInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: MachineToMachinePage) => any): Promise<MachineToMachinePage>;
  /**
   * Lists MachineToMachineInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: MachineToMachineListInstanceOptions, callback?: (error: Error | null, items: MachineToMachineInstance[]) => any): Promise<MachineToMachineInstance[]>;
  /**
   * Retrieve a single page of MachineToMachineInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: MachineToMachineListInstancePageOptions, callback?: (error: Error | null, items: MachineToMachinePage) => any): Promise<MachineToMachinePage>;
}

/**
 * Options to pass to each
 *
 * @property areaCode - The area_code
 * @property beta - The beta
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property contains - The contains
 * @property distance - The distance
 * @property done - Function to be called upon completion of streaming
 * @property excludeAllAddressRequired - The exclude_all_address_required
 * @property excludeForeignAddressRequired - The exclude_foreign_address_required
 * @property excludeLocalAddressRequired - The exclude_local_address_required
 * @property faxEnabled - The fax_enabled
 * @property inLata - The in_lata
 * @property inLocality - The in_locality
 * @property inPostalCode - The in_postal_code
 * @property inRateCenter - The in_rate_center
 * @property inRegion - The in_region
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 * @property mmsEnabled - The mms_enabled
 * @property nearLatLong - The near_lat_long
 * @property nearNumber - The near_number
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no pageSize is defined but a limit is defined,
 *                         each() will attempt to read the limit with the most efficient
 *                         page size, i.e. min(limit, 1000)
 * @property smsEnabled - The sms_enabled
 * @property voiceEnabled - The voice_enabled
 */
interface MachineToMachineListInstanceEachOptions {
  areaCode?: number;
  beta?: boolean;
  callback?: (item: MachineToMachineInstance, done: (err?: Error) => void) => void;
  contains?: string;
  distance?: number;
  done?: Function;
  excludeAllAddressRequired?: boolean;
  excludeForeignAddressRequired?: boolean;
  excludeLocalAddressRequired?: boolean;
  faxEnabled?: boolean;
  inLata?: string;
  inLocality?: string;
  inPostalCode?: string;
  inRateCenter?: string;
  inRegion?: string;
  limit?: number;
  mmsEnabled?: boolean;
  nearLatLong?: string;
  nearNumber?: string;
  pageSize?: number;
  smsEnabled?: boolean;
  voiceEnabled?: boolean;
}

/**
 * Options to pass to list
 *
 * @property areaCode - The area_code
 * @property beta - The beta
 * @property contains - The contains
 * @property distance - The distance
 * @property excludeAllAddressRequired - The exclude_all_address_required
 * @property excludeForeignAddressRequired - The exclude_foreign_address_required
 * @property excludeLocalAddressRequired - The exclude_local_address_required
 * @property faxEnabled - The fax_enabled
 * @property inLata - The in_lata
 * @property inLocality - The in_locality
 * @property inPostalCode - The in_postal_code
 * @property inRateCenter - The in_rate_center
 * @property inRegion - The in_region
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 * @property mmsEnabled - The mms_enabled
 * @property nearLatLong - The near_lat_long
 * @property nearNumber - The near_number
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no page_size is defined but a limit is defined,
 *                         list() will attempt to read the limit with the most
 *                         efficient page size, i.e. min(limit, 1000)
 * @property smsEnabled - The sms_enabled
 * @property voiceEnabled - The voice_enabled
 */
interface MachineToMachineListInstanceOptions {
  areaCode?: number;
  beta?: boolean;
  contains?: string;
  distance?: number;
  excludeAllAddressRequired?: boolean;
  excludeForeignAddressRequired?: boolean;
  excludeLocalAddressRequired?: boolean;
  faxEnabled?: boolean;
  inLata?: string;
  inLocality?: string;
  inPostalCode?: string;
  inRateCenter?: string;
  inRegion?: string;
  limit?: number;
  mmsEnabled?: boolean;
  nearLatLong?: string;
  nearNumber?: string;
  pageSize?: number;
  smsEnabled?: boolean;
  voiceEnabled?: boolean;
}

/**
 * Options to pass to page
 *
 * @property areaCode - The area_code
 * @property beta - The beta
 * @property contains - The contains
 * @property distance - The distance
 * @property excludeAllAddressRequired - The exclude_all_address_required
 * @property excludeForeignAddressRequired - The exclude_foreign_address_required
 * @property excludeLocalAddressRequired - The exclude_local_address_required
 * @property faxEnabled - The fax_enabled
 * @property inLata - The in_lata
 * @property inLocality - The in_locality
 * @property inPostalCode - The in_postal_code
 * @property inRateCenter - The in_rate_center
 * @property inRegion - The in_region
 * @property mmsEnabled - The mms_enabled
 * @property nearLatLong - The near_lat_long
 * @property nearNumber - The near_number
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 * @property smsEnabled - The sms_enabled
 * @property voiceEnabled - The voice_enabled
 */
interface MachineToMachineListInstancePageOptions {
  areaCode?: number;
  beta?: boolean;
  contains?: string;
  distance?: number;
  excludeAllAddressRequired?: boolean;
  excludeForeignAddressRequired?: boolean;
  excludeLocalAddressRequired?: boolean;
  faxEnabled?: boolean;
  inLata?: string;
  inLocality?: string;
  inPostalCode?: string;
  inRateCenter?: string;
  inRegion?: string;
  mmsEnabled?: boolean;
  nearLatLong?: string;
  nearNumber?: string;
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
  smsEnabled?: boolean;
  voiceEnabled?: boolean;
}

interface MachineToMachinePayload extends MachineToMachineResource, Page.TwilioResponsePayload {
}

interface MachineToMachineResource {
  address_requirements: string;
  beta: boolean;
  capabilities: string;
  friendly_name: string;
  iso_country: string;
  lata: string;
  latitude: number;
  locality: string;
  longitude: number;
  phone_number: string;
  postal_code: string;
  rate_center: string;
  region: string;
}

interface MachineToMachineSolution {
  accountSid?: string;
  countryCode?: string;
}


declare class MachineToMachineInstance extends SerializableClass {
  /**
   * Initialize the MachineToMachineContext
   *
   * @property friendlyName - The friendly_name
   * @property phoneNumber - The phone_number
   * @property lata - The lata
   * @property locality - The locality
   * @property rateCenter - The rate_center
   * @property latitude - The latitude
   * @property longitude - The longitude
   * @property region - The region
   * @property postalCode - The postal_code
   * @property isoCountry - The iso_country
   * @property addressRequirements - The address_requirements
   * @property beta - The beta
   * @property capabilities - The capabilities
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The 34 character string that uniquely identifies your account.
   * @param countryCode - The ISO Country code to lookup phone numbers for.
   */
  constructor(version: V2010, payload: MachineToMachinePayload, accountSid: string, countryCode: string);

  addressRequirements: string;
  beta: boolean;
  capabilities: string;
  friendlyName: string;
  isoCountry: string;
  lata: string;
  latitude: number;
  locality: string;
  longitude: number;
  phoneNumber: string;
  postalCode: string;
  rateCenter: string;
  region: string;
  /**
   * Produce a plain JSON object version of the MachineToMachineInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
}


declare class MachineToMachinePage extends Page<V2010, MachineToMachinePayload, MachineToMachineResource, MachineToMachineInstance> {
  /**
   * Initialize the MachineToMachinePage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2010, response: Response<string>, solution: MachineToMachineSolution);

  /**
   * Build an instance of MachineToMachineInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: MachineToMachinePayload): MachineToMachineInstance;
}

export { MachineToMachineInstance, MachineToMachineList, MachineToMachineListInstance, MachineToMachineListInstanceEachOptions, MachineToMachineListInstanceOptions, MachineToMachineListInstancePageOptions, MachineToMachinePage, MachineToMachinePayload, MachineToMachineResource, MachineToMachineSolution }
