import Head from 'next/head'
import MediaPlayerContext from 'lib/media-player/media-player.context'
import VideoPlayer from 'lib/video-player/video-player.component'
import MediaPlayer from 'lib/media-player/media-player.component'
import useMediaPlayer from 'lib/media-player/media-player.hook'

const Video: React.FC = () => {
  const { Provider } = MediaPlayerContext
  const { playlist, currentMedia, playMedia } = useMediaPlayer()

  return (
    <>
      <Head>
        <title>Video Player</title>
      </Head>

      <Provider value={{ playlist, currentMedia, playMedia }}>
        <VideoPlayer poster={currentMedia.poster} source={currentMedia.source} />
        <MediaPlayer playlist={playlist} />
      </Provider>
    </>
  )
}

export default Video
