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

describe('User', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid fetch request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.chat.v2.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                  .users('USXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var serviceSid = 'ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sid = 'USXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://chat.twilio.com/v2/Services/${serviceSid}/Users/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function(done) {
      var body = {
          'sid': 'USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'role_sid': 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'identity': 'jing',
          'attributes': null,
          'is_online': true,
          'is_notifiable': null,
          'friendly_name': null,
          'joined_channels_count': 0,
          'date_created': '2016-03-24T21:05:19Z',
          'date_updated': '2016-03-24T21:05:19Z',
          'links': {
              'user_channels': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users/USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels',
              'user_bindings': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users/USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Bindings'
          },
          'url': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users/USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };

      holodeck.mock(new Response(200, body));

      var promise = client.chat.v2.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                  .users('USXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid remove request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.chat.v2.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                  .users('USXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var serviceSid = 'ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sid = 'USXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://chat.twilio.com/v2/Services/${serviceSid}/Users/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'DELETE',
        url: url
      }));
    }
  );
  it('should generate valid delete response',
    function(done) {
      var body = null;

      holodeck.mock(new Response(204, body));

      var promise = client.chat.v2.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                  .users('USXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise.then(function(response) {
        expect(response).toBe(true);
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid create request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var opts = {identity: 'identity', xTwilioWebhookEnabled: 'true'};
      var promise = client.chat.v2.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                  .users.create(opts);
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var serviceSid = 'ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://chat.twilio.com/v2/Services/${serviceSid}/Users`;

      var values = {Identity: 'identity', };
      holodeck.assertHasRequest(new Request({
          method: 'POST',
          url: url,
          data: values
      }));

      var headers = {'X-Twilio-Webhook-Enabled': 'true'};
      holodeck.assertHasRequest(new Request({
        method: 'POST',
        url: url,
        headers: headers
      }));
    }
  );
  it('should generate valid create response',
    function(done) {
      var body = {
          'sid': 'USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'role_sid': 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'identity': 'jing',
          'attributes': null,
          'is_online': true,
          'is_notifiable': null,
          'friendly_name': null,
          'joined_channels_count': 0,
          'date_created': '2016-03-24T21:05:19Z',
          'date_updated': '2016-03-24T21:05:19Z',
          'links': {
              'user_channels': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users/USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels',
              'user_bindings': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users/USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Bindings'
          },
          'url': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users/USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };

      holodeck.mock(new Response(201, body));

      var opts = {identity: 'identity'};
      var promise = client.chat.v2.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                  .users.create(opts);
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
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'users'
          },
          'users': [
              {
                  'sid': 'USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'role_sid': 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'identity': 'jing',
                  'attributes': null,
                  'is_online': true,
                  'is_notifiable': null,
                  'friendly_name': null,
                  'date_created': '2016-03-24T21:05:19Z',
                  'date_updated': '2016-03-24T21:05:19Z',
                  'joined_channels_count': 0,
                  'links': {
                      'user_channels': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users/USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels',
                      'user_bindings': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users/USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Bindings'
                  },
                  'url': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users/USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ]
      };
      holodeck.mock(new Response(200, body));
      client.chat.v2.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                    .users.each(() => done());
    }
  );
  it('should treat the second arg as a callback',
    function(done) {
      var body = {
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'users'
          },
          'users': [
              {
                  'sid': 'USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'role_sid': 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'identity': 'jing',
                  'attributes': null,
                  'is_online': true,
                  'is_notifiable': null,
                  'friendly_name': null,
                  'date_created': '2016-03-24T21:05:19Z',
                  'date_updated': '2016-03-24T21:05:19Z',
                  'joined_channels_count': 0,
                  'links': {
                      'user_channels': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users/USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels',
                      'user_bindings': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users/USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Bindings'
                  },
                  'url': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users/USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ]
      };
      holodeck.mock(new Response(200, body));
      client.chat.v2.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                    .users.each({pageSize: 20}, () => done());
      holodeck.assertHasRequest(new Request({
          method: 'GET',
          url: 'https://chat.twilio.com/v2/Services/${serviceSid}/Users',
          params: {PageSize: 20},
      }));
    }
  );
  it('should find the callback in the opts object',
    function(done) {
      var body = {
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'users'
          },
          'users': [
              {
                  'sid': 'USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'role_sid': 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'identity': 'jing',
                  'attributes': null,
                  'is_online': true,
                  'is_notifiable': null,
                  'friendly_name': null,
                  'date_created': '2016-03-24T21:05:19Z',
                  'date_updated': '2016-03-24T21:05:19Z',
                  'joined_channels_count': 0,
                  'links': {
                      'user_channels': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users/USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels',
                      'user_bindings': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users/USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Bindings'
                  },
                  'url': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users/USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ]
      };
      holodeck.mock(new Response(200, body));
      client.chat.v2.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                    .users.each({callback: () => done()}, () => fail('wrong callback!'));
    }
  );
  it('should generate valid list request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.chat.v2.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                  .users.list();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var serviceSid = 'ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://chat.twilio.com/v2/Services/${serviceSid}/Users`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_full response',
    function(done) {
      var body = {
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'users'
          },
          'users': [
              {
                  'sid': 'USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'role_sid': 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'identity': 'jing',
                  'attributes': null,
                  'is_online': true,
                  'is_notifiable': null,
                  'friendly_name': null,
                  'date_created': '2016-03-24T21:05:19Z',
                  'date_updated': '2016-03-24T21:05:19Z',
                  'joined_channels_count': 0,
                  'links': {
                      'user_channels': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users/USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels',
                      'user_bindings': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users/USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Bindings'
                  },
                  'url': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users/USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ]
      };

      holodeck.mock(new Response(200, body));

      var promise = client.chat.v2.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                  .users.list();
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
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'users'
          },
          'users': []
      };

      holodeck.mock(new Response(200, body));

      var promise = client.chat.v2.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                  .users.list();
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

      var opts = {xTwilioWebhookEnabled: 'true'};
      var promise = client.chat.v2.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                  .users('USXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update(opts);
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var serviceSid = 'ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sid = 'USXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://chat.twilio.com/v2/Services/${serviceSid}/Users/${sid}`;

      var headers = {'X-Twilio-Webhook-Enabled': 'true'};
      holodeck.assertHasRequest(new Request({
        method: 'POST',
        url: url,
        headers: headers
      }));
    }
  );
  it('should generate valid update response',
    function(done) {
      var body = {
          'sid': 'USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'role_sid': 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'identity': 'jing',
          'attributes': null,
          'is_online': true,
          'is_notifiable': null,
          'friendly_name': null,
          'joined_channels_count': 0,
          'date_created': '2016-03-24T21:05:19Z',
          'date_updated': '2016-03-24T21:05:19Z',
          'links': {
              'user_channels': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users/USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels',
              'user_bindings': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users/USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Bindings'
          },
          'url': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users/USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };

      holodeck.mock(new Response(200, body));

      var promise = client.chat.v2.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                  .users('USXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});
