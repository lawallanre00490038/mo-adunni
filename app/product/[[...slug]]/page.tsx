"use client";

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useParams, usePathname } from 'next/navigation';
import { getProductDetails, getSimilarProducts } from '@/actions/getProduct';
import { SanityDocument } from '@sanity/client';
import { urlForImage } from '@/sanity/lib/image';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';


const ProductDetails = () => {


    const [product, setProduct] = useState<SanityDocument[]>([]);
    const { images, name, price } = product[0] || {};

    const { slug } = useParams();
    const [itemSlug, index] = slug;

    const parsedIndex = Number(index);

    async function getProducts(itemSlug: string ) {
        const product = await getProductDetails({ slug: itemSlug });
            return { product };
    };

    useEffect(() => {
        const fetchProducts = async () => {
            if (typeof itemSlug === 'string') {
                const { product } = await getProducts(itemSlug);    
                setProduct(product);
            }
        };
        fetchProducts();

    }, [itemSlug]);


    useEffect(() => {
    }, [product, index]);

    console.log("Product", product)

    
    return (
        <div>
            <div className='product-detail-container'>
                <div>
                    
                    {images && images
                        .filter((_, idx: any) => idx === parsedIndex)
                        .map((image: any) => (
                            <div className='image-container' key={parsedIndex}>
                                <Image src={urlForImage(image)} alt="images" className='product-image h-[300px] w-[300px]' 
                                    width={300} height={300}
                                />
                            </div>
                        ))
                    }
                    
                    <div className='small-images-container'>
                        {images?.map((item: any, idx: any)=>(
                            <Image src={urlForImage(item)} alt="images" 
                            key={idx}
                            width={100} height={50}
                            className='' 
                            onMouseEnter={() => alert("Mouse Enter")}
                            />
                        ))}
                    </div>

                </div>
                <div className='product-details-desc'>
                    <h1>{name}</h1>
                    <div className='reviews'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                    </div>
                    <p>
                        (20)
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
