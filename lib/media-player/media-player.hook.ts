import { useState } from 'react'

import type { Media } from 'lib/media-player/media-player.types'

const useMediaPlayer = () => {
  const playlist: Media[] = [
    {
      name: 'Killswitch Engage - Rose of Sharyn guitar cover by Alex S',
      poster: 'video-player/rose-of-sharyn.jpg',
      source: 'video-player/rose-of-sharyn.mp4',
      duration: '3:33',
    },
    {
      name: 'Jojo plays music',
      poster: 'video-player/jojo-plays.jpg',
      source: 'video-player/jojo-plays.mp4',
      duration: '0:33',
    },
  ]

  const [currentMedia, setCurrentMedia] = useState<Media>(playlist[0])

  return {
    playlist,
    currentMedia,
    playMedia: (media: Media) => () => setCurrentMedia(media)
  }
}

export default useMediaPlayer
