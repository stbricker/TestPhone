'use strict';

describe('Service: softphone', function () {

  // load the service's module
  beforeEach(module('testPhoneApp'));

  // instantiate service
  var softphone;
  beforeEach(inject(function (_softphone_) {
    softphone = _softphone_;
  }));

  it('should do something', function () {
    expect(!!softphone).toBe(true);
  });

});
