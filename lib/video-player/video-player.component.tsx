import {
  Container,
  Video,
  Controls,
  Button,
  Progress,
  Timer,
} from './video-player.style'
import { useVideoPlayer } from './video-player.hook'

import type { VideoProps as Props } from './video-player.types'

const VideoPlayer: React.FC<Props> = ({ poster, source }) => {
  const {
    container,
    video,
    isPlaying,
    isMuted,
    togglePlay,
    pause,
    play,
    toggleVolume,
    timeFormat,
    currentTime,
    durationTime,
    updateCurrentTime,
    progress,
    updateProgress,
    changeProgress,
    toggleFullscreen,
  } = useVideoPlayer(source)

  return (
    <Container ref={container} data-is-playing={isPlaying}>
      <Video
        ref={video}
        poster={poster}
        preload="auto"
        onTimeUpdate={updateCurrentTime}
        onClickCapture={togglePlay}
      >
        <source
          src={source}
          type={`video/${source.split('.').pop()}`}
        />
      </Video>

      <Controls>
        <div>
          <Button title="Volume" onClick={toggleVolume}>
            {isMuted ? 'No sound' : 'Sound'}
          </Button>
          <Button onClickCapture={togglePlay}>
            {isPlaying ? 'Pause' : 'Play'}
          </Button>

          <Timer title="Current Time">{timeFormat(currentTime)}</Timer>

          <Progress>
            <input
              aria-label="Progress"
              title="Progress"
              type="range"
              max="100"
              step="0.01"
              value={progress}
              onChange={updateProgress}
              onMouseDown={pause}
              onMouseUp={play}
              onKeyDown={changeProgress}
            />
            <progress value={progress} max="100" aria-hidden="true" />
          </Progress>

          <Timer title="Total Time">{timeFormat(durationTime)}</Timer>
          <Button onClick={toggleFullscreen}>Fullscreen</Button>
        </div>
      </Controls>
    </Container>
  )
}

export default VideoPlayer
