import styled from '@emotion/styled'

export const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
`

export const HitBox = styled.div`
  position: fixed;
  top: 10%;
  transform: translateY(-50%);
  right: 10px;
  width: 31rem;
  height: 45rem;
  border-radius: 20px;
  z-index: 10;
`

export const Box = styled.div`
  position: absolute;
  top: 10%;
  transform: translateY(-50%);
  right: 10px;
  width: 31rem;
  height: 45rem;
  border-radius: 20px;
  padding: 1.6rem 0.8rem;
  box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.2);
  background: url('media-player/boruto-uzumaki.jpg') center center no-repeat;
  background-size: cover;
  font-size: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`

export const Handle = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  cursor: move;
  color: black;
  text-align: center;
  line-height: 2rem;
  font-size: 2rem;
  border-radius: inherit;
`

export const Header = styled.header`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 0 0.8rem;

  div:first-of-type {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.6rem;
  }

  div:last-of-type {
    display: flex;
    flex: 1;
  }
`

export const Button = styled.button`
  min-width: 4.8rem;
  height: 3.2rem;
  border: 0;
  border-radius: 0.8rem;
  background: rgba(225, 225, 225, 0.5);
  backdrop-filter: blur(3rem);
  cursor: pointer;

  &:hover,
  &[aria-current='true'] {
    background: #00fe01;
  }
  
  &[aria-current='true'] {
    cursor: default;
  }
`

export const List = styled.ul`
  list-style: none;
  height: 12rem;
  margin: 0;
  padding: 0;
  counter-reset: channel;
  overflow-x: hidden;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 4px;
    margin-left: 0.6rem;
  }

  ::-webkit-scrollbar-track {
    border-radius: 3px;
    background: rgba(225, 225, 225, 0.5);
    backdrop-filter: blur(3rem);
  }

  ::-webkit-scrollbar-thumb {
    background: #00fe01;
    border-radius: 3px;
  }

  li {
    line-height: 1.6rem;
    padding: 0 0.8rem;

    & + li {
      margin-top: 0.8rem;
    }

    button {
      height: 1.6rem;
      line-height: 1.6rem;
      display: flex;
      padding: 0 0.8rem;
      font-size: 1.1rem;
      width: 100%;
    }

    span:first-of-type {
      flex: 1;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      padding: 0 0.8rem 0 0;
      text-align: left;
    }
  }
`
