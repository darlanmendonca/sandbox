import React, { useRef, useState, useEffect } from 'react'

export const useVideoPlayer = () => {
  const container = useRef<HTMLDivElement>(null)
  const video = useRef<HTMLVideoElement>(null)
  const [isPlaying, setPlaying] = useState(false)
  const [isEnded, setEnded] = useState(false)
  const [isMuted, setMuted] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [progress, setProgress] = useState(0)
  const [durationTime, setDurationTime] = useState(0)
  const { toggleFullscreen } = useFullscreen()

  const play = () => setPlaying(true)
  const pause = () => setPlaying(false)

  const togglePlay = () => {
    setPlaying(!isPlaying)
    setEnded(false)
  }

  const toggleVolume = () => setMuted(!isMuted)

  const updateCurrentTime = () => {
    if (!video.current) return
    setCurrentTime(video.current.currentTime)
    setProgress((video.current.currentTime / video.current.duration) * 100)
  }

  const updateProgress = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!video.current) return

    const value = Number(event.target.value)
    const time = (video.current.duration / 100) * value
    video.current.currentTime = time
    setProgress(value)
  }

  const changeProgress = (event: React.KeyboardEvent) => {
    document.activeElement?.tagName === 'INPUT' && event.preventDefault()
    
    if (!video.current) return

    switch (event.key) {
      case 'ArrowRight':
        video.current.currentTime += 10
        break
      case 'ArrowLeft':
        video.current.currentTime -= 10
        break
    }
  }

  const timeFormat = (seconds: number) => {
    const h = Math.floor(seconds / 3600)
    const m = Math.floor((seconds % 3600) / 60)
    const s = Math.round(seconds % 60)

    return [h, m > 9 ? m : h ? '0' + m : m || '0', s > 9 ? s : '0' + s]
      .filter(Boolean)
      .join(':')
  }

  useEffect(() => {
    if (!video.current) return

    const updateDurationTime = () => setDurationTime(video.current?.duration!)

    const updateEnded = () => setEnded(true)

    video.current?.duration && updateDurationTime()
    video.current.addEventListener('loadeddata', updateDurationTime)
    video.current.addEventListener('ended', updateEnded)
    document.addEventListener('keydown', changeProgress)

    return () => {
      video.current?.removeEventListener('loadeddata', updateDurationTime)
      video.current?.removeEventListener('ended', updateEnded)
      document.removeEventListener('keydown', changeProgress)
    }
  }, [])

  useEffect(() => {
    if (!video.current) return
    isPlaying ? video.current.play() : video.current.pause()
  }, [isPlaying, video])

  useEffect(() => {
    if (!video.current || !isEnded) return
    video.current.pause()
    setPlaying(false)
  }, [isEnded])

  useEffect(() => {
    if (!video.current) return
    isMuted ? (video.current.muted = true) : (video.current.muted = false)
  }, [isMuted, video])

  return {
    container,
    video,
    isPlaying,
    isMuted,
    play,
    pause,
    togglePlay,
    toggleVolume,
    timeFormat,
    currentTime,
    updateCurrentTime,
    durationTime,
    progress,
    updateProgress,
    changeProgress,
    toggleFullscreen: () => toggleFullscreen(container?.current),
  }
}

function useFullscreen() {
  const isFullscreen = () =>
    document.fullscreenElement ||
    // @ts-ignore
    document.msFullscreenElement ||
    // @ts-ignore
    document.mozFullScreenElement ||
    // @ts-ignore
    document.webkitFullscreenElement

  const exitFullscreen = () => {
    document.exitFullscreen?.() ||
      // @ts-ignore
      document.msExitFullscreen?.() ||
      // @ts-ignore
      document.mozCancelFullScreen?.() ||
      // @ts-ignore
      document.webkitExitFullscreen?.()
  }

  function enterFullscreen(element: HTMLElement) {
    element.requestFullscreen?.() ||
      // @ts-ignore
      element.msRequestFullscreen?.() ||
      // @ts-ignore
      element.mozRequestFullScreen?.() ||
      // @ts-ignore
      element.webkitRequestFullscreen?.()
  }

  const toggleFullscreen = (element: HTMLElement | null) => {
    if (!element) return
    isFullscreen() ? exitFullscreen() : enterFullscreen(element)
  }

  return {
    isFullscreen,
    enterFullscreen,
    exitFullscreen,
    toggleFullscreen,
  }
}
