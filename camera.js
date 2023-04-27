var video = document.getElementById("camera")
const canvas = document.createElement("canvas");
const imageTag = document.getElementById("image")

const buttonCapture = document.getElementById("capture-iamge")
video.setAttribute('playsinline', '');
video.setAttribute('autoplay', '');
video.setAttribute('muted', '');


/* Setting up the constraint */
var facingMode = "user"; // Can be 'user' or 'environment' to access back or front camera (NEAT!)
var constraints = {
  audio: false,
  video: {
   facingMode: facingMode
  }
};

/* Stream it to video element */
navigator.mediaDevices.getUserMedia(constraints).then(function success(stream) {
  video.srcObject = stream;
});


function capture(){
    canvas.width = video.offsetWidth
    canvas.height = video.offsetHeight
    canvas.getContext("2d").drawImage(video,0,0,canvas.width,canvas.height)

    const dataURL = canvas.toDataURL()

    imageTag.src = dataURL
}

buttonCapture.addEventListener("click",()=>{
    capture()
})
