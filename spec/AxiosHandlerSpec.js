describe("Axios", function() {
  var axiosHandler;

  beforeEach(function() {
    axiosHandler = new AxiosHandler();
  });

  it("should be able to send get request", async function() {
    await axiosHandler.get_request();
    console.log(axiosHandler.user_id);
    expect(axiosHandler.user_id).toEqual(28558142);
  });

  it("should be able to send post request", async function() {
    await axiosHandler.post_request();
    var data = {
      id: 11,
      first_name: "Yingxu",
      last_name: "He",
      email: "yingxu.he1998@gmail.com"
    };
    console.log(axiosHandler.post_data);
    expect(axiosHandler.post_data).toEqual(data);
  });

  it("should be able to send delete request", async function() {
    await axiosHandler.delete_request();
    expect(axiosHandler.delete_status).toEqual(200);
  });

  it("should be able to send multiple get requests", async function() {
    await axiosHandler.multiple_get_requests();
    var data = {
      yingxu: 28558142,
      quodai: 44568184
    };
    expect(axiosHandler.multiple_user_ids).toEqual(data);
  });

  it("should be able to send get requests via config", async function() {
    await axiosHandler.get_request_via_config();
    expect(axiosHandler.user_info_1).toEqual(28558142);
  });
});
