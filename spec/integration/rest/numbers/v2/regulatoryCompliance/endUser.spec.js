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

describe('EndUser', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid create request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var opts = {friendlyName: 'friendly_name', type: 'individual'};
      var promise = client.numbers.v2.regulatoryCompliance
                                     .endUsers.create(opts);
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var url = 'https://numbers.twilio.com/v2/RegulatoryCompliance/EndUsers';

      var values = {FriendlyName: 'friendly_name', Type: 'individual', };
      holodeck.assertHasRequest(new Request({
          method: 'POST',
          url: url,
          data: values
      }));
    }
  );
  it('should generate valid create response',
    function(done) {
      var body = {
          'sid': 'ITaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'friendly_name': 'friendly_name',
          'type': 'individual',
          'attributes': {
              'email': 'foobar@twilio.com'
          },
          'date_created': '2019-07-30T21:57:45Z',
          'date_updated': '2019-07-30T21:57:45Z',
          'url': 'https://numbers.twilio.com/v2/RegulatoryCompliance/EndUsers/ITaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };

      holodeck.mock(new Response(201, body));

      var opts = {friendlyName: 'friendly_name', type: 'individual'};
      var promise = client.numbers.v2.regulatoryCompliance
                                     .endUsers.create(opts);
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should treat the first each arg as a callback',
    function(done) {
      var body = {
          'results': [
              {
                  'sid': 'ITaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'friendly_name': 'friendly_name',
                  'type': 'individual',
                  'attributes': {
                      'email': 'foobar@twilio.com'
                  },
                  'date_created': '2019-07-30T21:57:45Z',
                  'date_updated': '2019-07-30T21:57:45Z',
                  'url': 'https://numbers.twilio.com/v2/RegulatoryCompliance/EndUsers/ITaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ],
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://numbers.twilio.com/v2/RegulatoryCompliance/EndUsers?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://numbers.twilio.com/v2/RegulatoryCompliance/EndUsers?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'results'
          }
      };
      holodeck.mock(new Response(200, body));
      client.numbers.v2.regulatoryCompliance
                       .endUsers.each(() => done());
    }
  );
  it('should treat the second arg as a callback',
    function(done) {
      var body = {
          'results': [
              {
                  'sid': 'ITaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'friendly_name': 'friendly_name',
                  'type': 'individual',
                  'attributes': {
                      'email': 'foobar@twilio.com'
                  },
                  'date_created': '2019-07-30T21:57:45Z',
                  'date_updated': '2019-07-30T21:57:45Z',
                  'url': 'https://numbers.twilio.com/v2/RegulatoryCompliance/EndUsers/ITaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ],
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://numbers.twilio.com/v2/RegulatoryCompliance/EndUsers?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://numbers.twilio.com/v2/RegulatoryCompliance/EndUsers?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'results'
          }
      };
      holodeck.mock(new Response(200, body));
      client.numbers.v2.regulatoryCompliance
                       .endUsers.each({pageSize: 20}, () => done());
      holodeck.assertHasRequest(new Request({
          method: 'GET',
          url: 'https://numbers.twilio.com/v2/RegulatoryCompliance/EndUsers',
          params: {PageSize: 20},
      }));
    }
  );
  it('should find the callback in the opts object',
    function(done) {
      var body = {
          'results': [
              {
                  'sid': 'ITaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'friendly_name': 'friendly_name',
                  'type': 'individual',
                  'attributes': {
                      'email': 'foobar@twilio.com'
                  },
                  'date_created': '2019-07-30T21:57:45Z',
                  'date_updated': '2019-07-30T21:57:45Z',
                  'url': 'https://numbers.twilio.com/v2/RegulatoryCompliance/EndUsers/ITaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ],
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://numbers.twilio.com/v2/RegulatoryCompliance/EndUsers?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://numbers.twilio.com/v2/RegulatoryCompliance/EndUsers?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'results'
          }
      };
      holodeck.mock(new Response(200, body));
      client.numbers.v2.regulatoryCompliance
                       .endUsers.each({callback: () => done()}, () => fail('wrong callback!'));
    }
  );
  it('should generate valid list request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.numbers.v2.regulatoryCompliance
                                     .endUsers.list();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var url = 'https://numbers.twilio.com/v2/RegulatoryCompliance/EndUsers';

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_empty response',
    function(done) {
      var body = {
          'results': [],
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://numbers.twilio.com/v2/RegulatoryCompliance/EndUsers?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://numbers.twilio.com/v2/RegulatoryCompliance/EndUsers?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'results'
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.numbers.v2.regulatoryCompliance
                                     .endUsers.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid read_full response',
    function(done) {
      var body = {
          'results': [
              {
                  'sid': 'ITaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'friendly_name': 'friendly_name',
                  'type': 'individual',
                  'attributes': {
                      'email': 'foobar@twilio.com'
                  },
                  'date_created': '2019-07-30T21:57:45Z',
                  'date_updated': '2019-07-30T21:57:45Z',
                  'url': 'https://numbers.twilio.com/v2/RegulatoryCompliance/EndUsers/ITaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ],
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://numbers.twilio.com/v2/RegulatoryCompliance/EndUsers?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://numbers.twilio.com/v2/RegulatoryCompliance/EndUsers?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'results'
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.numbers.v2.regulatoryCompliance
                                     .endUsers.list();
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

      var promise = client.numbers.v2.regulatoryCompliance
                                     .endUsers('ITXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var sid = 'ITXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://numbers.twilio.com/v2/RegulatoryCompliance/EndUsers/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function(done) {
      var body = {
          'sid': 'ITaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'friendly_name': 'friendly_name',
          'type': 'individual',
          'attributes': {
              'email': 'foobar@twilio.com'
          },
          'date_created': '2019-07-30T21:57:45Z',
          'date_updated': '2019-07-30T21:57:45Z',
          'url': 'https://numbers.twilio.com/v2/RegulatoryCompliance/EndUsers/ITaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };

      holodeck.mock(new Response(200, body));

      var promise = client.numbers.v2.regulatoryCompliance
                                     .endUsers('ITXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
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
      holodeck.mock(new Response(500, {}));

      var promise = client.numbers.v2.regulatoryCompliance
                                     .endUsers('ITXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var sid = 'ITXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://numbers.twilio.com/v2/RegulatoryCompliance/EndUsers/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'POST',
        url: url
      }));
    }
  );
  it('should generate valid update response',
    function(done) {
      var body = {
          'sid': 'ITaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'friendly_name': 'friendly_name',
          'type': 'individual',
          'attributes': {
              'email': 'foobar@twilio.com'
          },
          'date_created': '2019-07-30T21:57:45Z',
          'date_updated': '2019-07-30T21:57:45Z',
          'url': 'https://numbers.twilio.com/v2/RegulatoryCompliance/EndUsers/ITaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };

      holodeck.mock(new Response(200, body));

      var promise = client.numbers.v2.regulatoryCompliance
                                     .endUsers('ITXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});
