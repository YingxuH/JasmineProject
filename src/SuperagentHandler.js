function SuperagentHandler() {
  this.user_id = null;
}

SuperagentHandler.prototype.get_request = async function() {
  var githubUser = await superagent.get("https://api.github.com/users/YingxuH");
  var userInfo = await githubUser.body;
  this.user_id = userInfo.id;
}

SuperagentHandler.prototype.head_request = async function() {
  var githubUser = await superagent.head("https://api.github.com/users/YingxuH");
  var status = await githubUser.status;
  this.status = status;
}

SuperagentHandler.prototype.post_request = async function() {
  var data = {
    first_name: "Yingxu",
    last_name: "He",
    email: "yingxu.he1998@gmail.com"
  };

  var connection = await superagent.post("http://localhost:3000/users").send(data);
  var status = await connection.status;
  this.status = status;
}

SuperagentHandler.prototype.delete_request = async function() {
  var connection = await superagent.del("http://localhost:3000/users/54");
  var status = await connection.status;
  this.delete_status = status;
}
