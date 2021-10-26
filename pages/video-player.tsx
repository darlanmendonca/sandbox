import Head from 'next/head'
import VideoPlayer from 'lib/video-player/video-player.component'

const Video: React.FC = () => {
  const video = {
    poster:
      'video-player/Killswitch Engage - Rose of Sharyn guitar cover by Alex S.poster.jpg',
    sources: [
      'video-player/Killswitch Engage - Rose of Sharyn guitar cover by Alex S.mp4',
      // 'https://www.w3schools.com/html/mov_bbb.mp4',
      // 'https://www.w3schools.com/html/mov_bbb.ogg',
    ],
  }

  return (
    <>
      <Head>
        <title>Video Player</title>
      </Head>

      <VideoPlayer poster={video.poster} sources={video.sources} />
    </>
  )
}

export default Video
