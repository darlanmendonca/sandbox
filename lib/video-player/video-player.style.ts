import styled from '@emotion/styled'

export const Container = styled.div`
  position: relative;
  font-size: 10px;
  --spacing: 1.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: black;

  & > div div {
    transform: translateY(250%);
  }

  :hover > div div,
  &[data-is-playing='false'] > div div {
    transform: translateY(0%);
  }
`

export const Controls = styled.div`
  position: absolute;
  bottom: 0;
  left: 2rem;
  padding-bottom: 2rem;
  width: calc(100% - 4rem);
  overflow: hidden;

  @media (hover: none) {
    display: none;
  }

  div {
    height: 1.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s ease;
  }
`

export const Button = styled.button`
  border: 0;
  background: none;
  border-radius: 4px;
  font-size: inherit;
  /* width: 1.8rem; */
  height: 1.6rem;
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
    top: 0.8rem;
    left: 0;
    width: 100%;
    appearance: none;
    height: 0.4rem;
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
    height: 1.6rem;
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
      width: 0.4rem;
      height: 1.6rem;
      background: var(--accent-color);
      transform: translateY(-0.3em);

      @media not all and (min-resolution: 0.001dpcm) {
        transform: translateY(-0.45em);
      }
    }

    &::-moz-range-thumb {
      appearance: none;
      width: 0.4rem;
      height: 1.6rem;
      background: var(--accent-color);
      border-radius: 0;
      border: 0;
    }

    &::-webkit-slider-runnable-track {
      background: none;
      height: 0.4rem;
    }

    &::-moz-range-track {
      background: none;
      height: 0.4rem;
    }
  }
`

export const Timer = styled.div`
  color: white;
  min-width: 3rem;
`

export const Video = styled.video`
  display: block;
  width: 100%;
  object-fit: contain;
  max-height: 100vh;
`