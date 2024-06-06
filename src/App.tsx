import { useState,useEffect } from 'react';
import React from 'react';
import type {PropsWithChildren} from 'react';
import MusicPlayer from './Screens/Musicplayer';
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {initiateplayer,addtrack } from '../musicPlayerServices';

function App(): React.JSX.Element {

  const[isPlayerReady,setIsPlayerReady] = useState<boolean>(false)
  async function setup() {
 let isSetup = await initiateplayer()
 if (isSetup){
  await addtrack()
 }
 setIsPlayerReady(isSetup)
  }

  useEffect(() =>{
    setup()
  },[])
  if (!isPlayerReady){
    return (
      <SafeAreaView>
        <ActivityIndicator>
        </ActivityIndicator>
      </SafeAreaView>
    )
  } 
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      <MusicPlayer />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  }
});
export default App;

