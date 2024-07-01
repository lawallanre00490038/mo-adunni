import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { urlForImage } from '@/sanity/lib/image'

import { SanityDocument } from "next-sanity"


interface HeroBannerProps {
    heroBanner?: SanityDocument;
};


const HeroBanner: React.FC<HeroBannerProps> = ({ heroBanner }) => {

    if (!heroBanner) {
        return null;
    }
  
    return (
    <div className='hero-banner-container'>
        <div className='relative'>
            <p className='beats-solo'>{heroBanner.smallText}</p>
            <h3>{heroBanner.midText}</h3>
            <h1 className='pl-0'>{heroBanner.largeText1}</h1>
            
            <Image src={urlForImage(heroBanner.image)} 
            width={250}
            height={250}
            alt="ready-to-wear"  className='hero-banner-image'/>

            <div>
                <Link href={`/product/${heroBanner.product}`}>
                    <button type='button'>{heroBanner.buttonText}</button>
                </Link>

                <div className='desc'>
                    <h5>Description</h5>
                    <p>{heroBanner.desc}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroBanner