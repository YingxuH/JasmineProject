describe("Fetch", function() {
  var fetchHandler;
  // var song;

  beforeEach(function() {
    fetchHandler = new FetchHandler();
    // song = new Song();
  });

  it("should be able to send get request", async function() {
    await fetchHandler.get_request();
    expect(fetchHandler.user_id).toEqual(28558142);
  });

  // it("should be able to send post request", async function() {
  //   let data = {
  //     id: 32,
  //     first_name: "Yingxu",
  //     last_name: "He",
  //     email: "yingxu.he1998@gmail.com"
  //   }
  //   await fetchHandler.post_request();
  //   expect(fetchHandler.post_data).toEqual(data);
  // });

  // it("should be able to send post request via repuest object", async function() {
  //   let data = {
  //     id: 33,
  //     first_name: "Yingxu",
  //     last_name: "He",
  //     email: "yingxu.he1998@gmail.com"
  //   }
  //   await fetchHandler.post_request_object();
  //   expect(fetchHandler.post_data).toEqual(data);
  // });

  it("should be able to handler error", async function() {
    try {
        await fetchHandler.handle_error_via_response();
    } catch(err) {
      expect(err.message).toEqual('Network response was not ok');
    }
  });

  it("should be able to send put request", async function() {
    await fetchHandler.put_request();
    expect(fetchHandler.status).toEqual(200);
  });
});
