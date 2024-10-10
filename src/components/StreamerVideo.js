import { useState, useEffect, useMemo, forwardRef } from 'react'
import { View, StyleSheet } from 'react-native'
import { Room, Track } from 'livekit-client'
import { useRoom, AudioSession, VideoView, useIOSAudioManagement } from '@livekit/react-native'

import axios from '@/util/axios'
import Colors from '@/styles/colors'

const StreamerVideo = forwardRef(({ show, navigation }, ref) => {
  const [streamerToken, setStreamerToken] = useState(null)

  const [room] = useState(() => new Room())
  const { participants } = useRoom(room)

  useIOSAudioManagement(room)

  const stopStreaming = () => {
    room?.disconnect()
    AudioSession.stopAudioSession()
  }

  useEffect(() => {
    if (! show) return
    getStreamerToken()
  }, [show])

  const getStreamerToken = async () => {
    try {
      const { data } = await axios.get(`/api/seller/shows/${show?.id}/streamer-token`)
      setStreamerToken(data)
    } catch (error) {
      console.warning(error)
    }
  }

  useEffect(() => {
    if (! streamerToken || ! room) return

    const connect = async () => {
      try {
        await AudioSession.startAudioSession()
        await room?.connect('wss://shiny-live-uvi5t81k.livekit.cloud', streamerToken)

        setRoomIsConnected(true)

        room?.localParticipant.setMicrophoneEnabled(true)
        room?.localParticipant.setCameraEnabled(true)
      } catch (error) {
        console.warning(error)
      }
    }
    connect()

    return () => {
      stopStreaming()
    }
  }, [streamerToken, room])

  const streamerParticipant = useMemo(() => {
    return participants.find(participant => participant.identity == 1)
  }, [participants])

  if (participants.length === 0 || ! streamerParticipant || room?.state !== 'connected') {
    return null
  }

  return (
    <View style={StyleSheet.absoluteFill}>
      <VideoView
        style={{
          flex: 1,
          backgroundColor: Colors.black,
        }}
        objectFit="cover"
        videoTrack={streamerParticipant.getTrackPublication(Track.Source.Camera)?.videoTrack}
      />
    </View>
  )
})

export default StreamerVideo
