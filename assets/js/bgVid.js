/**
 * This file makes a call to the YouTube API to embed the background video
 * in such a way that allows for autoplay on mobile devices.
 *
 * @author: Zack West <alpazwest@gmail.com>
 * @version: 5/16/2022
 */

// Adds a script tag with the YouTube iFrame
let tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";

let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Instantiates a YT API object with the video and
// required params to autoplay w/o audio and minimal
// branding/info.
let player;
function onYouTubeIframeAPIReady() {

    player = new YT.Player('yt-player', {
        videoId: 'U_7YhQwMp_k',
        playerVars: {
            'autoplay': 1,
            'playsinline': 1,
            'controls': 0,
            'showinfo': 0,
            'autohide': 1,
            'mute': 1,
            'allowfullscreen': 1,
            'modestbranding': 1
        },
        events: {
            'onReady': onPlayerReady
        }
    });
}

// Mutes and starts the video when it's loaded
function onPlayerReady(event) {
    event.target.mute();
    event.target.playVideo();
}