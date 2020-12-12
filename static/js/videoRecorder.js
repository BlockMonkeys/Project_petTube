const recordContainer = document.querySelector('.record__container');
const recordPlayer = document.querySelector('#recordPlayer');
const recordBtn = document.querySelector('#recordBtn');
let videoRecorder;

const handleVideoData = (event) => {
    const videoFile = event.data;
    const link = document.createElement("a");
    link.href = URL.createObjectURL(videoFile);
    link.download = "recorded.webm";
    document.body.appendChild(link);
    link.click();
}


const startRecording = (stream) => {
    videoRecorder = new MediaRecorder(stream);
    videoRecorder.start();
    videoRecorder.addEventListener("dataavailable", handleVideoData);
    recordBtn.addEventListener("click", stopRecording);
}

const stopRecording = () => {
    videoRecorder.stop();
    recordBtn.removeEventListener("click", stopRecording);
    recordBtn.addEventListener("click", getVideo);
    recordBtn.innerHTML = "Start Recording";
};


const getVideo = async()=> {
    try{
        const stream = await navigator.mediaDevices.getUserMedia({
            audio: true,
            video: true,
        });
        recordPlayer.srcObject = stream;
        recordPlayer.muted = true;
        recordPlayer.play();
        recordBtn.innerHTML = "✋ Stop Record ✋ ";
        startRecording(stream);
    } catch (error) {
        recordBtn.innerHTML = "❌ CAN NOT ❌";
    } finally {
        recordBtn.removeEventListener("click", getVideo);
    }
}


const init = () => {
    recordPlayer.style.backgroundColor = "gray";
    recordBtn.addEventListener("click", getVideo);
}

if(recordContainer){
    init();
}