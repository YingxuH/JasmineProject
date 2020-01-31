function AxiosHandler() {
}

AxiosHandler.prototype.get_request = async function() {
  var githubUser = await axios.get("https://api.github.com/users/YingxuH");
  var githubInfo = await githubUser.data;
  this.user_id = githubInfo.id;
}
