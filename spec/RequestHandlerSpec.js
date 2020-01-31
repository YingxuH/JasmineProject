describe("RequestHandler", function() {
  var requestHandler;
  // var song;

  beforeEach(function() {
    requestHandler = new RequestHandler();
  });

  it("should be able to send get request", function() {
    requestHandler.get_request();
  });
});
