const MockDate = require('mockdate') 


describe('MockDate', function() {
  var mockDate = '1/1/2000';
  var currentYear = new Date().getFullYear();
  var nativeToString = Date.toString();
  var mockDateRealOffset = new Date(mockDate).getTimezoneOffset();
  var currentDateRealOffset = new Date().getTimezoneOffset();

  beforeEach(function () {
    MockDate.set(new Date(mockDate));
  });

  afterEach(function () {
    MockDate.reset();
  });


  it('should throw for bad date', function() {
    console.log(mockDate)

  });
})
