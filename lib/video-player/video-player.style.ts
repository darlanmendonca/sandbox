import styled from '@emotion/styled'

export const Container = styled.div`
  position: relative;
  font-size: 10px;
  --spacing: 1.7em;
  display: flex;
  align-items: center;
  justify-content: center;
  background: black;
  overflow: hidden;

  & > div {
    transform: translateY(250%);
  }

  :hover > div,
  &[data-is-playing='false'] > div {
    transform: translateY(0%);
  }
`

export const Controls = styled.div`
  position: absolute;
  bottom: 2em;
  left: 2em;
  width: calc(100% - 4em);
  height: 1.6em;
  display: flex;
  transition: transform .2s ease;
  align-items: center;
  justify-content: center;
`

export const Button = styled.button`
  border: 0;
  background: none;
  border-radius: 4px;
  font-size: inherit;
  /* width: 1.8em; */
  height: 1.6em;
  color: white;
  margin-right: var(--spacing);
  cursor: pointer;

  :last-of-type {
    margin-right: 0;
    margin-left: var(--spacing);
  }
`

export const Progress = styled.div`
  flex: 1;
  position: relative;
  margin: 0 var(--spacing);
  --accent-color: #00fe01;
  display: flex;
  align-items: center;
  justify-content: center;

  progress {
    z-index: 0;
    position: absolute;
    top: 0.8em;
    left: 0;
    width: 100%;
    appearance: none;
    height: 0.4em;
    background: none;
    border: 1px solid white;
    box-sizing: border-box;

    &::-webkit-progress-bar {
      background: transparent;
    }

    &::-webkit-progress-value {
      background: var(--accent-color);
      box-shadow: 0 0 0 1px var(--accent-color);
    }

    &::-moz-progress-bar {
      background: var(--accent-color);
      box-shadow: 0 0 0 1px var(--accent-color);
    }
  }

  input {
    appearance: none;
    width: 100%;
    height: 1.6em;
    background: none;
    outline: none;
    cursor: pointer;
    position: relative;
    z-index: 1;
    margin: 0;

    &:focus-visible {
      outline: -webkit-focus-ring-color auto 1px;
    }

    &::-webkit-slider-thumb {
      appearance: none;
      width: 0.4em;
      height: 1.6em;
      background: var(--accent-color);
      transform: translateY(-0.6em);

      @media not all and (min-resolution: 0.001dpcm) {
        transform: translateY(-0.45em);
      }
    }

    &::-moz-range-thumb {
      appearance: none;
      width: 0.4em;
      height: 1.6em;
      background: var(--accent-color);
      border-radius: 0;
      border: 0;
    }

    &::-webkit-slider-runnable-track {
      /* background: var(--accent-color); */
      background: none;
      height: 0.4em;
    }

    &::-moz-range-track {
      background: none;
      height: 0.4em;
    }
  }
`

export const Timer = styled.div`
  color: white;
  min-width: 3em;
`

export const Video = styled.video`
  display: block;
  width: 100%;
`