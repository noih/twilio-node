'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Holodeck = require('../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../lib');  /* jshint ignore:line */


var client;
var holodeck;

describe('Cps', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid fetch request',
    function(done) {
      holodeck.mock(new Response(500, '{}'));

      var opts = {
        twilioSandboxMode: 'twilio_sandbox_mode',
        xXcnamSensitivePhoneNumber: 'x_xcnam_sensitive_phone_number'
      };
      var promise = client.preview.trusted_comms.cps().fetch(opts);
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var url = 'https://preview.twilio.com/TrustedComms/CPS';

      var headers = {
        'Twilio-Sandbox-Mode': 'twilio_sandbox_mode',
        'X-Xcnam-Sensitive-Phone-Number': 'x_xcnam_sensitive_phone_number'
      };
      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url,
        headers: headers
      }));
    }
  );
  it('should generate valid fetch response',
    function(done) {
      var body = JSON.stringify({
          'cps_url': 'https://preview.twilio.com/TrustedComms/CurrentCall',
          'phone_number': '+1500123',
          'url': 'https://preview.twilio.com/TrustedComms/CPS'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.preview.trusted_comms.cps().fetch();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});