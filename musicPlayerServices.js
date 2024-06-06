import TrackPlayer, { RepeatMode } from "react-native-track-player";
import { playListData } from "./src/Constants";
import { Event } from "react-native-track-player";

export async function initiateplayer() {
    let isplayersetup = false;
    try {
        TrackPlayer.getActiveTrack()
        isplayersetup = true;
    } catch (error) {
        TrackPlayer.setupPlayer()
        isplayersetup = true;
    }
    finally{
        return isplayersetup;
    }
}
export async function addtrack(){
    TrackPlayer.add(playListData);
    TrackPlayer.setRepeatMode(RepeatMode.Queue)
}
export async function playbackServices() {
    TrackPlayer.addEventListener(Event.RemotePause,() =>{
        TrackPlayer.pause();
    })

    TrackPlayer.addEventListener(Event.RemotePlay,() =>{
        TrackPlayer.play();
    })

    TrackPlayer.addEventListener(Event.RemoteStop,() =>{
        TrackPlayer.stop();
    })

    TrackPlayer.addEventListener(Event.RemoteNext,() =>{
        TrackPlayer.skipToNext();
    })

    TrackPlayer.addEventListener(Event.RemotePrevious,() =>{
        TrackPlayer.skipToPrevious();
    })
    TrackPlayer.addEventListener(Event.RemoteJumpForward,() =>{
        TrackPlayer.seekTo(TrackPlayer.getCurrentPosition() + 30);
    })

    TrackPlayer.addEventListener(Event.RemoteJumpBackward,() =>{
        TrackPlayer.seekTo(TrackPlayer.getCurrentPosition() - 30);
    })


}