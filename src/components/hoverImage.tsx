import React, { useState } from 'react'

type Props = {
    imageUrl?: string,
    className?: string,
}

export default function HoverImage({ imageUrl, className }: Props) {
    const [style, setStyle] = useState<React.CSSProperties>({})
    const mouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        var el = e.currentTarget
        const centerX = el.offsetLeft + el.offsetWidth / 2;
        const centerY = el.offsetTop + el.offsetHeight / 2;

        const deltaX = e.pageX - centerX
        const deltaY = e.pageY - centerY

        const rotX = Math.pow(Math.abs(deltaX), 1.4) / 70.0 * Math.sign(deltaX);
        const rotY = Math.pow(Math.abs(deltaY), 1.4) / 70.0 * -Math.sign(deltaY);
        
        setStyle({
            transform: `perspective(5000px) rotateY(${rotX}deg) rotateX(${rotY}deg)`,

        })
    }

    const mouseOut = (_: React.MouseEvent<HTMLDivElement>) => {
        setStyle({
            transform: `perspective(5000px) rotateY(0deg) rotateX(0deg)`,
        })
    }

    return (
        <div style={style} onMouseMove={mouseMove} onMouseOut={mouseOut} className={className + "w-80 h-64 shrink-0 rounded-lg shadow-xl overflow-hidden hover:scale-[1.02] not-hover:transition-all not-hover:duration-300 not-hover:ease-in-out"}>
            <img className='w-full h-full object-cover' src={imageUrl} />
        </div>
    )
}

{/* <div className="w-80 h-64 shrink-0 rounded-lg shadow-xl overflow-hidden"> */ }
