import { useRef, useState, useEffect } from 'react'
import { useContext } from 'react'
import MediaPlayerContext from 'lib/media-player/media-player.context'

import type { ChangeEvent, KeyboardEvent } from 'react'

export const useVideoPlayer = (source: string) => {
  const container = useRef<HTMLDivElement>(null)
  const video = useRef<HTMLVideoElement>(null)
  const previousSource = useRef('')
  const [isPlaying, setPlaying] = useState(false)
  const [isEnded, setEnded] = useState(false)
  const [isMuted, setMuted] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [progress, setProgress] = useState(0)
  const [durationTime, setDurationTime] = useState(0)
  const [canPlay, setCanPlay] = useState(false)
  const [isFullscreen, setFullscreen] = useState(false)
  const { toggleFullscreen } = useFullscreen()

  const { playlist, isPlaying: mediaIsPlaying, setPlaying: setMediaPlaying } = useContext(MediaPlayerContext)

  useEffect(() => {
    setPlaying(mediaIsPlaying)
  }, [mediaIsPlaying])

  useEffect(() => {
    if (previousSource.current === source) return

    if (video.current) {
      video.current.load()
      canPlay && video.current.play()
    }

    previousSource.current = source
  }, [source, canPlay])

  useEffect(() => {
    if (!video.current) return
    const _video = video.current
    const _container = container.current

    const isMobileDevice = window.navigator.userAgent
      .toLowerCase()
      .includes('mobi')

    isMobileDevice && (_video.controls = true)

    const updateDurationTime = () => setDurationTime(_video?.duration!)
    const updateEnded = () => setEnded(true)
    const updateCanPlay = () => setCanPlay(true)
    const updatePlay = () => setPlaying(true)
    const updatePause = () => setPlaying(false)
    const updateFullscreen = () => setFullscreen((isFullscreen) => !isFullscreen)

    _video.duration && updateDurationTime()
    _video.addEventListener('loadeddata', updateDurationTime)
    _video.addEventListener('ended', updateEnded)
    _video.addEventListener('canplay', updateCanPlay)
    _video.addEventListener('play', updatePlay)
    _video.addEventListener('pause', updatePause)
    _container?.addEventListener('fullscreenchange', updateFullscreen)
    
    document.addEventListener('keydown', changeProgress)

    return () => {
      _video.removeEventListener('loadeddata', updateDurationTime)
      _video.removeEventListener('ended', updateEnded)
      document.removeEventListener('keydown', changeProgress)
      _video.removeEventListener('canplay', updateCanPlay)
      _video.removeEventListener('play', updatePlay)
      _video.removeEventListener('pause', updatePause)
      _container?.removeEventListener('fullscreenchange', updateFullscreen)
    }
  }, [])

  useEffect(() => {
    if (!video.current) return
    isPlaying ? video.current.play() : video.current.pause()
    setMediaPlaying(isPlaying)
  }, [isPlaying, video, setMediaPlaying])

  useEffect(() => {
    if (!video.current || !isEnded) return
    video.current.pause()
    setPlaying(false)
  }, [isEnded])

  useEffect(() => {
    if (!video.current) return
    isMuted ? (video.current.muted = true) : (video.current.muted = false)
  }, [isMuted, video])

  const play = () => setPlaying(true)
  const pause = () => setPlaying(false)

  const togglePlay = () => {
    setPlaying(!isPlaying)
    setEnded(false)
  }

  const toggleVolume = () => setMuted(!isMuted)

  const updateCurrentTime = () => {
    if (!video.current) return
    const duration = Number.isNaN(video.current.duration)
      ? 1
      : video.current.duration
    setCurrentTime(video.current.currentTime)
    setProgress((video.current.currentTime / duration) * 100)
  }

  const updateProgress = (event: ChangeEvent<HTMLInputElement>) => {
    if (!video.current) return

    const value = Number(event.target.value)
    const time = (video.current.duration / 100) * value
    video.current.currentTime = time
    setProgress(value)
  }

  const changeProgress = (
    event: globalThis.KeyboardEvent | KeyboardEvent<HTMLInputElement>
  ) => {
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
    isFullscreen,
    toggleFullscreen: () => toggleFullscreen(container?.current),
    playlist,
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
