import React, { PropsWithChildren, useEffect, useRef, useState } from 'react'
import {lerp, easeInOutQuad} from '../tools'


export default function ScrollingText(props: PropsWithChildren) {
    
    const [style, setStyle] = useState<React.CSSProperties>({})

    const element = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function onScroll(_: Event | null) {
            const scrollVar = window.scrollY / 1000
    
            const mappedValue = easeInOutQuad(Math.min(scrollVar / 0.7, 1))
    
            setStyle({
                marginTop: `${lerp(40, 0, mappedValue)}vh`,
                fontSize: `${lerp(4.5, 1.65, mappedValue)}rem`,
                lineHeight: `${lerp(90, 28, mappedValue)}px`,
                height: `${lerp(10, 4.75, mappedValue)}rem`,
            })
        }

        window.addEventListener('scroll', onScroll);

        onScroll(null);

        return () => {
            window.removeEventListener('scroll', onScroll);
        }
    }, [])

    return (
        <div className='fixed left-0 right-0 flex items-center justify-center' ref={element} style={style}>
            <p className="text-center font-bold">{props.children}</p>
        </div>
    )
}