/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Domain = require('../base/Domain');
import Twilio = require('./Twilio');
import V1 = require('./video/V1');
import { CompositionListInstance } from './video/v1/composition';
import { CompositionSettingsListInstance } from './video/v1/compositionSettings';
import { RecordingListInstance } from './video/v1/recording';
import { RecordingSettingsListInstance } from './video/v1/recordingSettings';
import { RoomListInstance } from './video/v1/room';


declare class Video extends Domain {
  /**
   * Initialize video domain
   *
   * @param twilio - The twilio client
   */
  constructor(twilio: Twilio);

  readonly compositionSettings: CompositionSettingsListInstance;
  readonly compositions: CompositionListInstance;
  readonly recordingSettings: RecordingSettingsListInstance;
  readonly recordings: RecordingListInstance;
  readonly rooms: RoomListInstance;
  readonly v1: V1;
}

export = Video;
