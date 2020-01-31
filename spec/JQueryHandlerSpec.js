describe("JQueryHandler", function() {
  var jQueryHandler;
  // var song;

  beforeEach(function() {
    jQueryHandler = new JQueryHandler();
  });

  it("should be able to send get request", function() {
    var test = $.ajax({
      url: "https://api.github.com/users/YingxuH",
      type: "GET"
    }).done(res => {
      expect(res.id).toEqual(28558142);
    })
  });
});
