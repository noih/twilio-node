'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Holodeck = require('../../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../../lib');  /* jshint ignore:line */


var client;
var holodeck;

describe('Verification', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid create request',
    function(done) {
      holodeck.mock(new Response(500, '{}'));

      var opts = {to: 'to', channel: 'channel'};
      var promise = client.verify.v2.services('VAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .verifications.create(opts);
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var serviceSid = 'VAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://verify.twilio.com/v2/Services/${serviceSid}/Verifications`;

      var values = {To: 'to', Channel: 'channel', };
      holodeck.assertHasRequest(new Request({
          method: 'POST',
          url: url,
          data: values
      }));
    }
  );
  it('should generate valid create_verification response',
    function(done) {
      var body = JSON.stringify({
          'sid': 'VEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'service_sid': 'VAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'to': '+15017122661',
          'channel': 'sms',
          'status': 'pending',
          'valid': false,
          'date_created': '2015-07-30T20:00:00Z',
          'date_updated': '2015-07-30T20:00:00Z',
          'lookup': {
              'carrier': {
                  'error_code': null,
                  'name': 'Carrier Name',
                  'mobile_country_code': '310',
                  'mobile_network_code': '150',
                  'type': 'mobile'
              }
          },
          'amount': null,
          'payee': null,
          'url': 'https://verify.twilio.com/v2/Services/VAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Verifications/VEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      });

      holodeck.mock(new Response(201, body));

      var opts = {to: 'to', channel: 'channel'};
      var promise = client.verify.v2.services('VAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .verifications.create(opts);
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid create_verification_with_rate_limits response',
    function(done) {
      var body = JSON.stringify({
          'sid': 'VEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'service_sid': 'VAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'to': '+15017122661',
          'channel': 'sms',
          'status': 'pending',
          'valid': false,
          'date_created': '2015-07-30T20:00:00Z',
          'date_updated': '2015-07-30T20:00:00Z',
          'lookup': {
              'carrier': {
                  'error_code': null,
                  'name': 'Carrier Name',
                  'mobile_country_code': '310',
                  'mobile_network_code': '150',
                  'type': 'mobile'
              }
          },
          'amount': null,
          'payee': null,
          'url': 'https://verify.twilio.com/v2/Services/VAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Verifications/VEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      });

      holodeck.mock(new Response(201, body));

      var opts = {to: 'to', channel: 'channel'};
      var promise = client.verify.v2.services('VAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .verifications.create(opts);
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid update request',
    function(done) {
      holodeck.mock(new Response(500, '{}'));

      var opts = {status: 'canceled'};
      var promise = client.verify.v2.services('VAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .verifications('sid').update(opts);
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var serviceSid = 'VAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sid = 'sid';
      var url = `https://verify.twilio.com/v2/Services/${serviceSid}/Verifications/${sid}`;

      var values = {Status: 'canceled', };
      holodeck.assertHasRequest(new Request({
          method: 'POST',
          url: url,
          data: values
      }));
    }
  );
  it('should generate valid update_verification response',
    function(done) {
      var body = JSON.stringify({
          'sid': 'VEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'service_sid': 'VAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'to': '+15017122661',
          'channel': 'sms',
          'status': 'canceled',
          'valid': false,
          'date_created': '2015-07-30T20:00:00Z',
          'date_updated': '2015-07-30T20:00:00Z',
          'lookup': {
              'carrier': {
                  'error_code': null,
                  'name': 'Carrier Name',
                  'mobile_country_code': '310',
                  'mobile_network_code': '150',
                  'type': 'mobile'
              }
          },
          'amount': null,
          'payee': null,
          'url': 'https://verify.twilio.com/v2/Services/VAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Verifications/VEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      });

      holodeck.mock(new Response(200, body));

      var opts = {status: 'canceled'};
      var promise = client.verify.v2.services('VAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .verifications('sid').update(opts);
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid approve_verification_with_pn response',
    function(done) {
      var body = JSON.stringify({
          'sid': 'VEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'service_sid': 'VAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'to': '+15017122661',
          'channel': 'sms',
          'status': 'approved',
          'valid': true,
          'date_created': '2015-07-30T20:00:00Z',
          'date_updated': '2015-07-30T20:00:00Z',
          'lookup': {
              'carrier': {
                  'error_code': null,
                  'name': 'Carrier Name',
                  'mobile_country_code': '310',
                  'mobile_network_code': '150',
                  'type': 'mobile'
              }
          },
          'amount': null,
          'payee': null,
          'url': 'https://verify.twilio.com/v2/Services/VAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Verifications/VEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      });

      holodeck.mock(new Response(200, body));

      var opts = {status: 'canceled'};
      var promise = client.verify.v2.services('VAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .verifications('sid').update(opts);
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid fetch request',
    function(done) {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.verify.v2.services('VAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .verifications('sid').fetch();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var serviceSid = 'VAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sid = 'sid';
      var url = `https://verify.twilio.com/v2/Services/${serviceSid}/Verifications/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch_verification response',
    function(done) {
      var body = JSON.stringify({
          'sid': 'VEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'service_sid': 'VAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'to': '+15017122661',
          'channel': 'sms',
          'status': 'pending',
          'valid': false,
          'date_created': '2015-07-30T20:00:00Z',
          'date_updated': '2015-07-30T20:00:00Z',
          'lookup': {
              'carrier': {
                  'error_code': null,
                  'name': 'Carrier Name',
                  'mobile_country_code': '310',
                  'mobile_network_code': '150',
                  'type': 'mobile'
              }
          },
          'amount': null,
          'payee': null,
          'url': 'https://verify.twilio.com/v2/Services/VAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Verifications/VEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.verify.v2.services('VAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .verifications('sid').fetch();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});
