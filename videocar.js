/* Getting elements out of html */

let playingVideo = document.getElementById("playingVideo");
let showPlayedVideo = document.getElementById("showPlayedVideo");
let listOfVideos = document.getElementsByClassName("playListElement");

console.log(listOfVideos);

showPlayedVideo.textContent = playingVideo.getAttribute("src");

for (let i = 0; i < listOfVideos.length; i++) {
  listOfVideos[i].addEventListener("click", loadVideo);
}

function loadVideo(event) {
  alert(`You loaded ${this.firstChild.getAttribute("src")}`);
}
