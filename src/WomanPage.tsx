import React from 'react'
import { IWomanData } from './data'
import ScrollAnimation from 'react-animate-on-scroll'
import katuMirim from './assets/katu-mirim.webp'
import HoverImage from './components/hoverImage'

type Props = {
    woman: IWomanData
}

const WomanPage = ({woman}: Props) => {
    return (
        <div className="w-8/12 h-[90vh] flex flex-col mx-auto items-center">

            <div className="w-1/2 h-20">
                <ScrollAnimation animateIn='fadeInLeft' duration={0.75} delay={1.5}>
                    <div className="w-96 border-t-2 mb-4 mx-auto" />
                    <h1 className='font-bold text-4xl text-center'>{woman.name}</h1>
                </ScrollAnimation>
            </div>

            {
                woman.paragraphs.map((paragraph, index) => (
                    <div className={"w-full mb-8 flex " + `${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`} key={index}>
                        <HoverImage className='' imageUrl={paragraph.imagePath} />
                        <div className="grow h-64 py-4 px-6 text-lg ">
                            <p className='indent-10 text-justify'>
                                {paragraph.text}
                            </p>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default WomanPage;

// </div><div className='bg-neutral-400 w-full h-full'/>