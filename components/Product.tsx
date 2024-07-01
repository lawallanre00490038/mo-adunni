import React from 'react'
import { FC } from 'react'
import { SanityDocument } from 'next-sanity'
import { urlForImage } from '@/sanity/lib/image'
import Link from 'next/link'
import Image from 'next/image'

interface ProductProps {
  product: SanityDocument;
}

const Product: FC<ProductProps> = ({ product: { image, name, slug, price } }) => {
  return (
    <div>
          {image.length > 1 ? (
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-x-3'>
              {image.map((innerImg: any, index: any) => (
                <div key={index} className='product-card'>
                  <Link href={`/product/${slug.current}/${index}`}>
                    <Image src={urlForImage(innerImg)} alt={name} className='product-image w-[300px] h-[300px]' />
                    <p className='product-name'>{name}</p>
                    <p className='product-price'>N{price}</p>
                  </Link>
                </div>
              ))}
          </div>
          ) : (
            <div className='product-card'>
              <Link href={`/product/${slug.current}/0`}>
                <Image src={urlForImage(image[0])} alt={name} className='product-image w-[300px] h-[300px]' />
                <p className='product-name'>{name}</p>
                <p className='product-price'>N{price}</p>
              </Link>
            </div>
          )}
    </div>
  )
}

export default Product