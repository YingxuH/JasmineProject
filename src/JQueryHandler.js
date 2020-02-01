function JQueryHandler() {
}

JQueryHandler.prototype.get_request = function() {
  // var user_id;

  var test = $.ajax({
    url: "https://api.github.com/users/YingxuH",
    type: "GET"
  })
}
