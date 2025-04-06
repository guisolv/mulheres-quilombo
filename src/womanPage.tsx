import { IWomanData } from './data'
import HoverImage from './components/hoverImage'
import { useEffect } from 'react'
import "./styles/pageAnimations.css"

type Props = {
    woman: IWomanData
}

const WomanPage = ({ woman }: Props) => {

    useEffect(() => {
        console.log(woman.paragraphs[0].imagePath)
    })

    return (
        <div className="w-8/12 min-h-[90vh] flex flex-col mx-auto items-center">

            <div className="w-1/2 h-20" tabIndex={0}>
                <div className="w-96 border-t-2 mb-4 mx-auto border-contrast animate-reveal-div" />
                <h1 className='font-bold text-4xl text-center text-contrast animate-reveal-div'>{woman.name}</h1>
            </div>

            {
                woman.paragraphs.map((paragraph, index) => (
                    <div className={"w-full mb-8 flex " + `${index % 2 === 0 ? "animate-paragraph-even flex-row" : "animate-paragraph flex-row-reverse"}`} key={index} tabIndex={0}>
                        <HoverImage className='' imageUrl={paragraph.imagePath} />
                        <div className="growA h-64 py-4 px-6 flex flex-row items-center text-base 2xl:text-lg">
                            <p className='indent-10 text-justify text-contrast'>
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