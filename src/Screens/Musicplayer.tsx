import React, { useState, useEffect } from 'react';
import { Dimensions, FlatList, Image, StyleSheet, View } from 'react-native';
import { Event, Track, useTrackPlayerEvents } from 'react-native-track-player';
import TrackPlayer from 'react-native-track-player';
import { playListData } from '../Constants';
import Songinfo from '../components/Songinfo';
import Songslider from '../components/Songslider';
import Controlcenter from '../components/Controlcenter';

const { width } = Dimensions.get('window');

export const MusicPlayer = () => {
  const [track, setTrack] = useState<Track | null>(null);
  useTrackPlayerEvents([Event.PlaybackTrackChanged], async event => {
    switch (event.type) {
        case Event.PlaybackTrackChanged:
            const playingTrack = await TrackPlayer.getTrack(event.nextTrack)
            setTrack(playingTrack)
            break;
    
    }
})
  const renderArtWork = () => {
    return (
      <View style={styles.listArtWrapper}>
        <View style={styles.albumContainer}>
          {track?.artwork && (
            <Image
              style={styles.albumArtImg}
              source={{ uri: track?.artwork?.toString() }}
            />
          )}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={playListData}
        renderItem={renderArtWork}
        keyExtractor={song => song.id.toString()}
      />
      <Songinfo track={track} />
      <Songslider />
      <Controlcenter />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#001d23',
  },
  listArtWrapper: {
    width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  albumContainer: {
    width: 300,
    height: 300,
  },
  albumArtImg: {
    height: '100%',
    borderRadius: 4,
  },
});

export default MusicPlayer;
