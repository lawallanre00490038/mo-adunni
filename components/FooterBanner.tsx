import { SanityDocument } from 'next-sanity'
import React from 'react'
import Link from 'next/link'
import { urlForImage } from '@/sanity/lib/image'
import Image from 'next/image'

interface FooterBanner {
  footerBanner?: SanityDocument
}

const FooterBanner: React.FC<FooterBanner> = ({ footerBanner }: FooterBanner) => {
  
  if (!footerBanner) {
    return null; 
  }

  return (
    <div className='footer-banner-container  mt-6'>
      <div className='banner-desc'>
        <div className='left'>
          <p>{footerBanner.discount}</p>
          <h3>{footerBanner.largeText1}</h3>
          <h3>{footerBanner.largeText1}</h3>
          <p>{footerBanner.saleTime}</p>
        </div>
        <div className='right'>
          <p>{footerBanner.smallText}</p>
          <h3>{footerBanner.midText}</h3>
          <p>{footerBanner.desc}</p>
          <Link href={`/product/${footerBanner.product}`}>
            <button type='button'>{footerBanner.buttonText}</button>
          </Link>
        </div>

        <Image src={urlForImage(footerBanner.image)} width={250} height={250} alt="ready-to-wear" className='hero-banner-image'/>
      </div>
    </div>
  )
}

export default FooterBanner