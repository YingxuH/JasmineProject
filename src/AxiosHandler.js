function AxiosHandler() {
}

AxiosHandler.prototype.get_request = async function() {
  var githubUser = await axios.get("https://api.github.com/users/YingxuH");
  var githubInfo = await githubUser.data;
  this.user_id = githubInfo.id;
}

AxiosHandler.prototype.post_request = async function() {
  var data = {
    id: 11,
    first_name: "Yingxu",
    last_name: "He",
    email: "yingxu.he1998@gmail.com"
  }

  var post_info = await axios.post(`http://localhost:3000/users`, data);
  var post_data = await post_info.data;
  this.post_data = post_data;
}

AxiosHandler.prototype.delete_request = async function() {
  var delete_info = await axios.delete('http://localhost:3000/users/2/');
  var delete_status = await delete_info.status;
  this.delete_status = delete_status;
}

AxiosHandler.prototype.multiple_get_requests = async function() {
  let [u1, u2] = await Promise.all([
    axios.get("https://api.github.com/users/YingxuH"),
    axios.get("https://api.github.com/users/QuodAI")
  ])

  this.multiple_user_ids = {
    yingxu: u1.data.id,
    quodai: u2.data.id
  }
}

AxiosHandler.prototype.get_request_via_config = async function() {
  var githubUser = await axios({
    method: 'get',
    url: "https://api.github.com/users/YingxuH",
    responseType: "json"
  });

  var githubInfo = await githubUser.data;
  this.user_info_1 = githubInfo.id;
}
