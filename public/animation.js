const notRick = document.querySelector("#not-rick")
notRick.addEventListener("click", () => {
  notRick.style.display = "none"
  // document.querySelector("#imageHolder").innerHTML = `<img style="width: 100px; margin: 50px; display: block;" class="rick" src="https://variety.com/wp-content/uploads/2021/07/Rick-Astley-Never-Gonna-Give-You-Up.png?w=681&h=383&crop=1">  <audio src="song.mp3" id="my_audio" loop="loop" autoplay="autoplay"></audio>`
  document.querySelector("#imageHolder").innerHTML = `<video style="width: 400px; margin: 200px;" class="rick" src="video.mp4" autoplay><p>Your browser doesn't support HTML5 video. Here is a <a href="rabbit320.webm">link to the video</a> instead.</p></video>`
  


var aliceTumbling = [
  { transform: 'rotate(0) ', color: '#000' },
  { transform: 'rotate(360deg)', color: '#000' }
];
var aliceTiming = {
  duration: 3000,
  iterations: Infinity
}

document.querySelector(".rick").animate(
  aliceTumbling,
  aliceTiming
)
})