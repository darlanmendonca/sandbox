import styled from '@emotion/styled'

export const Main = styled.main`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin: 0;
    line-height: 1.15;
    font-size: 4rem;
  }

  h1,
  p {
    text-align: center;
  }

  h1 strong {
    color: #0070f3;
  }

  p {
    line-height: 1.5;
    font-size: 1.5rem;
  }
`