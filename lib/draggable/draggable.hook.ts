import { useState, useRef } from 'react'
import type { DraggableData, DraggableEvent } from 'react-draggable'

const useDraggable = () => {
  const handle = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
    lastX: 0,
    lastY: 0,
  })

  const trackPosition = (event: DraggableEvent, data: DraggableData) =>
    setPosition(data)

  return {
    handle,
    position,
    trackPosition,
  }
}

export default useDraggable
