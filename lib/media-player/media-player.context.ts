import { createContext } from 'react'
import type { Media } from './media-player.types'

interface MediaContext {
  currentMedia: Media | undefined
  playMedia: (media: Media) => () => void
}

const MediaPlayerContext = createContext<MediaContext>({
  currentMedia: undefined,
  playMedia: (media: Media) => Function,
})

export default MediaPlayerContext