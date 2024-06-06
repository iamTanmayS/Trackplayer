import React from "react";
import { playbackServices } from "../../musicPlayerServices";
import TrackPlayer, { State, usePlaybackState } from "react-native-track-player";
import {default as Icon} from "react-native-vector-icons/FontAwesome5"
import { Pressable, StyleSheet, View } from "react-native";


const  Controlcenter = () => {
    let isPlay = false;
    const playBackState = usePlaybackState();
    const  skipToNext = async () =>{
        TrackPlayer.skipToNext();
    }
    const  skipToPrevious = async () =>{
        TrackPlayer.skipToPrevious();
    }
    const  play = async () =>{
        TrackPlayer.play();
    }
    const  pause = async () =>{
        TrackPlayer.pause();
    }
    const  stop = async () =>{
        TrackPlayer.stop();
    }

    const toogleplayback = async (playback: State) =>{
        
        const currentTrack = TrackPlayer.getActiveTrack()
        if (currentTrack !== null) {
            if (playback === State.Paused || playback === State.Ready) {
                TrackPlayer.play();
                isPlay = true
            } else {
                TrackPlayer.pause();
            }   isPlay = false
        }

    }
    return (
        <View style = {styles.container}>
            <Pressable>
                <Icon style = {styles.icon} name = "backward" size = {30} color = "#FFFFFF" onPress = {skipToPrevious}/>
            </Pressable>
            <Pressable >
                <Icon style = {styles.playButton} name = {isPlay ? "pause" : "play" } size = {30} color = "#FFFFFF" />
            </Pressable>
            <Pressable>
                <Icon style = {styles.icon} name = "forward" size = {30} color = "#FFFFFF" onPress = {skipToNext}/>
            </Pressable>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginBottom: 56,
    
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
      },
      icon: {
        color: '#FFFFFF',
      },
      playButton: {
        marginHorizontal: 24,
      },
})
export default Controlcenter;