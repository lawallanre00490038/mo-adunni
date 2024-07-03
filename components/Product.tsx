import React from 'react'
import { FC } from 'react'
import { SanityDocument } from 'next-sanity'
import { urlForImage } from '@/sanity/lib/image'
import Link from 'next/link'
import Image from 'next/image'

interface ProductProps {
  product: SanityDocument;
}

const Product: FC<ProductProps> = ({ product: { images, name, slug, price } }) => {

  console.log("Product", images)
  return (
    <div>
          {images.length > 1 ? (
            <div className='products-container'>
              {images.map((innerImg: any, index: any) => (
                <div key={index} className='product-card'>
                  <Link href={`/product/${slug.current}/${index}`}>
                    <Image src={urlForImage(innerImg)} alt={name} className='product-image h-[300px] w-[300px]' 
                    width={300} height={300}
                    />
                    <p className='product-name'>{name}</p>
                    <p className='product-price'>N{price}</p>
                  </Link>
                </div>
              ))}
          </div>
          ) : (
            <div className='product-card'>
              <Link href={`/product/${slug.current}/0`}>
                <Image src={urlForImage(images[0])} alt={name} className='product-image h-[300px] w-[300px]' 
                width={300} height={300}
                />
                <p className='product-name'>{name}</p>
                <p className='product-price'>N{price}</p>
              </Link>
            </div>
          )}
    </div>
  )
}

export default Product