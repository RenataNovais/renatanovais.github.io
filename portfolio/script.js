window.onload = function () {
  const video = document.getElementsByTagName('video')[0];
  video.preload = "auto";
  // const promise = video.play();;

  // if (promise !== undefined) {
  //   promise.then(_ => {
  //     // Autoplay started!
  //   }).catch(error => {
  //     // Autoplay was prevented.
  //     // Show a "Play" button so that user can start playback.
  //   });
  // }
}
