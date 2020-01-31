function RequestHandler() {
}

RequestHandler.prototype.get_request = function() {
  var oReq = new XMLHttpRequest();
  oReq.open("GET", "https://api.github.com/users/YingxuH");
  oReq.send();
}
