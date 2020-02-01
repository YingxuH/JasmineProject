describe("RequestHandler", function() {
  var requestHandler;
  // var song;

  beforeEach(function() {
    requestHandler = new RequestHandler();
  });

  it("should be able to send get request", function() {
    var oReq = new XMLHttpRequest();

    oReq.open("GET", "https://api.github.com/users/YingxuH");
    oReq.responseType = "json";
    oReq.send();
    oReq.timeout = 10000;

    oReq.onload = function() {
      if (oReq.status == 200) {
        expect(oReq.status).toEqual(200);
        expect(oReq.response.id).toEqual(28558142);
      }
    };
  });

  it("should be able to check document status on server", function() {
    var oReq = new XMLHttpRequest();

    oReq.open("HEAD", "https://api.github.com/users/YingxuH");
    oReq.responseType = "json";
    oReq.send();
    oReq.timeout = 10000;

    oReq.onload = function() {
      expect(this.status).toEqual(200);
    };
  });

  it("should be able to send post request", async function() {
    var oReq = new XMLHttpRequest();
    var data = {
      id: 47,
      first_name: "Yingxu",
      last_name: "He",
      email: "yingxu.he1998@gmail.com"
    };
    oReq.timeout = 10000;

    oReq.open("POST", "http://localhost:3000/users");
    oReq.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    await oReq.send(JSON.stringify(data));
    oReq.onload = function() {
      expect(oReq.status).toEqual(201);
    }
  });

  it("should be able to abort a request", function() {
    var oReq = new XMLHttpRequest();
    var data = {
      id: 43,
      first_name: "Yingxu",
      last_name: "He",
      email: "yingxu.he1998@gmail.com"
    };

    oReq.open("POST", "http://localhost:3000/users");
    oReq.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    oReq.send(JSON.stringify(data));
    oReq.timeout = 10000;
    oReq.abort();
    expect(oReq.status).toEqual(0);
  });

  it("should be able to show progress while downloading", async function() {
    var oReq = new XMLHttpRequest();
    var data = {
      id: 50,
      first_name: "Yingxu",
      last_name: "He",
      email: "yingxu.he1998@gmail.com"
    };

    oReq.upload.onprogress = function(event) {
      expect(event.loaded).toEqual(event.total);
    };
    oReq.timeout = 10000;

    oReq.open("POST", "http://localhost:3000/users");
    oReq.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    await oReq.send(JSON.stringify(data));
  });
});
