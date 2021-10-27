import Draggable from 'react-draggable'
import useDraggable from 'lib/draggable/draggable.hook'
import {
  Container,
  Box,
  HitBox,
  Handle,
  Header,
  Button,
  List,
} from './media-player.style'

import { useState, useContext } from 'react'
import MediaPlayerContext from 'lib/media-player/media-player.context'

import type { MediaPlayerProps as Props } from './media-player.types'

const MediaPlayer: React.FC<Props> = ({ children, playlist }) => {
  const { position, handle, trackPosition } = useDraggable()
  const { playMedia, currentMedia } = useContext(MediaPlayerContext)
  const [hasPointerEvents, setPointerEvents] = useState(false)

  return (
    <>
      <HitBox
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          pointerEvents: hasPointerEvents ? 'none' : 'unset',
        }}
        onMouseEnter={() => setPointerEvents(true)}
      />
      <Container style={{ pointerEvents: hasPointerEvents ? 'unset' : 'none' }}>
        <Draggable
          position={position}
          handle="[data-handle]"
          nodeRef={handle}
          onDrag={trackPosition}
        >
          <Box
            ref={handle}
            onMouseLeave={() => setPointerEvents(false)}
            style={{
              transform: `translate(${position.x}px, ${position.y}px)`,
            }}
          >
            <Handle data-handle />
            <Header>
              <div>
                <Button>play</Button>
                <Button>prev</Button>
                <Button>next</Button>
                <Button style={{ marginLeft: '5rem' }}>minimize</Button>
              </div>
              <div>
                <Button>volume</Button>
                <Button>shuffle</Button>
              </div>
            </Header>

            <List>
              {playlist.map((media, index) => (
                <li key={index}>
                  <Button
                    aria-current={currentMedia?.name === media.name}
                    onClick={playMedia(media)}
                  >
                    <span>
                      CH {String(index + 1).padStart(2, '0')}: {media.name}
                    </span>
                    <span>{media.duration}</span>
                  </Button>
                </li>
              ))}
            </List>
          </Box>
        </Draggable>
      </Container>
    </>
  )
}

export default MediaPlayer
