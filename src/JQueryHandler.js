function JQueryHandler() {
}

JQueryHandler.prototype.get_request = function() {
  // var user_id;

  var test = $.ajax({
    url: "https://api.github.com/users/YingxuH",
    type: "GET"
  })
  // .done(res => {
  //   this.user_id = res.id;
  // })
  // user_info = await test.responseJSON;
  // console.log(test);
  // console.log(user_id.responseText);
}
