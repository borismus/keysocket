var docOwner;

window.addEventListener("message", function(event) {
  if (event.source != window)
    return;
  docOwner = event.target.document;
  if (event.data.type && (event.data.type == "ustream_playing")) {
    console.log("Content script received: " + event.data.type);
    window.extisplaing = event.data.playing;
  }
}, false);

var injscript = document.createElement('script');
injscript.id = "injscript";
injscript.appendChild(document.createTextNode('\
  var video = window.ustream.flash.viewer.UstreamViewer;\n\
  console.log(video);\n\
  if (window.uisplaing === undefined) {\n\
      window.uisplaing = true;\n\
      window.postMessage({ type: "ustream_playing", playing: window.uisplaing }, "*");\n\
      window.oldOnPlay = video.onPlayerPlay;\n\
      video.onPlayerPlay = function(){\n\
          window.oldOnPlay();\n\
          console.log("play");\n\
          window.uisplaing = true;\n\
          window.postMessage({ type: "ustream_playing", playing: window.uisplaing }, "*");\n\
        };\n\
      window.oldOnPause = video.onPlayerPause;\n\
      video.onPlayerPause = function(){\n\
          console.log("pause");\n\
          window.oldOnPause();\n\
          window.uisplaing = false;\n\
          window.postMessage({ type: "ustream_playing", playing: window.uisplaing }, "*");\n\
        };\n\
  }\n\
  document.addListener("key-play", function(){console.log("key-play")},false);\n\
  document.addListener("key-pause", function(){console.log("key-pause")},false);\n\
  window.addEventListener("message", function(key){\n\
    if (event.source != window)\n\
      return;\n\
    console.log("Content script sended: " + event.data.type);\n\
    if (event.data.type){\n\
      if (event.data.type == "key-play") {\n\
        video.play();\n\
      } else if (event.data.type == "key-pause") {\n\
        video.pause();\n\
      }\n\
    }\n\
  });\n\
'));
(document.body || document.head || document.documentElement).appendChild(injscript);

function onKeyPress(key) {
    if (key === PLAY) {
        if (window.extisplaing) {
            docOwner.dispatchEvent(new CustomEvent('key-pause', {key: key}));
            docOwner.postMessage({ type: 'key-play', key: key }, '*');
        } else {
            docOwner.dispatchEvent(new CustomEvent('key-play', {key: key}));
            docOwner.postMessage({ type: 'key-play', key: key }, '*');
        }
    }
}
