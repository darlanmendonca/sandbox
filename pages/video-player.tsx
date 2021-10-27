import Head from 'next/head'
import MediaPlayerContext from 'lib/media-player/media-player.context'
import VideoPlayer from 'lib/video-player/video-player.component'
import MediaPlayer from 'lib/media-player/media-player.component'
import useMediaPlayer from 'lib/media-player/media-player.hook'

const Video: React.FC = () => {
  const { Provider } = MediaPlayerContext
  const { playlist, currentMedia, ...mediaPlayerContext } = useMediaPlayer()

  return (
    <>
      <Head>
        <title>Video Player</title>
      </Head>

      <Provider value={{ playlist, currentMedia, ...mediaPlayerContext }}>
        <VideoPlayer
          poster={currentMedia.poster}
          source={currentMedia.source}
        />
        <MediaPlayer playlist={playlist} />
      </Provider>
    </>
  )
}

export default Video
