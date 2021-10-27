import { createContext } from 'react'
import type { Dispatch, SetStateAction } from 'react'
import type { Media } from './media-player.types'

interface MediaContext {
  playlist: Media[]
  currentMedia: Media | undefined
  playMedia: (media: Media) => () => void
  isPlaying: boolean
  setPlaying: Dispatch<SetStateAction<boolean>>
  play: Function
  pause: Function
}

const MediaPlayerContext = createContext<MediaContext>({
  playlist: [],
  currentMedia: undefined,
  playMedia: (media: Media) => Function,
  isPlaying: false,
  setPlaying: () => undefined,
  play: () => undefined,
  pause: () => undefined,
})

export default MediaPlayerContext