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
});
