function FetchHandler() {
  this.user_id = null;
}

FetchHandler.prototype.get_request = async function() {

  var githubUser = await fetch("https://api.github.com/users/YingxuH");
  var userInfo = await githubUser.json();
  this.user_id = userInfo.id;
}

// function Player() {
// }
// Player.prototype.play = function(song) {
//   this.currentlyPlayingSong = song;
//   this.isPlaying = true;
// };
//
// Player.prototype.pause = function() {
//   this.isPlaying = false;
// };
//
// Player.prototype.resume = function() {
//   if (this.isPlaying) {
//     throw new Error("song is already playing");
//   }
//
//   this.isPlaying = true;
// };
//
// Player.prototype.makeFavorite = function() {
//   this.currentlyPlayingSong.persistFavoriteStatus(true);
// };
