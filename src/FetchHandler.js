function FetchHandler() {
  this.user_id = null;
}

FetchHandler.prototype.get_request = async function() {
  var githubUser = await fetch("https://api.github.com/users/YingxuH");
  var userInfo = await githubUser.json();
  this.user_id = userInfo.id;
}

FetchHandler.prototype.post_request = async function() {
  let data = {
    id: 32,
    first_name: "Yingxu",
    last_name: "He",
    email: "yingxu.he1998@gmail.com"
  }
  let config = {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data)
  }

  var post_info = await fetch(`http://localhost:3000/users`, config)
  var post_data = await post_info.json();
  this.post_data = post_data;
}

FetchHandler.prototype.post_request_object = async function() {
  var data = {
    id: 33,
    first_name: "Yingxu",
    last_name: "He",
    email: "yingxu.he1998@gmail.com"
  }

  var request = new Request('http://localhost:3000/users', {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify(data)
  });

  var post_info = await fetch(request);
  var post_data = await post_info.json();
  this.post_data = post_data;
}
