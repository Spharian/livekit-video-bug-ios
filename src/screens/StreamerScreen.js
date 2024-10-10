import { useEffect, useRef } from 'react'
import { Audio } from 'expo-av'
import { useKeepAwake } from 'expo-keep-awake'
import moment from 'moment'
import * as Notifications from 'expo-notifications'

import StreamerVideo from '@/components/StreamerVideo'

export default function ShowScreen({ navigation, route }) {
  useKeepAwake()

  const streamerVideo = useRef()

  useEffect(() => {
    Audio.setAudioModeAsync({
      playsInSilentModeIOS: true,
      staysActiveInBackground: true,
    })
  }, [])

  return (
    <StreamerVideo
      show={{ id: 1 }}
      navigation={navigation}
      ref={streamerVideo}
    />
  )
}
