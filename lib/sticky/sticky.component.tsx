import { useState, useRef, useEffect } from 'react'
import { Container, Aside, Main, Footer, Button } from './sticky.style'

const Sticky: React.FC = () => {
    const [expanded, setExpanded] = useState(false)
    const asideRef = useRef<HTMLElement>(null)

    const toggleExpanded = () => setExpanded(!expanded)

    useEffect(() => {
        const { current: aside } = asideRef
        
        if (!aside || !expanded) return

        const top = aside.offsetTop - 10

        if (document.documentElement.scrollTop < top) return

        window.scroll({
            top,
            behavior: 'smooth'
        })
    }, [expanded])

    return (
        <>
            <Container>
                <Aside style={{ height: expanded ? 521 : 221 }} ref={asideRef}>
                    <Button onClick={toggleExpanded}>{expanded ? 'collapse' : 'expand'}</Button>
                </Aside>
                <Main />
            </Container>
            <Footer />
        </>
    )
}

export default Sticky