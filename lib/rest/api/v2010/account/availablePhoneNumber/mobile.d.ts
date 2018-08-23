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
 * @description Initialize the MobileList
 *
 * @param version - Version of the resource
 * @param accountSid - The 34 character string that uniquely identifies your account.
 * @param countryCode - The ISO Country code to lookup phone numbers for.
 */
declare function MobileList(version: V2010, accountSid: string, countryCode: string): MobileListInstance;

interface MobileListInstance {
  /**
   * Streams MobileInstance records from the API.
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
  each(opts?: MobileListInstanceEachOptions, callback?: (item: MobileInstance, done: (err?: Error) => void) => void): void;
  /**
   * Retrieve a single target page of MobileInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: MobilePage) => any): Promise<MobilePage>;
  /**
   * Lists MobileInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: MobileListInstanceOptions, callback?: (error: Error | null, items: MobileInstance[]) => any): Promise<MobileInstance[]>;
  /**
   * Retrieve a single page of MobileInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: MobileListInstancePageOptions, callback?: (error: Error | null, items: MobilePage) => any): Promise<MobilePage>;
}

/**
 * Options to pass to each
 *
 * @property areaCode - Find phone numbers in the specified area code.
 * @property beta - Include phone numbers new to the Twilio platform.
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property contains - A pattern on which to match phone numbers.
 * @property distance - Specifies the search radius for a Near- query in miles. (US/Canada only)
 * @property done - Function to be called upon completion of streaming
 * @property excludeAllAddressRequired - Indicates whether the response includes phone numbers which require any Address.
 * @property excludeForeignAddressRequired - Indicates whether the response includes phone numbers which require a foreign Address.
 * @property excludeLocalAddressRequired - Indicates whether the response includes phone numbers which require a local Address.
 * @property faxEnabled - This indicates whether the phone numbers can receive faxes.
 * @property inLata - Limit results to a specific Local access and transport area. (US/Canada only)
 * @property inLocality - Limit results to a particular locality.
 * @property inPostalCode - Limit results to a particular postal code. (US/Canada only)
 * @property inRateCenter - Limit results to a specific rate center, or given a phone number search within the same rate center as that number. (US/Canada only)
 * @property inRegion - Limit results to a particular region. (US/Canada only)
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 * @property mmsEnabled - This indicates whether the phone numbers can receive MMS messages.
 * @property nearLatLong - Given a latitude/longitude pair lat,long find geographically close numbers within Distance miles. (US/Canada only)
 * @property nearNumber - Given a phone number, find a geographically close number within Distance miles. (US/Canada only)
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no pageSize is defined but a limit is defined,
 *                         each() will attempt to read the limit with the most efficient
 *                         page size, i.e. min(limit, 1000)
 * @property smsEnabled - This indicates whether the phone numbers can receive text messages.
 * @property voiceEnabled - This indicates whether the phone numbers can receive calls.
 */
interface MobileListInstanceEachOptions {
  areaCode?: number;
  beta?: boolean;
  callback?: (item: MobileInstance, done: (err?: Error) => void) => void;
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
 * @property areaCode - Find phone numbers in the specified area code.
 * @property beta - Include phone numbers new to the Twilio platform.
 * @property contains - A pattern on which to match phone numbers.
 * @property distance - Specifies the search radius for a Near- query in miles. (US/Canada only)
 * @property excludeAllAddressRequired - Indicates whether the response includes phone numbers which require any Address.
 * @property excludeForeignAddressRequired - Indicates whether the response includes phone numbers which require a foreign Address.
 * @property excludeLocalAddressRequired - Indicates whether the response includes phone numbers which require a local Address.
 * @property faxEnabled - This indicates whether the phone numbers can receive faxes.
 * @property inLata - Limit results to a specific Local access and transport area. (US/Canada only)
 * @property inLocality - Limit results to a particular locality.
 * @property inPostalCode - Limit results to a particular postal code. (US/Canada only)
 * @property inRateCenter - Limit results to a specific rate center, or given a phone number search within the same rate center as that number. (US/Canada only)
 * @property inRegion - Limit results to a particular region. (US/Canada only)
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 * @property mmsEnabled - This indicates whether the phone numbers can receive MMS messages.
 * @property nearLatLong - Given a latitude/longitude pair lat,long find geographically close numbers within Distance miles. (US/Canada only)
 * @property nearNumber - Given a phone number, find a geographically close number within Distance miles. (US/Canada only)
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no page_size is defined but a limit is defined,
 *                         list() will attempt to read the limit with the most
 *                         efficient page size, i.e. min(limit, 1000)
 * @property smsEnabled - This indicates whether the phone numbers can receive text messages.
 * @property voiceEnabled - This indicates whether the phone numbers can receive calls.
 */
interface MobileListInstanceOptions {
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
 * @property areaCode - Find phone numbers in the specified area code.
 * @property beta - Include phone numbers new to the Twilio platform.
 * @property contains - A pattern on which to match phone numbers.
 * @property distance - Specifies the search radius for a Near- query in miles. (US/Canada only)
 * @property excludeAllAddressRequired - Indicates whether the response includes phone numbers which require any Address.
 * @property excludeForeignAddressRequired - Indicates whether the response includes phone numbers which require a foreign Address.
 * @property excludeLocalAddressRequired - Indicates whether the response includes phone numbers which require a local Address.
 * @property faxEnabled - This indicates whether the phone numbers can receive faxes.
 * @property inLata - Limit results to a specific Local access and transport area. (US/Canada only)
 * @property inLocality - Limit results to a particular locality.
 * @property inPostalCode - Limit results to a particular postal code. (US/Canada only)
 * @property inRateCenter - Limit results to a specific rate center, or given a phone number search within the same rate center as that number. (US/Canada only)
 * @property inRegion - Limit results to a particular region. (US/Canada only)
 * @property mmsEnabled - This indicates whether the phone numbers can receive MMS messages.
 * @property nearLatLong - Given a latitude/longitude pair lat,long find geographically close numbers within Distance miles. (US/Canada only)
 * @property nearNumber - Given a phone number, find a geographically close number within Distance miles. (US/Canada only)
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 * @property smsEnabled - This indicates whether the phone numbers can receive text messages.
 * @property voiceEnabled - This indicates whether the phone numbers can receive calls.
 */
interface MobileListInstancePageOptions {
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

interface MobilePayload extends MobileResource, Page.TwilioResponsePayload {
}

interface MobileResource {
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

interface MobileSolution {
  accountSid?: string;
  countryCode?: string;
}


declare class MobileInstance extends SerializableClass {
  /**
   * Initialize the MobileContext
   *
   * @property friendlyName - A nicely-formatted version of the phone number.
   * @property phoneNumber - The phone number, in E.164 format.
   * @property lata - The LATA of this phone number.
   * @property locality - The locality/city of this phone number.
   * @property rateCenter - The rate center of this phone number.
   * @property latitude - The latitude coordinate of this phone number.
   * @property longitude - The longitude coordinate of this phone number.
   * @property region - The two-letter state or province abbreviation of this phone number.
   * @property postalCode - The postal code of this phone number.
   * @property isoCountry - The ISO country code of this phone number.
   * @property addressRequirements - This indicates whether the phone number requires you or your customer to have an Address registered with Twilio.
   * @property beta - Phone numbers new to the Twilio platform are marked as beta.
   * @property capabilities - This is a set of boolean properties that indicate whether a phone number can receive calls or messages.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The 34 character string that uniquely identifies your account.
   * @param countryCode - The ISO Country code to lookup phone numbers for.
   */
  constructor(version: V2010, payload: MobilePayload, accountSid: string, countryCode: string);

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
   * Produce a plain JSON object version of the MobileInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
}


declare class MobilePage extends Page<V2010, MobilePayload, MobileResource, MobileInstance> {
  /**
   * Initialize the MobilePage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2010, response: Response<string>, solution: MobileSolution);

  /**
   * Build an instance of MobileInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: MobilePayload): MobileInstance;
}

export { MobileInstance, MobileList, MobileListInstance, MobileListInstanceEachOptions, MobileListInstanceOptions, MobileListInstancePageOptions, MobilePage, MobilePayload, MobileResource, MobileSolution }
