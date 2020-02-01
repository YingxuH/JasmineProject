describe("Superagent", function() {
  var superagentHandler;
  // var song;

  beforeEach(function() {
    superagentHandler = new SuperagentHandler();
  });

  it("should be able to send get request", async function() {
    await superagentHandler.get_request();
    expect(superagentHandler.user_id).toEqual(28558142);
  });

  it("should be able to send head request", async function() {
    await superagentHandler.head_request();
    expect(superagentHandler.status).toEqual(200);
  });

  it("should be able to send post request", async function() {
    var data = {
      id: 55,
      first_name: "Yingxu",
      last_name: "He",
      email: "yingxu.he1998@gmail.com"
    };

    await superagentHandler.post_request();
    expect(superagentHandler.status).toEqual(201);
  });

  it("should be able to send delete request", async function() {

    await superagentHandler.delete_request();
    expect(superagentHandler.delete_status).toEqual(200);
  });

  it("should be able to send put request", async function() {

    await superagentHandler.put_request();
    expect(superagentHandler.put_status).toEqual(200);
  });

});
