import { useState } from 'react'

type Props = {
    imageUrl?: string,
    className?: string
}

export default function HoverImage({ imageUrl, className }: Props) {
    const [style, setStyle] = useState<React.CSSProperties>({})
    const mouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        
        const deltaX = e.clientX - centerX
        const deltaY = e.clientY - centerY
        
        console.log(deltaX, )
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
        <div style={style} onMouseMove={mouseMove} onMouseOut={mouseOut} className={className + "w-80 h-64 shrink-0 rounded-md shadow-xl overflow-hidden transition-shadow hover:shadow-black/40 hover:scale-[1.02] not-hover:transition-all duration-300 not-hover:ease-in-out outline-2 outline-contrast hover:outline-accent"}>
            <img className='w-full h-full object-cover select-none' draggable={false} src={imageUrl} />
        </div>
    )
}

{/* <div className="w-80 h-64 shrink-0 rounded-lg shadow-xl overflow-hidden"> */ }
