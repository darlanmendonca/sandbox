import Head from 'next/head'
import { useState, useEffect } from 'react'
import { Container, List, Button } from './background.style'

const BackgroundMobile: React.FC = () => {
    const colors = [
        'white',
        'green',
        'black',
    ]
    const [color, setColor] = useState('white')

    const changeColor = (color: string) => () => setColor(color)

    const check = () => console.log(window.innerHeight)

    useEffect(() => {
        document.documentElement.style.backgroundColor = color
        document.body.style.backgroundColor = color

        const meta = document.querySelector('meta[name=theme-color]')

        if (window.innerHeight === 745 && meta) {
            meta.remove()
            return
        }

        if (meta) {
            meta?.setAttribute('content', color)
        }
        else {
            const newMeta = document.createElement('meta')
            newMeta.setAttribute('name', 'theme-color')
            newMeta.setAttribute('content', color)
            document.head.appendChild(newMeta)
        }
    }, [color])

    return (
        <>            
            <List>
                <li><Button onClick={check}>check</Button></li>
                {colors.map(color => (
                    <li key={color}>
                        <Button onClick={changeColor(color)}>{color}</Button>
                    </li>
                ))}
            </List>
        </>
    )
}

export default BackgroundMobile