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

  it("should be able to send post request", function() {
    var data = {
        id: 63,
        first_name: "Yingxu",
        last_name: "He",
        email: "yingxu.he1998@gmail.com"
      };

    var test = $.ajax({
      url: "http://localhost:3000/users",
      data: data,
      type: "POST"
    }).done(res => {
      expect(res.id).toEqual("63");
    })
  });


  it("should be able to send get request via get()", function() {
    var test = $.get("https://api.github.com/users/YingxuH",
      function (data, textStatus, jqXHR) {
        expect(textStatus).toEqual('success');
      })
  });

  it("should be able to send post request via post()", function() {
      var data = {
          id: 64,
          first_name: "Yingxu",
          last_name: "He",
          email: "yingxu.he1998@gmail.com"
        };

    var test = $.post("http://localhost:3000/users",
      data,
      function(data, status, jsXHR) {
        expect(status).toEqual('success');
    });
  });

  it("should be able to send get request via getJSON()", function() {
    var test = $.getJSON("https://api.github.com/users/YingxuH",
      function (data, textStatus, jqXHR) {
        expect(data.id).toEqual(28558142);
        expect(textStatus).toEqual('success');
      })
  });


});
