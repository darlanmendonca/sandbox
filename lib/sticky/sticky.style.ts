import styled from '@emotion/styled'

export const Container = styled.div`
    display: grid;
    grid-template-columns: 221px auto;
    grid-column-gap: 10px;
    padding: 10px;
`

export const Aside = styled.aside`
    background: blue;
    height: 121px;
    margin-top: 50vh;
    background-color: #fff;
    opacity: 0.8;
    background-image:  linear-gradient(#f00 1px, transparent 1px), linear-gradient(to right, #f00 1px, #fff 1px);
    background-size: 20px 20px;
    position: sticky;
    top: 10px;
    padding: 10px;
    /* transition: height .4s ease; */

    :before {
        content: 'ASIDE';
    }
`

export const Button = styled.button`
    font-size: 2em;
    position: absolute;
    bottom: 10px;
    right: 10px;
`

export const Main = styled.div`
    height: 2001px;
    background-color: #fff;
    opacity: 0.8;
    background-image:  linear-gradient(#868e96 1px, transparent 1px), linear-gradient(to right, #868e96 1px, #fff 1px);
    background-size: 20px 20px;
    padding: 10px;

    :before {
        content: 'MAIN';
    }
`

export const Footer = styled.footer`
    height: 100vh;
    background: #868e96;
    padding: 10px;

    :before {
        content: 'FOOTER';
    }
`