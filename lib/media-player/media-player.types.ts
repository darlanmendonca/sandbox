export type Media = {
  name: string
  poster: string
  source: string
  duration: string
}

export interface MediaPlayerProps {
  playlist: Media[]
}