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

describe('Country', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should treat the first each arg as a callback',
    function(done) {
      var body = {
          'countries': [
              {
                  'country': 'Andorra',
                  'iso_country': 'AD',
                  'url': 'https://pricing.twilio.com/v1/Voice/Countries/AD'
              }
          ],
          'meta': {
              'first_page_url': 'https://pricing.twilio.com/v1/Voice/Countries?PageSize=50&Page=0',
              'key': 'countries',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://pricing.twilio.com/v1/Voice/Countries?PageSize=50&Page=0'
          }
      };
      holodeck.mock(new Response(200, body));
      client.pricing.v1.voice
                       .countries.each(() => done());
    }
  );
  it('should treat the second arg as a callback',
    function(done) {
      var body = {
          'countries': [
              {
                  'country': 'Andorra',
                  'iso_country': 'AD',
                  'url': 'https://pricing.twilio.com/v1/Voice/Countries/AD'
              }
          ],
          'meta': {
              'first_page_url': 'https://pricing.twilio.com/v1/Voice/Countries?PageSize=50&Page=0',
              'key': 'countries',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://pricing.twilio.com/v1/Voice/Countries?PageSize=50&Page=0'
          }
      };
      holodeck.mock(new Response(200, body));
      client.pricing.v1.voice
                       .countries.each({pageSize: 20}, () => done());
      holodeck.assertHasRequest(new Request({
          method: 'GET',
          url: 'https://pricing.twilio.com/v1/Voice/Countries',
          params: {PageSize: 20},
      }));
    }
  );
  it('should find the callback in the opts object',
    function(done) {
      var body = {
          'countries': [
              {
                  'country': 'Andorra',
                  'iso_country': 'AD',
                  'url': 'https://pricing.twilio.com/v1/Voice/Countries/AD'
              }
          ],
          'meta': {
              'first_page_url': 'https://pricing.twilio.com/v1/Voice/Countries?PageSize=50&Page=0',
              'key': 'countries',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://pricing.twilio.com/v1/Voice/Countries?PageSize=50&Page=0'
          }
      };
      holodeck.mock(new Response(200, body));
      client.pricing.v1.voice
                       .countries.each({callback: () => done()}, () => fail('wrong callback!'));
    }
  );
  it('should generate valid list request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.pricing.v1.voice
                                     .countries.list();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var url = 'https://pricing.twilio.com/v1/Voice/Countries';

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_full response',
    function(done) {
      var body = {
          'countries': [
              {
                  'country': 'Andorra',
                  'iso_country': 'AD',
                  'url': 'https://pricing.twilio.com/v1/Voice/Countries/AD'
              }
          ],
          'meta': {
              'first_page_url': 'https://pricing.twilio.com/v1/Voice/Countries?PageSize=50&Page=0',
              'key': 'countries',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://pricing.twilio.com/v1/Voice/Countries?PageSize=50&Page=0'
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.pricing.v1.voice
                                     .countries.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid read_empty response',
    function(done) {
      var body = {
          'countries': [],
          'meta': {
              'first_page_url': 'https://pricing.twilio.com/v1/Voice/Countries?PageSize=50&Page=0',
              'key': 'countries',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://pricing.twilio.com/v1/Voice/Countries?PageSize=50&Page=0'
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.pricing.v1.voice
                                     .countries.list();
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
      holodeck.mock(new Response(500, {}));

      var promise = client.pricing.v1.voice
                                     .countries('US').fetch();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var isoCountry = 'US';
      var url = `https://pricing.twilio.com/v1/Voice/Countries/${isoCountry}`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function(done) {
      var body = {
          'country': 'United States',
          'inbound_call_prices': [
              {
                  'current_price': '0.0085',
                  'number_type': 'local',
                  'base_price': '0.0085'
              },
              {
                  'current_price': '0.022',
                  'number_type': 'toll free',
                  'base_price': '0.022'
              }
          ],
          'iso_country': 'US',
          'outbound_prefix_prices': [
              {
                  'prefixes': [
                      '1907'
                  ],
                  'current_price': '0.090',
                  'friendly_name': 'Programmable Outbound Minute - United States - Alaska',
                  'base_price': '0.090'
              }
          ],
          'price_unit': 'USD',
          'url': 'https://pricing.twilio.com/v1/Voice/Countries/US'
      };

      holodeck.mock(new Response(200, body));

      var promise = client.pricing.v1.voice
                                     .countries('US').fetch();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});
