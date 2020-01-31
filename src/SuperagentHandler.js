function SuperagentHandler() {
  this.user_id = null;
}

SuperagentHandler.prototype.get_request = async function() {
  var githubUser = await superagent.get("https://api.github.com/users/YingxuH");
  var userInfo = await githubUser.body;
  this.user_id = userInfo.id;
}
