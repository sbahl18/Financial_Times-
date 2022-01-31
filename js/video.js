window.addEventListener("load", initEvent);

function initEvent(){
    links = document.getElementsByClassName("video-cover");
    video = document.getElementById("v1");

    for(var i = 0; i < links.length; i++){ 
        links[i].addEventListener("click", playVideo);
    }

}

function playVideo() {
    // var songName = event.srcElement.parentElement.childNodes[0].data;
    var videoId = event.srcElement.title;
    console.log(videoId);
    var videoImg;
    var videoUrl;
    // console.log("video Array is ",videosArray,"video Name ",videoName);
    for(var i = 0; i < videosArray.length; i++){
        if (videosArray[i].id == videoId){
            videoUrl = videosArray[i].videoUrl;
            console.log("video URL is ",videoUrl," Type of ",typeof videoUrl);
            videoCoverImg = videosArray[i].videoImage;
            // console.log(songUrl);
        }
    }
    // changeCover(videoCoverImg);
    video.src = videoUrl;
    video.play();

}